import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLanguage } from "../../context/LanguageContext";

const ContactForm = () => {
  const { language } = useLanguage();
  const contactText = {
    pt: {
      question: "Tem Dúvidas?",
      title: "Envie-nos uma Mensagem",
      namePlaceholder: "Nome*",
      emailPlaceholder: "Email*",
      phonePlaceholder: "Telefone",
      commentsPlaceholder: "Fale-nos sobre o projeto *",
      submitButton: "Entre em Contacto",
      toastSucessMessage: "Obrigado pela sua mensagem!",
      toastFailureMessage:
        "Erro ao enviar a mensagem. Por favor, tente novamente.",
      loaderMessage: "Enviando mensagem...",
    },
    en: {
      question: "Have Questions?",
      title: "Send Us a Message",
      namePlaceholder: "Name*",
      emailPlaceholder: "Email*",
      phonePlaceholder: "Phone",
      commentsPlaceholder: "Tell us about the project *",
      submitButton: "Get in Touch",
      toastSucessMessage: "Thank you for your message!",
      toastFailureMessage: "Error sending message. Please try again.",
      loaderMessage: "Sending message...",
    },
  };
  const t = contactText[language] || contactText["pt"]; // Fallback to Portuguese if language not found

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Show loading toast

    try {
      const response = await fetch("http://localhost:5000/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message);
      }

      // Success: Update toast
      toast.success(t.toastSucessMessage, {
        position: "top-right",
        autoClose: 3000,
        type: "success",
        isLoading: false,
        className: "Toastify__toast--default", // Optional: if you want additional styling
        progressClassName: "Toastify__progress-bar--default",
        icon: ({ theme, type }) => (
          <svg viewBox="0 0 512 512" width="20" height="20">
            {/* Círculo azul - usando sua variável CSS */}
            <path
              fill="var(--color-primary)"
              d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"
            />
            {/* Checkmark branco */}
            <path
              fill="white"
              d="M369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
            />
          </svg>
        ),
      });

      // Reset form
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      // Error: Update toast
      toast.error(error.message || t.toastFailureMessage, {
        position: "top-right",
        autoClose: 3000,
        type: "error",
        isLoading: false,
      });
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <>
      <div className="contact-form-style-one">
        <h4 className="sub-title">{t.question}</h4>
        <h2 className="title">{t.title}</h2>
        <form className="contact-form contact-form" onSubmit={handleFormSubmit}>
          <div className="row">
            <div className="col-lg-12">
              <div className="form-group">
                <input
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder={t.namePlaceholder}
                  type="text"
                  autoComplete="off"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <span className="alert-error"></span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="form-group">
                <input
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  placeholder={t.emailPlaceholder}
                  type="email"
                  autoComplete="off"
                  onChange={handleChange}
                  required
                />
                <span className="alert-error"></span>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <input
                  className="form-control no-arrows"
                  id="phone"
                  name="phone"
                  placeholder={t.phonePlaceholder}
                  type="number"
                  autoComplete="off"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                <span className="alert-error"></span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="form-group comments">
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  placeholder={t.commentsPlaceholder}
                  autoComplete="off"
                  onChange={handleChange}
                  value={formData.message}
                  required
                ></textarea>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <button
                disabled={isSubmitting}
                type="submit"
                name="submit"
                id="submit"
              >
                <i className="fa fa-paper-plane"></i>
                {isSubmitting ? t.loaderMessage : t.submitButton}
              </button>
            </div>
          </div>
          <div className="col-lg-12 alert-notification">
            <div id="message" className="alert-msg"></div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;

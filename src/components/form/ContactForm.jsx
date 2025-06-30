import { toast } from "react-toastify";
import { useLanguage } from "../../context/LanguageContext";


const ContactForm = () => {
  

  const { language } = useLanguage();
  const contactText = {
    pt: {
      question : "Tem Dúvidas?",
      title: "Envie-nos uma Mensagem",
      namePlaceholder: "Nome*",
      emailPlaceholder: "Email*",
      phonePlaceholder: "Telefone",
      commentsPlaceholder: "Fale-nos sobre o projeto *",
      submitButton: "Entre em Contacto",
      toastMessage: "Obrigado pela sua mensagem!",
    },
    en: {
      question: "Have Questions?",
      title: "Send Us a Message",
      namePlaceholder: "Name*",
      emailPlaceholder: "Email*",
      phonePlaceholder: "Phone",
      commentsPlaceholder: "Tell us about the project *",
      submitButton: "Get in Touch",
      toastMessage: "Thank you for your message!",
    },
  };
  const t = contactText[language] || contactText["pt"]; // Fallback to Portuguese if language not found

  const handleForm = (event) => {
    event.preventDefault();
    event.target.reset();
   toast.success(`${t.toastMessage}`);
  };
  
  return (
    <>
      <div className="contact-form-style-one">
        <h4 className="sub-title">{t.question}</h4>
        <h2 className="title">{t.title}</h2>
        <form className="contact-form contact-form" onSubmit={handleForm}>
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
                  placeholder={t.emailPlaceholder}
                  type="email"
                  autoComplete="off"
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
                  id="comments"
                  name="comments"
                  placeholder={t.commentsPlaceholder}
                  autoComplete="off"
                  required
                ></textarea>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <button type="submit" name="submit" id="submit">
              <i className="fa fa-paper-plane"></i> {t.submitButton}
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

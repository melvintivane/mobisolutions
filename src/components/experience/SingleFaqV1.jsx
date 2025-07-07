const SingleFaqV1 = ({ faq, isFirst }) => {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={`heading${faq.id}`}>
        <button
          className={`accordion-button ${!isFirst ? 'collapsed' : ''}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${faq.id}`}
          aria-expanded={isFirst ? 'true' : 'false'}
          aria-controls={`collapse${faq.id}`}
        >
          {faq.title}
        </button>
      </h2>
      <div
        id={`collapse${faq.id}`}
        className={`accordion-collapse collapse ${isFirst ? 'show' : ''}`}
        aria-labelledby={`heading${faq.id}`}
        data-bs-parent="#faqAccordion"
      >
        <div className="accordion-body">
          <p>{faq.text}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleFaqV1;
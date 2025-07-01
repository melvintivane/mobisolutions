import { useLanguage } from "../../context/LanguageContext";
import ServiceFaqData from "../../translations/ServiceFaq";
import SingleFaqV1 from "../experience/SingleFaqV1";

const ServiceFaqV1 = ({ serviceSlug }) => {
  const{language} = useLanguage();
  const serviceKeyMap = {
    'arquitetura-de-software': 'Arquitetura de Software',
    'consultoria-em-ti': 'Consultoria em TI',
    'agencia-de-marketing-digital': 'Agência de Marketing Digital',
    'seguranca-e-investimentos-em-ti': 'Segurança e Investimentos em TI',
    'pesquisa-de-mercado-digital': 'Pesquisa de Mercado Digital',
    'analise-de-relatorios-digitais': 'Análise de Relatórios Digitais',
    "software-architecture": "Software Architecture",
    "it-consulting": "IT Consulting",
    "digital-marketing-agency": "Digital Marketing Agency",
    "it-security-and-investments": "IT Security and Investments",
    "digital-market-research": "Digital Market Research",
    "digital-reporting-analysis": "Digital Reporting Analysis"
  };

  // Obtém a chave correta baseada no slug
  const serviceKey = serviceKeyMap[serviceSlug] || serviceSlug;
  
  // Obtém as FAQs específicas para este serviço
  const serviceFaqs = ServiceFaqData[language]?.[serviceKey] || ServiceFaqData['pt'][serviceKey] || [];

  return (
    <>
      <div className="accordion mt--20" id="faqAccordion">
        {serviceFaqs.map((faq, index) => (
          <SingleFaqV1 
            faq={faq} 
            key={faq.id}
            // Adiciona index para controle do accordion
            isFirst={index === 0}
          />
        ))}
      </div>
    </>
  );
};

export default ServiceFaqV1;
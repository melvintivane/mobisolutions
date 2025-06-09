import ServiceFaqData from "../../jsonData/ServiceFaqData.json";
import SingleFaqV1 from "../experience/SingleFaqV1";

const ServiceFaqV1 = ({ serviceSlug }) => {
  const serviceKeyMap = {
    'arquitetura-de-software': 'Arquitetura de Software',
    'consultoria-em-ti': 'Consultoria em TI',
    'agencia-de-marketing-digital': 'Agência de Marketing Digital',
    'seguranca-e-investimentos-em-ti': 'Segurança e Investimentos em TI',
    'pesquisa-de-mercado-digital': 'Pesquisa de Mercado Digital',
    'analise-de-relatorios-digitais': 'Análise de Relatórios Digitais'
  };

  // Obtém a chave correta baseada no slug
  const serviceKey = serviceKeyMap[serviceSlug] || serviceSlug;
  
  // Obtém as FAQs específicas para este serviço
  const serviceFaqs = ServiceFaqData[serviceKey] || [];

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
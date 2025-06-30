// hooks/useService.js
import { useLanguage } from "../context/LanguageContext";
import ProjectV1Data from "../jsonData/ProjectV1Data.json";
import ServiceV1Data from "../jsonData/ServiceV1Data.json";

export const useService = (serviceId) => {
  const { language } = useLanguage();
  
  // Encontra o serviço no idioma atual
  const service = ServiceV1Data[language]?.find(item => item.id === serviceId);
  
  // Fallback para português se não encontrar no idioma atual
  return service || ServiceV1Data['pt']?.find(item => item.id === serviceId);
};

export const useServiceProject = (projectId) => {
  const { language } = useLanguage();
  
  // Encontra o serviço no idioma atual
  const service = ProjectV1Data[language]?.find(item => item.id === projectId);
  
  // Fallback para português se não encontrar no idioma atual
  return service || ProjectV1Data['pt']?.find(item => item.id === projectId);
};
// hooks/useLocalizedData.js
import { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const cache = {};

const useLocalizedData = (fileName) => {
  const { language } = useLanguage();
  const [data, setData] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      // Verifica se já temos os dados em cache
      const cacheKey = `${fileName}_${language}`;
      if (cache[cacheKey]) {
        setData(cache[cacheKey]);
        return;
      }

      try {
        const response = await import(`../jsonData/${fileName}.json`);
        const localizedData = response.default[language] || response.default;
        cache[cacheKey] = localizedData; // Armazena em cache
        setData(localizedData);
      } catch (error) {
        console.error(`Error loading ${fileName}.json:`, error);
        setData(null);
      }
    };

    loadData();
  }, [fileName, language]);

  return data;
};

export default useLocalizedData;
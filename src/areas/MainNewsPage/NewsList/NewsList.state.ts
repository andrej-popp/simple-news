import { useCallback, useState } from 'react';

export const apiKey = 'ba233ab3ab5e46289a30fe2cc856ea95';

export const useNewsState = () => {
  const [config, setConfig] = useState({
    q: 'ukraine',
    from: new Date().getDate().toString(),
    apiKey,
  });

  const setField = useCallback((field, value) => {
    const resConfig = {...config, ...{[field]: value} };
    setConfig(resConfig)
  }, [config]);

  return [config , setField];
}

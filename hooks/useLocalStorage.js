import { useEffect, useState } from 'react';

const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(defaultValue);

  useEffect(() => {
    const value = localStorage.getItem(key);

    setState(JSON.parse(value) || defaultValue);
  }, []);

  useEffect(() => {
    if (state !== defaultValue)
      localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, setState];
};

export default useLocalStorage;

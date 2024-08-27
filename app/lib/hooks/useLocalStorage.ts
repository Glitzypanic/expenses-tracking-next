import { useState, useEffect } from "react";

export const useLocalStorage = (key: string, initialValue: any) => {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      // Obtener del almacenamiento por clave
      const item = window.localStorage.getItem(key);
      // Analizar el JSON almacenado o si ninguno, devolver initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // Si hay error, también devolver initialValue
      console.log(error);
      return initialValue;
    }
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const item = window.localStorage.getItem(key);
      if (item) {
        setStoredValue(JSON.parse(item));
      }
    }
  }, [key]);

  const setValue = (value: any) => {
    try {
      // Permitir que value sea una función para que tengamos la misma API que useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Guardar estado
      setStoredValue(valueToStore);
      // Guardar en localStorage
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      // Una implementación más avanzada manejaría el caso de error
      console.log(error);
    }
  };

  return [storedValue, setValue];
};

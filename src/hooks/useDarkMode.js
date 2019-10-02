import { useState, useEffect } from React;
import { useLocalStorage } from './useLocalStorage.js';

export const useDarkMode = (key) => {
    const [darkMode, setDarkMode] = useLocalStorage(key);

}
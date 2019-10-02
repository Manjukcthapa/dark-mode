import { useState, useEffect } from React;
import { useLocalStorage } from './useLocalStorage.js';

export const useDarkMode = (key) => {
    const [darkMode, setDarkMode] = useLocalStorage(key);

    useEffect(() => {
        darkMode?document.querySelector('body').classList.add('dark-mode'):document.querySelector('body').classList.remove('dark-mode')
    },[darkMode])
    return [darkMode, setDarkMode];
}
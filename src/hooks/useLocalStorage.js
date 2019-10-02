import { useState } from React;

export const useLocalStorage = (key, initialValue) => {
const [storeValue, setStoreValue] = useState(() => {

    const item = window.localStorage.getItem(key);

        return item ? JSON.parse(item) : initialValue; 
})


}


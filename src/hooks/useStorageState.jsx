import {useState, useEffect} from "react"

const useStorageState = (key, initValue) => {

    const [value, setValue] = useState( JSON.parse(localStorage.getItem(key))||initValue);

    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);

    return [value, setValue];
}

export default useStorageState
import {useState, useEffect} from "react"

const useStorageState = (key, initValue) => {

    const [value, setValue] = useState(localStorage.getItem(key)||initValue);

    useEffect(() => {
      localStorage.setItem(key, value);
    }, [value, key]);

    return [value, setValue];
}

export default useStorageState
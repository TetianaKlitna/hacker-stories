import styles from "./styles/InputWithLabel.module.css"
import React from "react";

function InputWithLabel({id, type = "text", value, isFocused, onInputChange, children}) { 

  const handleChange = (event) => {
     event.preventDefault();
     onInputChange(event);
  };

    const inputRef = React.useRef();
    React.useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
    }, [isFocused]);

    return (
      <React.Fragment>
        <label htmlFor={id} className={styles.label}>{children}</label>
        <input ref = {inputRef} id={id} className={styles.input} type={type} value = {value} onChange={handleChange}/>
      </React.Fragment>
    );
  }

export default InputWithLabel;
import React from "react";

function InputWithLabel({id, type = "text", value, isFocused, onInputChange, children}) { 

  // const handleChange = (event) => {
  //                                   event.preventDefault();
  //                                   onInputChange(event);
  // };
  
    const inputRef = React.useRef();
    React.useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
    }, [isFocused]);

    return (
      <React.Fragment>
        <h1>Search Element</h1>
        <label htmlFor={id}>{children}</label>
        <input ref = {inputRef} id={id} type={type} value = {value} onChange={onInputChange}/>
      </React.Fragment>
    );
  }

export default InputWithLabel;
import React from "react";

function InputWithLabel({id, type = "text", value, onInputChange, children}) { 

  const handleChange = (event) => {
                                    event.preventDefault();
                                    onInputChange(event);
                                  };

    return (
      <React.Fragment>
        <h1>Search Element</h1>
        <label htmlFor={id}>{children}</label>
        <input id={id} type={type} value = {value} onChange={handleChange}/>
      </React.Fragment>
    );
  }

export default InputWithLabel;
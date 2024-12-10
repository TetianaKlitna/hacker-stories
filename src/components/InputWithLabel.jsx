import React from "react";

function InputWithLabel({id, label, type = "text", value, onInputChange}) { 

  const handleChange = (event) => {
                                    event.preventDefault();
                                    onInputChange(event);
                                  };

    return (
      <React.Fragment>
        <h1>Search Element</h1>
        <label htmlFor={id}>{label}</label>
        <input id={id} type={type} value = {value} onChange={handleChange}/>
      </React.Fragment>
    );
  }

export default InputWithLabel;
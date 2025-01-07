import React, { useState } from "react";

const DynamicForm = () => {
  const [fields, setFields] = useState([{ type: "text", value: "" }]);

  // Add a new field with a default type of "text"
  const addField = () => {
    setFields([...fields, { type: "text", value: "" }]);
  };

  // Remove a specific field
  const removeField = (index) => {
    setFields(fields.filter((_, i) => i !== index));
  };

  // Update the value of a specific field
  const handleInputChange = (index, event) => {
    const updatedFields = fields.map((field, i) =>
      i === index ? { ...field, value: event.target.value } : field
    );
    setFields(updatedFields);
  };

  // Change the type of a specific field
  const changeFieldType = (index, newType) => {
    const updatedFields = fields.map((field, i) =>
      i === index ? { ...field, type: newType } : field
    );
    setFields(updatedFields);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data:", fields);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Dynamic Form Comp</h2>
      {fields.map((field, index) => (
        <div key={index} style={{ marginBottom: "10px" }}>
          <input
            type={field.type}
            value={field.value}
            onChange={(event) => handleInputChange(index, event)}
            placeholder={`Field ${index + 1}`}
            style={{ marginRight: "10px" }}
          />
          <select
            value={field.type}
            onChange={(event) => changeFieldType(index, event.target.value)}
            style={{ marginRight: "10px" }}
          >
            <option value="text">Text</option>
            <option value="number">Number</option>
            <option value="email">Email</option>
            <option value="date">Date</option>
            <option value="password">Password</option>
          </select>
          <button type="button" onClick={() => removeField(index)}>
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={addField} style={{ marginRight: "10px" }}>
        Add Field
      </button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default DynamicForm;

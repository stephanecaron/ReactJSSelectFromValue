import React from 'react'

function DynamicSelect({emp, setSelected}) {
  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  const options = emp.map(({name, experience}) => (
    <option key={name} value={name}>{name}</option>
  ));
  return (
    <div>
      <select onChange={handleChange}>
        {options}
      </select>
    </div>
  );
}

export default DynamicSelect;
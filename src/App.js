import { useState } from 'react';
import './App.css';
import DynamicSelect from './DynamicSelect';

function App() {

  const [emp]=useState([
        {name: "Raja", experience:"10+ Years"},
        {name: "Mano", experience:"2 Years"},
        {name: "Tom", experience:"5+ Years"},
        {name: "Stephane", experience:"6+ Years"}
         ]);

  const [selected, setSelected] = useState(emp[0].name);
/*   const selectedEmp = emp.find(({name}) => name === selected); */
/*   const experience = selectedEmp ? selectedEmp.experience : '';
  const empName = selectedEmp ? selectedEmp.name : ''; */

  return (
    <div className="App">
      <header className="App-header">

          <div>
      <DynamicSelect emp={emp} setSelected={setSelected} />
{/*       <p>Name: {empName}</p>
      <p>Experience: {experience}</p> */}
    </div>

      </header>
    </div>
  );
}

export default App;

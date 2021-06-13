import React from 'react';
import { StudentContext } from './context/index.js';
export default function Student() {
  const [name, setName] = React.useState('');
  const [age, setAge] = React.useState(0);
  const [filiere, setFiliere] = React.useState('');

  const { addStudent } = React.useContext(StudentContext);
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const student = {
      name,
      age,
      filiere,
    };
    addStudent(student);
    setName('');
    setAge('');
    setFiliere('');
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="name"></label>
          <input
            className="form-control"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            name="name"
            placeholder="Nom & Prénom"
          />
        </div>
        <div className="form-group">
          <label htmlFor="age"></label>
          <input
            className="form-control"
            type="number"
            value={age}
            onChange={(event) => setAge(event.target.value)}
            name="age"
            placeholder="Age"
          />
        </div>
        <div className="form-group">
          <label htmlFor="filiere"></label>
          <input
            className="form-control"
            type="text"
            value={filiere}
            onChange={(event) => setFiliere(event.target.value)}
            name="filiere"
            placeholder="Filière"
          />
        </div>
        <div className="form-group">
          <button className="form-control" type="submit">
            Valider
          </button>
        </div>
      </form>
    </div>
  );
}

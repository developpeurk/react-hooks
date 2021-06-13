import './App.css';
import React from 'react'
import Student from './Student';
import {StudentContext} from './context/index'

function App ()
{
  const initialStudent =localStorage.getItem('students') ? JSON.parse( localStorage.getItem( 'students' ) ) : [];


  const[students,setStudents]=React.useState(initialStudent)
  const addStudent = ( student ) =>
  {
    const newStudents = [...students, student]
    setStudents( newStudents );
  }
  React.useEffect( () =>
  {
    localStorage.setItem( 'students', JSON.stringify(students) );
    console.log( 'component did mount' );
    return () =>
    {
      console.log( 'component will unmount' );
    };
  }, [ students ] )
  
  const removeStudent = (item) =>
  {
    const newStudents = students.filter( ( student ) => student.name !== item.name );
    setStudents( newStudents );
  }
  return (
    (
      <div className="container">
        { students.length > 0 && students.map( ( student,index ) => <h1 onClick={()=> removeStudent(student)} className="student-name" key={index}>{ student.name }</h1>)}
        <StudentContext.Provider
        value={ {addStudent} }
        >

        <Student />
        </StudentContext.Provider>
      
    
    </div>
  )
  );
}

export default App;

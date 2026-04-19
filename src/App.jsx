import { useState } from 'react';
import Header from './components/Header';
import StudentTable from './components/StudentTable';
import AddStudentForm from './components/AddStudentForm';
import './App.css';

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Arjun Mehta", score: 85 },
    { id: 2, name: "Sanya Iyer", score: 38 },
    { id: 3, name: "Rahul Verma", score: 72 }
  ]);

  const addStudent = (newStudent) => {
    setStudents([...students, newStudent]);
  };

  const updateScore = (id, newScore) => {
    const updatedStudents = students.map(student => 
      student.id === id ? { ...student, score: parseInt(newScore) || 0 } : student
    );
    setStudents(updatedStudents);
  };

  // UI Calculation for a "Dashboard" feel
  const totalStudents = students.length;
  const passedStudents = students.filter(s => s.score >= 40).length;

  return (
    <div className="container">
      <Header />
      
      {/* Mini Stats Summary */}
      <div style={{ display: 'flex', gap: '20px', marginBottom: '20px', justifyContent: 'center' }}>
        <p><strong>Total:</strong> {totalStudents}</p>
        <p><strong>Passed:</strong> <span style={{color: 'var(--pass)'}}>{passedStudents}</span></p>
      </div>

      <AddStudentForm onAdd={addStudent} />
      
      <div className="table-container">
        <StudentTable students={students} onUpdateScore={updateScore} />
      </div>
    </div>
  );
}

export default App;
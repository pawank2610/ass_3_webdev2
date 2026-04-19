import { useState } from 'react';

const AddStudentForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [score, setScore] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || score === '') return;

    onAdd({ 
      id: Date.now(), 
      name, 
      score: parseInt(score) 
    });

    // Clear form after submission
    setName('');
    setScore('');
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Student Name" 
        value={name}
        onChange={(e) => setName(e.target.value)}
        required 
      />
      <input 
        type="number" 
        placeholder="Score" 
        value={score}
        onChange={(e) => setScore(e.target.value)}
        required 
      />
      <button type="submit">Add Student</button>
    </form>
  );
};

export default AddStudentForm;
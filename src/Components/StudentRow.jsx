const StudentRow = ({ student, onUpdateScore }) => {
  const isPass = student.score >= 40;

  return (
    <tr>
      <td style={{ fontWeight: '500' }}>{student.name}</td>
      <td>
        <input 
          className="score-input"
          type="number" 
          value={student.score} 
          onChange={(e) => onUpdateScore(student.id, e.target.value)}
          min="0"
          max="100"
        />
      </td>
      <td>
        <span className={`status-badge ${isPass ? 'pass' : 'fail'}`}>
          {isPass ? 'Pass' : 'Fail'}
        </span>
      </td>
    </tr>
  );
};

export default StudentRow;
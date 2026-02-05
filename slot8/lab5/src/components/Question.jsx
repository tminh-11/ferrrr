import { Form, Button } from 'react-bootstrap';

function Question({ questionData, onAnswer, selectedAnswer }) {
  const { id, question, options, correctAnswer } = questionData;

  return (
    <div className="mb-5 p-4 border rounded">
      <h4>{question}</h4>
      <Form>
        {options.map((opt, index) => (
          <Form.Check
            key={index}
            type="radio"
            id={`${id}-${index}`}
            label={opt}
            name={`question-${id}`}
            checked={selectedAnswer === opt}
            onChange={() => onAnswer(id, opt, correctAnswer)}
            className="mb-2"
          />
        ))}
      </Form>
    </div>
  );
}

export default Question;
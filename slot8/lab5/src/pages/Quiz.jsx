import { useReducer } from 'react';
import { Container, Button, Alert } from 'react-bootstrap';
import Question from '../components/Question';
import { quizQuestions } from '../data/quizData';          // sửa tên nếu cần
import { quizReducer, initialState } from '../reducers/quizReducer';

function Quiz() {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  const handleAnswer = (questionId, answer, correctAnswer) => {
    dispatch({
      type: 'ANSWER_QUESTION',
      payload: { questionId, answer, correctAnswer }
    });

    // Nếu đang trả lời câu áp chót → sau dispatch sẽ là câu cuối → finish
    if (state.currentQuestion === quizQuestions.length - 2) {
      setTimeout(() => {
        dispatch({ type: 'FINISH_QUIZ' });
      }, 300);
    }
  };

  const resetQuiz = () => dispatch({ type: 'RESET_QUIZ' });

  // Bảo vệ: nếu finished hoặc vượt quá số câu → hiển thị kết quả
  if (state.finished || state.currentQuestion >= quizQuestions.length) {
    return (
      <Container className="py-5 text-center">
        <Alert variant="success">
          <h3>Quiz Completed!</h3>
          <p>Your score: {state.score} / {quizQuestions.length}</p>
          <Button variant="primary" onClick={resetQuiz}>Try Again</Button>
        </Alert>
      </Container>
    );
  }

  const currentQ = quizQuestions[state.currentQuestion];

  return (
    <Container className="py-4">
      <h2 className="mb-4">Online Quiz</h2>
      <p>Question {state.currentQuestion + 1} of {quizQuestions.length}</p>
      
      <Question
        questionData={currentQ}
        onAnswer={handleAnswer}
        selectedAnswer={state.answers[currentQ?.id]} // ?. để an toàn hơn
      />

      <div className="mt-4">
        {state.currentQuestion + 1 === quizQuestions.length && (
          <Button variant="success" onClick={() => dispatch({ type: 'FINISH_QUIZ' })}>
            Finish Quiz
          </Button>
        )}
      </div>
    </Container>
  );
}

export default Quiz;
export const initialState = {
  currentQuestion: 0,
  answers: {},          // {1: "Paris", 2: "Mars", ...}
  score: 0,
  finished: false
};

export function quizReducer(state, action) {
  switch (action.type) {
    case 'ANSWER_QUESTION':
      const { questionId, answer } = action.payload;
      const isCorrect = answer === action.payload.correctAnswer;

      return {
        ...state,
        answers: { ...state.answers, [questionId]: answer },
        score: isCorrect ? state.score + 1 : state.score,
        currentQuestion: state.currentQuestion + 1,
      };

    case 'FINISH_QUIZ':
      return { ...state, finished: true };

    case 'RESET_QUIZ':
      return initialState;

    default:
      return state;
  }
}
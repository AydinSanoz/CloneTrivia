export const reducer = (state, action) => {
  switch (action.type) {
    case 'setQuestions':
      state.questions = action.payload.questions;
      return { ...state };
    case 'setScore':
      const scoreStatus = action.payload.isTrue;
      state.score = scoreStatus ? state.score + 1 : state.score - 1;
      return { ...state };
    default:
      return state;
  }
};

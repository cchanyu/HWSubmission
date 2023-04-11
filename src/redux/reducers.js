const initialState = {
    text: '',
    isSignedIn: false,
  };
  
  const textReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_TEXT':
        return { ...state, text: action.payload };
      default:
        return state;
    }
  };

  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_SIGN_IN_STATUS':
        return { ...state, isSignedIn: action.payload };
      case 'SIGN_OUT':
        return { ...state, isSignedIn: false }; // set isSignedIn to false on sign-out
      default:
        return state;
    }
  };

  export { textReducer, authReducer };
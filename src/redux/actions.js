export const setText = (text) => ({
    type: 'SET_TEXT',
    payload: text,
});

export const setSignInStatus = (isSignedIn) => ({
  type: 'SET_SIGN_IN_STATUS',
  payload: isSignedIn,
});

export const signOut = () => ({
    type: 'SIGN_OUT',
});
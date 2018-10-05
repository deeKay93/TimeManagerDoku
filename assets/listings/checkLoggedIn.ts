export const checkLoggedIn = function() {
  // Check if user is already signed in
  firebase.auth().onAuthStateChanged(function(user: RNFirebase.User | null) {
    if (user) {
      // Logged in
      store.dispatch(userSignInSuccess(user));
    } else {
      store.dispatch(userSignOutSuccess());
    }
  });
};

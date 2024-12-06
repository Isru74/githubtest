document.addEventListener('DOMContentLoaded', () => {
  const authContainer = document.querySelector('.auth-container');
  const signInBtn = document.querySelector('.sign-in-btn');
  const signUpBtn = document.querySelector('.sign-up-btn');

  // Switch to Sign Up form
  signUpBtn.addEventListener('click', () => {
    authContainer.classList.add('show-sign-up');
  });

  // Switch to Sign In form
  signInBtn.addEventListener('click', () => {
    authContainer.classList.remove('show-sign-up');
  });
});


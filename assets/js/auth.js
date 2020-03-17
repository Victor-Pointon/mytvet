// signup
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
    ();

    // get user info
    const email = signupForm['sign-up-email'].value;
    const password = signupForm['sign-up-password'].value;

    console.log(email, password)
})

document.addEventListener('DOMContentLoaded', () => {
  
  const forms = document.querySelectorAll('.needs-validation');

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      let isCustomValid = true;

      if (form.id === 'registrationForm') {
        const password = document.getElementById('regPassword');
        const confirmPassword = document.getElementById('confirmPassword');
        const confirmFeedback = document.getElementById('confirmFeedback');
        const hobbies = document.querySelectorAll('.hobby-checkbox');
        const hobbyFeedback = document.getElementById('hobbyFeedback');

        if (password.value !== confirmPassword.value) {
          confirmPassword.setCustomValidity('Passwords do not match');
          confirmFeedback.textContent = 'Passwords do not match!';
          isCustomValid = false;
        } else {
          confirmPassword.setCustomValidity('');
        }

        const atLeastOneHobby = Array.from(hobbies).some(chk => chk.checked);
        if (!atLeastOneHobby) {
          hobbyFeedback.style.display = 'block';
          isCustomValid = false;
        } else {
          hobbyFeedback.style.display = 'none';
        }
      }

      if (!form.checkValidity() || !isCustomValid) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        event.preventDefault();
        alert('Form successfully validated and submitted!');
      }

      form.classList.add('was-validated');
    }, false);
  });

  const resetBtn = document.getElementById('resetBtn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      const regForm = document.getElementById('registrationForm');
      regForm.classList.remove('was-validated');
      const hobbyFeedback = document.getElementById('hobbyFeedback');
      if (hobbyFeedback) hobbyFeedback.style.display = 'none';
    });
  }
});
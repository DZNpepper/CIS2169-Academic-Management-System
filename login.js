$('#login-form').on('submit', function(e) {
    e.preventDefault();
    const email = $('#email').val();
    const password = $('#password').val();
    // Checks if the email and password are correct
    if ((email === 'academic@gmail.com' || email === 'headofdepartment@gmail.com') && password === 'password') {
       // If the email and password are correct, it will redirect the user to their specified page
        if (email === 'academic@gmail.com') {
        window.location.href = 'AcademicHome.html';
      } else {
        window.location.href = 'HeadOfDepartmentHome.html';
      }
    } else {
        // If the email and password are incorrect, show an error message
      alert('Invalid email or password.');
    }
  });

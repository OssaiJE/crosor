module.exports.validateRegisterInput = (
  username,
  email,
  password,
  confirmPassword
) => {
  const errors = {};
  if (username.trim() === "") {
    errors.username = "Username must not be empty";
  } else if (email.trim() === "") {
    errors.username = "Email must not be empty";
  } else {
    const regEx = /\S+@\S+\.\S+/;
    if (!email.match(regEx)) {
      errors.email = "Email must be a valid email address";
    }
  }
  if (password === "") {
    errors.password = "Password must not be empty";
  } 
  // Check password length
  else if (password.length < 6) {
    errors.password = "Password should be at least 6 characters.";
  } else if (password !== confirmPassword) {
    errors.confirmPassword = "Password does not match with confirm password";
  }
  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};

module.exports.validateLoginInput = (username, password) => {
  const errors = {};
  if (username.trim()=== "") {
    errors.username = "Username must not be empty";
  } 
  else if (password.trim()==="") {
    errors.password = "Password must not be empty";
  }
  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
}

export const validateEmail = (email) => {
  return !!String(email).match(/@/);
};

export const validateSamePaswsword = (password, passwordCheck) => {
  return password === passwordCheck;
};

export const validatePasswordLentgh = (password) => {
  return password.length >= 8;
};

export const validationUserLogin = (email, password) => {
  return !(validateEmail(email) && validatePasswordLentgh(password));
};

export const validationUSerRegister = (email, password, passwordCheck) => {
  return !(
    validateEmail(email) && validatePasswordLentgh(password, passwordCheck)
  );
};

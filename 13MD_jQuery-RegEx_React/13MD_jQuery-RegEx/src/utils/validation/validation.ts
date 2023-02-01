const validateUsername = (name: string) => {
  const nameLen = name.length;
  const re = /^[a-zA-z]*$/;
  if (nameLen > 1 && nameLen <= 50) {
    if (re.test(name)) {
      return true;
    }
    return false;
  }
  return false;
};

const validateEmail = (email: string) => {
  const re = /^\w+(\.|\w)\w+@\w+\.\w+$/;
  if (re.test(email)) {
    return true;
  }
  return false;
};
const validatePassword = (pass: string) => {
  const re = /^[a-zA-Z\d]+(!|@|#|\$|%|\^|&|\*)[a-zA-Z\d]+$/;
  if (pass.length > 7 && re.test(pass)) {
    return true;
  }
  return false;
};

export {
  validateUsername,
  validateEmail,
  validatePassword,
};

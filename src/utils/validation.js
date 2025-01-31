export const validateEmail = (email) => {
  if (!email) {
    return "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    return "Email is invalid";
  }
  return "";
};

export const validateContact = (contact) => {
  if (!contact) {
    return "Contact is required";
  } else if (!/^\d+$/.test(contact)) {
    return "Contact number must contain only digits";
  } else if (contact.length !== 10) {
    return "Contact number must be exactly 10 digits";
  }
  return "";
};

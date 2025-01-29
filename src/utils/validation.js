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
  } else if (!/^\d{10}$/.test(contact)) {
    return "Contact number must be 10 digits";
  }
  return "";
};

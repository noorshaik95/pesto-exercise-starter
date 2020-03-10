function telephoneCheck(phoneNumber) {
  return /^(\+?[01])?[-.\s]?\(?[1-9]\d{2}\)?[-.\s]?\d{3}[-.\s]?\d{4}/.test(phoneNumber);
}

export { telephoneCheck };

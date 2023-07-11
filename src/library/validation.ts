const validation = {
  email: (value: string) => (
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
  ),
  phoneNumber: (value: string) => (
    /^[+]+[0-9]{12,}$/i.test(value)
  ),
  cardNumber: (value: string) => (
    /\d{4}\s\d{4}\s\d{4}\s\d{4}/.test(value)
  ),
  expiration: (value: string) => (
    /(?:0[1-9]|1[0-2])[/][0-9]{2}/.test(value)
  ),
};

export default validation;

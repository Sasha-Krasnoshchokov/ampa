const validation = {
  email: (value: string) => (
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
  ),
  phoneNumber: (value: string) => (
    /^[+]+[0-9]{12,}$/i.test(value)
  ),
};

export default validation;

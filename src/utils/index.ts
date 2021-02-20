const isPostcodeValid = (postcode: string) => {
  let postcodeString = postcode.replace(/\s/g, "");

  return /^[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}$/i.test(postcodeString);
};

export { isPostcodeValid };

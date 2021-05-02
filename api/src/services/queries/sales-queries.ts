export const storeLocation = (location: string) => {
  return { storeLocation: location };
};

export const ageAndStoreLocation = (age: number, location: string) => {
  return {
    $and: [{ storeLocation: location }, { 'customer.age': { $eq: age } }],
  };
};

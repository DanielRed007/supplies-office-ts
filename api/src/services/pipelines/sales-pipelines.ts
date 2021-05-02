export const genderAndSatisfaction = (gender: string, satisfaction: number) => {
  return [
    {
      $match: {
        $and: [
          { 'customer.gender': { $eq: gender } },
          { 'customer.satisfaction': { $eq: satisfaction } },
        ],
      },
    },
    {
      $project: {
        'customer.gender': 1,
        'customer.satisfaction': 1,
        'customer.age': 1,
        items: 1,
      },
    },
  ];
};

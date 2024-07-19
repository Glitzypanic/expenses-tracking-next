import { faker } from "@faker-js/faker";

export interface User {
  id: number;
  order: string;
  amount: string;
  payment: string;
}

export const generateData = (numRecords: number) => {
  const order = [
    "spotify",
    "apple",
    "amazon",
    "google",
    "electricity",
    "water",
    "gas",
    "internet",
    "phone",
    "cable",
    "insurance",
    "mortgage",
  ];
  const data: User[] = [];
  for (let i = 0; i < numRecords; i++) {
    data.push({
      id: i,
      order: order[Math.floor(Math.random() * order.length)],
      amount: faker.finance.amount(),
      payment: faker.finance.account(),
    });
  }
  return data;
};

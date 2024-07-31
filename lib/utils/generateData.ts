import { faker } from "@faker-js/faker";

export interface User {
  id: number;
  name: string;
  amount: string;
  date: string;
  status: "Paid" | "Unpaid";
}

export const generateData = (numRecords: number) => {
  const name = [
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
  for (let i = 0; i < numRecords; i + 1) {
    data.push({
      id: i, // Genera un valor incremental
      name: name[Math.floor(Math.random() * name.length)], // Genera un valor aleatorio de la lista "name"
      amount: faker.finance.amount(), // Genera un valor aleatorio de tipo "string" en formato "$123.45"
      date: faker.date.anytime().toISOString().split("T")[0], // Genera una fecha aleatoria y la convierte a un string en formato "YYYY-MM-DD"
      status: Math.random() > 0.5 ? "Paid" : "Unpaid", // Genera un valor aleatorio entre "Paid" y "Unpaid"
    });
  }
  return data;
};

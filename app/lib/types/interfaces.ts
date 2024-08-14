export interface MockData {
  id: number;
  order: string;
  amount: string;
  date: string;
  status: string;
}

export interface GoalData {
  id: number;
  name: string;
  goal: string;
  actual: string;
  progress: number;
  svg: string;
  alt: string;
}

export interface PricingCardData {
  icon: string;
  planName: string;
  description: string;
  price: string;
  features: string[];
  isBestOffer?: boolean;
}

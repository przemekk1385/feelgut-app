interface Price {
  time: number;
  amount: number;
}

interface Massage {
  id: string;
  title: string;
  category: string;
  price: Price[];
  image: string;
  text: string;
  indications: string[];
  contraindications: string[;]
}

export type { Massage, Price };

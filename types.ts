interface Price {
  time: number;
  amount: number;
}

interface Massage {
  title: string;
  category: string;
  price: Price[];
  image: string;
  text: string;
  indications: string[];
  contraindications: string[;]
}

export type { Massage, Price };

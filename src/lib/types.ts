export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  position: {
    x: number;
    y: number;
  };
}

export interface VideoData {
  id: string;
  url: string;
  title: string;
  description: string;
  products: Product[];
}

export type Sizes = 'small' | 'medium' | 'large';
export type Product = {
  name: string;
  price: number;
  date: Date;
  size?: Sizes;
};
export interface Service {
  id: string;
  title: string;
  category: string;
  price: string;
  duration: string;
  gender: "ladies" | "gentlemen";

  options?: {
    label: string;
    price: string;
    duration?: string;
  }[];
}

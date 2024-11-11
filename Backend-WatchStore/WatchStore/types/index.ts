type UserRole = "admin" | "comprador" | "vendedor" | undefined;


export interface IUser {
  _id: string | undefined;
  first_name: string; 
  last_name: string;
  user_name: string;
  email: string;
  password: string;
  birth_date: string; 
  role: UserRole;
  avatar: string; 
}

export interface IProduct {
  _id: string | undefined;
  brand: string;
  model: string;
  strap_material: string;
  movement: string;
  color: string;
  water_resistance: string;
  gender: string;
  origin: string;
  stock: number;
  price: number;
  salers_id: string; 
  category: string; 
  description: string;
  image: string;
}


export interface ICart {
  products: { _id: string; quantity: number }[];
  totalPrice: number;
}


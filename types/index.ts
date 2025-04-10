export interface User {
  name: string;
  email: string;
  password: string;
}

export interface Blog {
  id: number;
  title: string;
  description: string;
  image: string;
  createdAt: string;
  updatedAt?: string;
}

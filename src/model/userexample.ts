// user.model.ts
export interface User {
  name: string;
  job: string;
  gender: 'Male' | 'Female';
  country: string;
  age: number;
  avatar: string;
}

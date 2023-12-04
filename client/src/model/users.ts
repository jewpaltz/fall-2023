/* B"H
*/

import { api } from "./session";

export interface User {
  id?: number,
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  role: "admin" | "user",
  token?: string,
  address?: {
    address: string,
    city: string,
    state: string,
    postalCode: string,
    coordinates: {
      lat: number,
      lng: number,
    },
  },
}

export function getUsers(): Promise< User[]> {
  return api("users"); 
}

export async function getUserByEmail(email: string): Promise<User | undefined> {
  const users = await getUsers();
  return users.find( x => x.email === email );
}
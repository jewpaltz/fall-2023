/* B"H
*/
import { reactive } from "vue";

const session = reactive({
  user: null as User | null,
})

export interface User {
    id?: string,
    firstName: string,
    lastName: string,
    email: string,
    role: "admin" | "user",
    token?: string
}

export function getSession(){
  return session;
}

export function login(){
  session.user = {
    firstName: "Test",
    lastName: "User",
    email: "test@user.com",
    role: "admin"
  }
}
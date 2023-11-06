/* B"H
*/
import { reactive } from "vue";
import { useRouter } from "vue-router"
import * as myFetch from "./myFetch";
import { type User, getUserByEmail } from "./users";

const session = reactive({
  user: null as User | null,
  redirectUrl: null as string | null,
})

export function api(action: string){
  return myFetch.api(`${action}`)
}

export function getSession(){
  return session;
}

export function useLogin(){
  const router = useRouter();

  return {
    async login(email: string, password: string): Promise< User | null> {
      const user = await getUserByEmail(email)
      
      if(user && user.password === password){
        session.user = user;

        router.push(session.redirectUrl || "/");

        return user;
      }
      return null;
    },
    logout(){
      session.user = null;
      router.push("/login");
    }
  }
}
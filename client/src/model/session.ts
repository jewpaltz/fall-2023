/* B"H
*/
import { reactive } from "vue";
import { useRouter } from "vue-router"
import { useToast } from "vue-toastification";
import * as myFetch from "./myFetch";
import { type User, getUserByEmail } from "./users";

const toast = useToast();

const session = reactive({
  user: null as User | null,
  token: null as string | null,
  redirectUrl: null as string | null,
  messages: [] as {
    type: string,
    text: string
  }[],
  loading: 0
})

export function api(action: string, body?: unknown, method?: string, headers?: any){
  session.loading++;

  if(session.token){
    headers = headers ?? {};
    headers['Authorization'] = `Bearer ${session.token}`;
  }

  return myFetch.api(`${action}`, body, method, headers)
    .catch(err=> showError(err))
    .finally(()=> session.loading--);
}

export function getSession(){
  return session;
}

export function showError(err: any){
  console.error(err);
  session.messages.push({ type: "error", text: err.message ?? err});
  toast.error( err.message ?? err);
}

export function useLogin(){
  const router = useRouter();

  return {
    async login(email: string, password: string): Promise< User | null> {
      const response = await api("users/login", { email, password });

      session.user = response.user;
      session.token = response.token;

      router.push(session.redirectUrl || "/");
      return session.user;
    },
    logout(){
      session.user = null;
      router.push("/login");
    }
  }
}
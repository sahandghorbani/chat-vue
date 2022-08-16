import { projectAuth } from "@/firebase/config";
import { ref } from "vue";

const error = ref(null);

const signup = async (displayName, email, password) => {
  error.value = null;
  try {
    const res = await projectAuth.createUserWithEmailAndPassword(email,password );
    if (!res) {
      throw new Error("Could not sign up ther user");
    }
    await res.user.updateProfile({ displayName });
    error.value =null ;
  } catch (err) {
    console.log(err.message);
    error.value = err.message;
  }
};

const useSignup = () => {
  return { error, signup };
};

export { useSignup };

import { projectAuth } from "@/firebase/config";
import { ref } from "vue";

const user = ref(projectAuth.currentUser);
const newFeat = "newFeat-2";
projectAuth.onAuthStateChanged((_user) => {
  user.value = _user;
});

const getUser = () => {
  return { user };
};

export default getUser;

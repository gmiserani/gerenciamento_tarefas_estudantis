//import { useNavigate } from "react-router-dom";
import api from "./api";

async function LoginSubmit(email, senha){
  await api.post('/api/usuario/login', {email, senha})
}

export { LoginSubmit}

import "dotenv/config"
import registrarEventosCadastro from "./registraEventos/cadastro.js";
import registrarEventosDocumento from "./registraEventos/documento.js";
import registrarEventosInicio from "./registraEventos/inicio.js";
import registraEventosLogin from "./registraEventos/login.js";
import io from "./servidor.js";
import autorizarUsuario from "./middlewares/autorizarUsuario.js";

const nspUsuarios = io.of("/usuarios");

nspUsuarios.use(autorizarUsuario);

nspUsuarios.on("connection", (socket) => {
  registrarEventosInicio(socket,nspUsuarios);
  registrarEventosDocumento(socket,nspUsuarios);
})

io.of("/").on("connection", (socket) => {
  registrarEventosCadastro(socket,io);
  registraEventosLogin(socket,io);
  
 
});

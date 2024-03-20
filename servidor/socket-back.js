import registrarEventosCadastro from "./registraEventos/cadastro.js";
import registrarEventosDocumento from "./registraEventos/documento.js";
import registrarEventosInicio from "./registraEventos/inicio.js";
import registraEventosLogin from "./registraEventos/login.js";
import io from "./servidor.js";

io.on("connection", (socket) => {
  registrarEventosCadastro(socket,io);
  registraEventosLogin(socket,io);
  registrarEventosInicio(socket,io);
  registrarEventosDocumento(socket,io);
 
});

const socket = io();
export function emitirCadastrarUsuario(dados){
  socket.emit('cadastrar_usuario', dados);
}

socket.on("cadastro_sucesso", () => alert("cadastro realizado com sucesso"));
socket.on("cadastro_erro", () => alert("Erro no cadastro"));
socket.on("usuario_existente", () => alert("Este usuário já está cadastrado"))



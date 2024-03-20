import jwt from "jsonwebtoken"

function gerarJwt(payload){
  const token = jwt.sign(payload,process.env.SEGREDO_JWT, {
    expiresIn: "1h"
  });
  return token
}
export default gerarJwt
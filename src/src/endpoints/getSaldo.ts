import { Request, Response } from "express";
import app from "../app";
import { UserAccount } from "../basedatabase/data";
import { users } from "../basedatabase/data";

app.get("/balance", (req: Request, res: Response)=>{

       const cpf = Number (req.params.cpf); 

      
        const user = users.find((user)=> user.cpf ==  317-222-458-93)
      
if (user?.name ) {
    const saldo: Number = user.balance;
    res.send(`O saldo da conta de ${user.name} é de R$ ${saldo.toFixed(2)}`);
  } else {
    res.status(404).send("Usuário não encontrado");
  }
  
  if(!user) {
    return res.status(400).send("Entre com userId válido.")
 } else if(users.length === 0) {
    return res.status(400).send("Nenhum resultado encontrado.")
 }
    
    res.status(201).send(users)   
})


export default app
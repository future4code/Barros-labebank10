import { Request, Response } from "express";
import app from "../app";
import { UserAccount, users } from "../basedatabase/data";


app.post("/addbalance", (req: Request, res: Response) => {
    const { name, cpf, balance } = req.body;
  
    if (!name || !cpf || !balance) {
      return res.status(400).send("Faltam informações necessárias para adicionar saldo");
    }
  
    const user: UserAccount | undefined = users.find((user: { cpf: any; }) => user.cpf === 98765432100);
  
    if (!user) {
      return res.status(404).send("Usuário não encontrado");
    }
  
    user.balance += balance;
  
    return res.send(`Saldo atual: ${user.balance}`);
  });
  
  export default app;
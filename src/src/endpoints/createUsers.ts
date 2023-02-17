import { Request, Response } from "express";
import app from "../app";
import { UserAccount } from "../basedatabase/data";


       
  const users: UserAccount[] = []; 
    
    app.post('/createUsers', (req: Request, res: Response) => {
    const { name, cpf, birthDate } = req.body;


try{

    //const { name, cpf, birthDate } = req.body;

  const newUser: UserAccount = {

    name,
    cpf,
    birthDate: new Date(birthDate),
    balance: 0,
    statement: [],
    value: 0
  };



  users.push(newUser)

  res.status(200).send("Usuário criado com sucesso")

  console.log(newUser);
  

}catch(error){
    res.status(400).send("error")
}
  

})

export default app
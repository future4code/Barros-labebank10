import { Request, Response} from "express";
import app from "../app";
//import { UserAccount } from "../basedatabase/data";
import {users} from "../basedatabase/data"


//const users: UserAccount[] = []; 


app.get("/getUsers", (req: Request, res: Response)=>{


    try{

        if(!users.length ){
            res.status(401).send("Não existem usuários")
        }

       res.status(202).send(users)



    }catch(erro){

        res.status(400).send("Erro ")

    }

    
})

export default app
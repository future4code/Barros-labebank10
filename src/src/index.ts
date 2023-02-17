import app from "./app";
import ping from "./ping";
import createUsers from "./endpoints/createUsers"
import getUsuarios from "./endpoints/getUsers"
import getSaldo from "./endpoints/getSaldo"
import addBalance from "./endpoints/addBalance"
app.get("/ping", ping)
app.get("/getUsers", getUsuarios)
app.get("/balance"), getSaldo
app.post("/createUsers", createUsers)
app.post("/addbalance", addBalance)








app.listen(8081, () => {
    console.log("Servidor rodando na porta 3003");
});
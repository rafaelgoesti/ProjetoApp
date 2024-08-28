const express = require('express');
const app = express();

function fn_salva_dado(dados) {
    if (!dados) {
        return "dados não salvos"
    }
    return "dados foram salvos"
}

// Middleware para interpretar o corpo da requisição como JSON
app.use(express.json());

app.post('/api', (req, res) => {
    var { dados } = req.body; // Extrai o campo "data" do corpo da requisição
    // verifica se tem dado 
    if (!dados) {
        res.status(400).send("Erro dados faltando")
    }
    // salva no banco de dados
    // SQL e NOSQL
    const d = fn_salva_dado(dados)

    res.send(`${d}`); // Devolve a mensagem com o valor de "data"
});

// Porta onde o servidor irá rodar
const PORT = process.env.PORT || 3000;

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

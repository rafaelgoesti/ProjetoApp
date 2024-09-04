const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

//Conecta-se ao banco de dados SQLite
const db = new sqlite3.Database('./data/coleta_dados.db', (err) => {
  if (err) {
    console.error('Não foi possível conectar ao banco de dados', err);
  } else {
    console.log('Conectado ao banco de dados SQLite');
  }
});

// Cria tabela se ela não existir
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS dados (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT,
      idade INTEGER,
      sexo TEXT,
      motivoAtendimento TEXT,
      tipoAtendimento TEXT,
      necessitaTransferencia INTEGER
    )
  `);
});

app.get('/dados', (req, res) => {
  db.all('SELECT * FROM dados', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

app.post('/dados', (req, res) => {
  const { nome, idade, sexo, motivoAtendimento, tipoAtendimento, necessitaTransferencia } = req.body;
  db.run(
    `INSERT INTO dados (nome, idade, sexo, motivoAtendimento, tipoAtendimento, necessitaTransferencia) VALUES (?, ?, ?, ?, ?, ?)`,
    [nome, idade, sexo, motivoAtendimento, tipoAtendimento, necessitaTransferencia ? 1 : 0],
    function (err) {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ id: this.lastID });
    }
  );
});

app.listen(port, () => {
  console.log(`O servidor está em execução http://localhost:${port}`);
});
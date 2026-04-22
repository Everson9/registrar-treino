const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.json({ message: 'API Academia funcionando.' }));

app.use('/api/treinos', require('./routes/treinoRoutes'));
app.use('/api/exercicios', require('./routes/exercicioRoutes'));

const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
    console.log('MongoDB conectado');
  })
  .catch((err) => console.error('Erro ao conectar ao MongoDB:', err));

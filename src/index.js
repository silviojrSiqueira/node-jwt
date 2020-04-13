import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';

const app = express();
const PORT = 3333;

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/node_jwt', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

app.use(routes);

app.listen(PORT);
console.log(`Servidor rodando na porta ${PORT}`);

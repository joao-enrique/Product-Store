import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import ProductRoutes from './routes/ProductRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

console.log(`Server is starting on port ${PORT}`);


app.use(express.json()); //Express.json é um middleware embutido no Express.js que analisa requisições com payload JSON e transforma o corpo da requisição em um objeto JavaScript acessível via req.body.
app.use(cors()); //CORS (Cross-Origin Resource Sharing) é um mecanismo que permite que recursos restritos em uma página web sejam solicitados a partir de outro domínio fora do domínio do qual o recurso foi servido.
app.use(helmet()); //Helmet é uma biblioteca para Express.js que agrega 12 middlewares simples, responsáveis por setar alguns headers nas respostas HTTP.
app.use(morgan('dev')); //Morgan é um middleware de logging para aplicações Node.js. Ele registra detalhes sobre as requisições HTTP recebidas pelo servidor, como método, URL, status de resposta e tempo de resposta.

app.use('/api/products', ProductRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

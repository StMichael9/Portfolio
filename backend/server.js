import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import api from './api.js';
import routes from './routes/index.js';
import errorHandler from './middleware/errorHandler.js';
import { getTodos, createTodo, updateTodo, deleteTodo } from './controllers/todos.js';

import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import api from './api.js';
import routes from './routes/index.js';
import errorHandler from './middleware/errorHandler.js';
import { getTodos, createTodo, updateTodo, deleteTodo } from './controllers/todos.js';

dotenv.config();

const app = express();

const allowedOrigins = process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(',') : ['http://localhost:3000'];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  optionsSuccessStatus: 200
}));

app.use(express.json());
app.use(morgan('dev'));

app.use('/', routes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// In routes/index.js

import express from 'express';
import { getTodos, createTodo, updateTodo, deleteTodo } from '../controllers/todos.js';

const router = express.Router();
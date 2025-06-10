import express from 'express'
import indexRouter from './routes/indexRoutes.js';
import loginRouter from './routes/loginRoutes.js';

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/login', loginRouter);

const PORT = 5000;
app.listen(PORT, () => {console.log(`Listening on Port #${PORT}`)});
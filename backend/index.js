import express from 'express'
import indexRouter from './routes/indexRoutes.js';
import loginRouter from './routes/loginRoutes.js';


const app = express();

app.use(express.json()); //For JSON in req
//app.use(express.urlencoded({ extended: true })); For HTML forms in req

app.use('/', indexRouter);
app.use('/login', loginRouter);


const PORT = process.env.PORT;
app.listen(PORT, () => {console.log(`Listening on Port #${PORT}`)});
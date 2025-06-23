import express from 'express'
import cors from 'cors';
import indexRouter from './routes/indexRoutes.js';
import authRouter from './routes/authRoutes.js';


const app = express();

app.use(cors())
app.use(express.json()); //For JSON in req
//app.use(express.urlencoded({ extended: true })); For HTML forms in req

app.use('/', indexRouter);
app.use('/auth', authRouter);


const PORT = process.env.PORT;
app.listen(PORT, () => {console.log(`Listening on Port #${PORT}`)});
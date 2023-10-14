import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
const PORT = process.env.PORT || 8080;
import connectDb from './config/configdb.js';
import register from './routes/authRoute.js';
import cors from 'cors';
import categoryRoutes from './routes/categoryRoutes.js'
import productRoutes from './routes/productRoutes.js'

const app = express();
//configuring dotenv
dotenv.config();

connectDb();
 
//middlewares
//we want to let e xpress know that we are using json(parsing the body into json)
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))


//routes
app.use('/api/v1',register)
app.use('/api/v1/category',categoryRoutes)
app.use('/api/v1/product',productRoutes)

// a default route :rest api
app.get('/',(req,res)=>{
    res.send('hello world');
})

app.listen(PORT,()=>{
    console.log(`The server has connected on port ${PORT}`);
})

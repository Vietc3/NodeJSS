const express=require('express');
const dotenv=require('dotenv');
const morgan=require('morgan');
const connectDB=require('./config/db');
const errorHandler=require('./middleware/error');
// const logger=require('./middleware/logger');





//Router file
const bootcamp=require('./routes/bootcamps')


//Load env vars

dotenv.config({path:"./config/config.env"})


//connect database
connectDB();
const app = express();

//Body parser
app.use(express.json())

// app.use(logger)
//Dev logging middleware

if(process.env.NODE_ENV==='development'){
    app.use(morgan('dev'))
}

//Mount routers
app.use('/api/v1/bootcamps',bootcamp)

app.use(errorHandler)
const PORT= process.env.PORT || 5000;
const hostname = process.env.NODE_ENV;
console.log(hostname);

app.listen(
    PORT,
    console.log(`Server running ${process.env.NODE_ENV} mode on port ${PORT}`)
    )

//Handle unhandled promise injections
process.on('unhandledRejection',(err,promise)=>{
    console.log(`Error: ${err.message}`);

    //close handle and exit process
    server.close(()=>process.exit(1))
})

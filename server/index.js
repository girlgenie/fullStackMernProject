import express from 'express'; 
// import bodyParser from 'body-parser'; 
import mongoose from 'mongoose'; 
import cors from 'cors'; 


import postRoutes from './routes/posts.js';

const app = express();

//Routes
app.use("/posts", postRoutes);

// // set up bodyParser 
// app.use(bodyParser.json({limit: '30mb', extended: true}));
// app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));
app.use(express.json({limit: '30mb'}))

app.use(cors());



// set up database 
const CONNECTION_URL="mongodb+srv://javascriptmastery:javascriptmastery123@sba319.byijayw.mongodb.net/?retryWrites=true&w=majority&appName=SBA319"
const PORT = process.env.port || 5001; 
mongoose.connect(CONNECTION_URL)
.then(()=> app.listen((PORT, ()=> console.log (`Server running on port: ${PORT}`))))
.catch((error)=> console.log(error.message)); 

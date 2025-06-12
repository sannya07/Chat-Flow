const express=require("express")
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });
const cors=require("cors");
const {chats}= require("./data/data");
const connectDB = require("./config/db");
const userRoutes=require('./routes/userRoutes')
const chatRoutes=require('./routes/ChatRoutes')
const{errorHandler,notFound}=require('./middleware/errorMiddleware')

const app=express();
// console.log("PORT:", process.env.PORT);
// console.log("MONGO_URI:", process.env.MONGO_URI);

connectDB();

app.use(express.json());

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

app.get('/',(req,res)=>{
    res.send("API is running")
})

app.get('/api/chat', (req,res)=>{
    res.send(chats)
})

app.get('/api/chat/:id',(req,res)=>{
    // console.log(req.params.id)
    const singlechat=chats.find((c)=> c._id === req.params.id);
    res.send(singlechat);
})
app.use('/api/user',userRoutes)
app.use('/api/chat',chatRoutes)

app.use(notFound)
app.use(errorHandler)
const PORT=process.env.PORT || 5000
app.listen(PORT, console.log(`Server started on port ${PORT}`))
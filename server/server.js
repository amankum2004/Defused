const express = require("express")
const app = express();
const connectDB = require("../Server/utils/db")
const cors = require("cors")
const authRoute = require("../Server/router/auth-router")
const contactRoute = require("../Server/router/contact-router")
const serviceRoute = require("../Server/router/service-router")
const errorMiddleware = require("../Server/middleware/error-middleware")
const friendlistRouter = require("../Server/router/friendlist-router")

const corsOptions={
    origin:"http://localhost:5173",
    methods:"GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials:true
}
app.use(cors(corsOptions))

app.use(express.json())
app.use("/api/auth",authRoute)
app.use("/api/form",contactRoute)
app.use("/api/data",serviceRoute)
app.use("/api/friend",friendlistRouter)

app.use(errorMiddleware)



const PORT = 27017
connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is running at port: ${PORT}`)
    })
});



import './models/index.js'
import express from 'express'
import cors from "cors"
import bodyParser from 'body-parser'
import memberRoute from './routes/memberRoute.js'
import trainerRoute from './routes/trainerRoute.js'
import workoutSessionRoute from './routes/workoutSesssionRoute.js'
import roomRoute from './routes/roomRoute.js'
import membershipRoute from './routes/membershipRoute.js'
const app = express()
// const PORT = process.env.PORT

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use("/membership", membershipRoute)
app.use("/member", memberRoute);
app.use("/trainer", trainerRoute);
app.use("/workoutsession", workoutSessionRoute);
app.use("/room", roomRoute)

app.listen(3000, () => {
    console.log("Server berjalan di http://localhost:3000")
})
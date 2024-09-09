import './models/index.js'
import express from "express"
import bodyParser from 'body-parser'
import trainerRoute from './routes/trainerRoute.js'
import memberRoute from './routes/memberRoute.js'
import workoutSessionRoute from './routes/workoutSesssionRoute.js'
const app = express()
// const PORT = process.env.PORT

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use("/trainer", trainerRoute);
app.use("/member", memberRoute);
app.use("/workoutsession", workoutSessionRoute);


app.listen(3000, () => {
    console.log("Server berjalan di http://localhost:3000")
})
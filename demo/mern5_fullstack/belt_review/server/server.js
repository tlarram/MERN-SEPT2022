//1. IMPORT YOUR DEPENDENCIES **
const express = require("express")
const cors = require("cors")
const app = express()

//1.5 CONFIGURE YOUR MONGOOSE
require('./configs/mongoose.config')

//2. CONFIGURE YOUR EXPRESS **
app.use(cors())
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

//3. ATTACH ROUTES TO YOUR EXPRESS SERVER
require('./routes/job.routes')(app);

//4. RUN YOUR EXPRESS SERVER **
app.listen(8000, () => console.log(`Listening on port: 8000`) );

const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
require('./database/connection')
const attrRoutes = require('./routes/attr-routes')
const userRoutes = require('./routes/user-routes')
//const errorRoutes = require('./routes/error-routes')
let cookieParser = require('cookie-parser')

const app = express()
const port = process.env.PORT || 5000

const corsOptions = {
    origin: process.env.CLIENT,
    credentials: true
}

app.use(express.json())
app.use(cors(corsOptions))

app.use(cookieParser())

app.use(helmet())
app.use(helmet.contentSecurityPolicy({
    directives: {
        defaultSrc: ["'self'"],
    }
}))

app.use(attrRoutes)
app.use(userRoutes)
//app.use(errorRoutes)

app.listen(port, () => {
    console.log('Test server is up on port ' + port)
})

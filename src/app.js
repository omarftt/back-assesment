import express from 'express'
import morgan from 'morgan'
import favsRoutes from './routers/favs.routes'
import listFavsRoutes from './routers/listFavs.routes'
import userRoutes from './routers/user.routes'
import authRoutes from './routers/auth.routes'


const app = express()

app.use(morgan('dev'))
app.use(express.json())

app.use('/api/fav',favsRoutes)
app.use('/api/favs',listFavsRoutes)
app.use('/api/user',userRoutes)
app.use('/api/auth',authRoutes)

app.get('/', (req, res) => {
    res.json('Favs API')
})

export default app
 
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import telaDePedidosRouter from './telaDePedidos/router.telaDePedidos'

// carrega variáveis do arquivo .env
dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => res.send('Olá, mundo com Express + TS!'))
app.use('/pedidos', telaDePedidosRouter)

app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`))

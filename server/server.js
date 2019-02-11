const express = require('express')
const routes = require('./routes')
const compression = require('compression')
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = routes.getRequestHandler(app);


app.prepare()
    .then(() => {
        const server = express()
        
        // Middleware
        server.use(compression())

        // Custom API endpoints
        server.get('/api/test', (req, res) => {
            return res.status(200).json({ success: true })
        })

        // Next.js
        server.get('*', async (req, res) => {
            return handle(req, res)
        })

        // Listen port 3000
        server.listen(3000, (err) => {
            if (err) throw err
            console.log('> Ready on http://localhost:3000')
        })
    })
    .catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
    })
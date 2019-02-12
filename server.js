const express = require('express')
const routes = require('./server/routes')
const compression = require('compression')
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = routes.getRequestHandler(app);
const port = process.env.PORT || 5000;


app.prepare()
    .then(() => {
        const server = express()
        
        // Middleware
        server.use(compression())

        // Custom API endpoints
        server.get('/api/test', (req, res) => {
            return res.status(200).json({ success: true })
        })

        // Custom API endpoints
        server.get('/api/test1', (req, res) => {
            return res.status(200).json({ success: 'test1' })
        })

        // Custom API endpoints
        server.get('/api/false', (req, res) => {
            return res.status(200).json({ success: false, false: true, trololo: 123 })
        })

        // Next.js
        server.get('*', async (req, res) => {
            return handle(req, res)
        })

        // Listen port 3000
       server.listen(port, (err) => {
            if (err) throw err
            console.log('> Ready on port: ' + port)
        })
    })
    .catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
    })
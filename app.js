const http = require('http')

const server = http.createServer((req, res) => {

    if(req.url === '/'){
        res.end('welcoming to our first page')
    }
    if(req.url === '/about'){
        res.end('welcoming to our about page')
    }
    res.end(`
    <h1>Opps!</h1>
    <p>we can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `)
    
})

server.listen(5000)


const _= require('lodash')

const items = [1, [2, [3, [ 4]]] ]
const newItems = _.flattenDeep(items)
console.log(newItems)
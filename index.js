const express = require('express')
const compression = require('compression')
const app = express()

const largeObject = []
for(let i = 0 ; i < 50000 ; i++){
    largeObject.push({
        name:"victor honorato",
        email: "vituhonorato@gmail.com"
    })
}

app.use(compression({level:9}))
app.get('/', (req, res)=> {
    res.header('Cache-control', 'public, max-age-3600')
    res.send(largeObject)
})

app.listen(3000, () => console.log("Server running"))
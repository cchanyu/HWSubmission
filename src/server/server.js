const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000

app.use(cors())
app.use(express.static('./client/build/'));
app.use('/', express.static('./client/build/index.html'));

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.get('/api/quote', cors(), (req, res) => {
    const quote = [
        'sample',
        'sample2',
        'sample3',
        'sample4',
        'sample5',
        'sample6',
        'sample7'
    ]
    
    res.json(quote)
})

app.listen(port, () => {
    console.log(`EX app listening at localhost:${port}`)
})
const express = require('express')
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.json({
        current_directory: __dirname,
        filename: __filename,
        dev: false
    })
})

app.listen(8080, () => {
    console.log('running on port 8080..');
})
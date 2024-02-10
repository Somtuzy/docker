const express = require('express')
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.json({
        current_directory: __dirname,
        filename: __filename
    })
})

app.listen(8080, () => {
    console.log('running on port 8080..');
})
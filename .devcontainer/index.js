const app = require('./app.js')

app.get('/', (req, res) => {
    res.send('<h3>hi from server</h3>')
})
app.listen(process.env.PORT, () => {
    console.log('app listening on ', process.env.PORT)
})
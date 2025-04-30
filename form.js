import express from "express"
const app = express()
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))


app.get('/', (req, res) => {
    res.send("Home Page")

})

app.get('/about', (req, res) => {
    res.render("about")

})

app.get('/form', (req, res) => {

    res.render("form",{message:null})

})


app.post('/submit', (req, res) => {
    const name = req.body.myname
     const message=`Hello,${name} you submited from`
    res.render('form',{message:message})

})


app.listen(3004, () => {
    console.log("Server start Succesfully port 3000")
})



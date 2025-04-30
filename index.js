import express from "express"
const app = express()
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))


// Dummy contacts array
const contacts = [
    { id: 1, firstName: "Alfred", lastName: "Kuhlman", email: "alfred@test.com", phone: "98989898" },
    { id: 2, firstName: "Frederick", lastName: "Jerde", email: "frederick@test.com", phone: "54545454" },
    { id: 3, firstName: "Joannie", lastName: "McLaughlin", email: "joannie@test.com", phone: "75757575" },
  ];





//middleware



// routes

// Render home page with contacts
app.get("/", (req, res) => {
    res.render("home", { contacts }); // <-- Pass contacts array here
  });
  


app.get('/show-contact',(req,res)=>{
    res.render('show-contact')
})



app.get('/add-contact',(req,res)=>{
    res.render('add-contact')

})


app.post('/add-contact',(req,res)=>{
    
})


app.get('/update-contact',(req,res)=>{
    res.render('update-contact')
})

app.post('/update-contact',(req,res)=>{
})


app.get('/delete-contact',(req,res)=>{
    res.render('delete-contact')
   
})



app.get('/', (req, res) => {
    res.render("index");
  });
  




app.listen(3002, () => {
    console.log("Server start Succesfully port 3000")
})






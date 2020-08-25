const express=require("express");
const jsonfile=require("jsonfile")
// Set up method-override for PUT and DELETE forms
const methodOverride = require('method-override')

const app=express();

app.use(express.json());
app.use(express.urlencoded({
	extended: true,
}))

app.use(methodOverride('_method'));


const reactEngine=require("express-react-views").createEngine();
app.engine('jsx', reactEngine)

app.set('views',__dirname+'/views');

app.set('view engine', 'jsx');

app.get("/",(request, response)=>{
	response.render('form')
})

app.post("/pokemon",(request, response)=>{

	response.send(request.body)
})

// Read operation
app.get("/pokemon",(request, response)=>{
	jsonfile.readFile("pokemon.json",(err, data)=>{
		response.render('read',data)
	})
})

app.get("/pokemon/:id",(req, res)=>{

	jsonfile.readFile("pokemon.json", (err, data)=>{
		let filteredItem=data.pokemon.filter(item=>item.id===parseInt(req.params.id))
		res.render("prefil-form",filteredItem[0])
	})
})

// Update Operation

app.put('/pokemon/:id', (request, response)=>{
	// Update the data
	console.log(request.body,"----PUT")
	jsonfile.readFile("pokemon.json",(err, data)=>{
		jsonfile.writeFile()
	})
	response.send("Updated Data")
})

app.listen(3000, ()=>{
	console.log("Server is listening at port 3000")
});
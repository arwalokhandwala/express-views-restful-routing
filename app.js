const express=require("express");

const app=express();

app.use(express.json());
app.use(express.urlencoded({
	extended: true,
}))

const reactEngine=require("express-react-views").createEngine();
app.engine('jsx', reactEngine)

app.set('views',__dirname+'/views');

app.set('view engine', 'jsx');

app.get("/",(request, response)=>{
	const data={
		"name": "Arwa",
		"number":"5-8733603",
		"hobbies": ["Reading","Writing","Dancing","Cooking"]
	}
	response.render('home',data);
})

app.listen(3000, ()=>{
	console.log("Server is listening at port 3000")
});
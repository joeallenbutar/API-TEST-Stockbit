// Importing http module
const http = require("http")
  
// Creating Server
const server = http.createServer((req,res)=>{
    req.statusCode=200;
    console.log("Server is Started")
    res.end();
});

// Executing the server
server.listen(3000,"localhost",()=>{
    console.log("Server is Running ")
})

function GetDataBeers() {
(async () => {
	const res = await fetch("https://api.punkapi.com/v2/beers");
	const result = await res.json();
	// console.log(result);

	let length =  result.length;
	console.log("Amount of data : ", length);

	for (let i = 0; i < result.length; i++) {
		console.log("name : ", result[i].name), "<br>";
	  }
  })();
  
}
GetDataBeers()
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

function loopNumberofData() {
	const number_of_data = [20, 5, 1];
  
	number_of_data.forEach(async nod => {
		const res = await fetch(
			`https://api.punkapi.com/v2/beers?page=2&per_page=${nod}`
		); 
		const data = await res.json();
		let length =  data.length;
		// console.log(data);
		if (length == nod) {
			console.log("length_data : ", length, "is equal to number_of_data: ", nod); 
		}	
	});
}

loopNumberofData();
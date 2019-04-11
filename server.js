//Setting up the server to listen to requests from the client
const express = require('express')

const app = express()


app.get('/greeting', (req, res) => {
  res.send("Hello Stranger")
});



app.get('/greeting/:name', (req, res) =>{
	const name ='Porter'
	res.send("Hello Stranger " + req.params.name + "!")


});

app.get('/tip/:total/:tipPercentage', (req, res) => {
	res.send(req.params.tipPercentage)
})



app.listen(3000, () => {

	console.log('Server is listening on Port 3000');
});
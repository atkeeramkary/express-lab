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

app.get('/magic/:question', (req, res) => {
	const responses = ["It is certain", "It is decidedly so", "Without a doubt", 
	"Yes definitely","You may rely on it", "As I see it yes", "Most likely", 
	"Outlook good","Yes", "Signs point to yes", "Reply hazy try again", 
	"Ask again later","Better not tell you now", "Cannot predict now", 
	"Concentrate and ask again","Don't count on it", "My reply is no", 
	"My sources say no","Outlook not so good", "Very doubtful"]

	const i = Math.floor(Math.random() * responses.length - 1)
	res.send(req.params.question + "   " + responses[i])
})

app.listen(3000, () => {

	console.log('Server is listening on Port 3000');
});
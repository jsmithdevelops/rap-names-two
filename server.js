const express = require("express") //makes your server have express from mods
const app = express() // common way to be able to use express after you have it
const PORT = 8000
const rappers = {
  "jax the rapper": {
    age: 19,
    birthName: "Jonny Be Good",
    birthLocation: "Miami,Florida",
  },
  "jonny the rapper": {
    age: 35,
    birthName: "Jax Be Good",
    birthLocation: "Chatsworth,Ga",
  },
  "jenni the rapper": {
    age: 19,
    birthName: "Stella Be Good",
    birthLocation: "Los Angles,Ca",
  },
  "stella the rapper": {
    age: 19,
    birthName: "Jenni Be Good",
    birthLocation: "Las Vegas,Nv",
  },
  unknown: {
    age: 0,
    birthName: "Unknown",
    birthLocation: "Unknown",
  },
}

//similar to event listener but on server side it is a network request
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html")
})

app.get("/api/:name", (request, response) => {
  const rapperName = request.params.name.toLowerCase()
  if (rappers[rapperName]) {
    response.json(rappers[rapperName])
  } else {
    response.json(rappers["unknown"])
  }
})

app.listen(PORT, () => {
  console.log(`The server is now running on port ${PORT}! Betta go catch it!`)
})

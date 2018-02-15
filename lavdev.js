const http = require('http')
const port = 4000

const data = `
<!DOCTYPE html>
<html>
 <head>
   <title>LAVDEV</title>
   <meta charset="utf-8">
 </head>
 <body>
 <style>
 html, body {
  height: 100%;
}

body {
  background: #333;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  font-family: Helvetica Neue;
}

h1 {
  font-size: 2em;
  color: #eee;
  display: inline-block;
  text-transform: uppercase;
  font-family: Roboto;
}
</style>
  <h1>Coming soon</h1>
 </body> 
</html>
`

const requestHandler = (request, response) => {
  console.log(request.url)
  response.end(data)
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})

  const express = require('express')
  const app = express()

  app.use(express.static('./public'))

  app.get('/',(req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
   })
   
  app.get('/',(req, res) => {
    res.send('Hello World')
  })

  app.get('/:nome',(req, res) => {
    res.json('Hello world ' + req.params.nome)
  })
   const port = 3000
  app.listen(port, () =>{
    console.log(`listenning on port ${port}`)
    })
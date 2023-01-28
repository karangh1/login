const express=require('express')
const connect=require('./db/connect')
const router=require('./routes/router')
const app=express()
const port=3000

const start=async ()=>{
    try {
      await  connect() 
      app.listen(port,console.log(`App is running on port ${port}`))
    } catch (error) {
      console.log(error)  
    }
}
start()

app.set('veiw- zengine','ejs')
app.use(express.urlencoded())

//Routes
app.use('/',router)

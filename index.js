// import json server using require methode

const jsonServer=require('json-server')

// to create server using json server

const server=jsonServer.create()

// router insert db json


const router=jsonServer.router("db.json")


// create middle ware

const middleware=jsonServer.defaults()

// create port for server


const PORT=process.env.PORT || 4000

// use middle ware in server

server.use(middleware)
server.use(router)

// to use port

server.listen(PORT,()=>{
    console.log("midia pleyer server started at PORT"+PORT);
})

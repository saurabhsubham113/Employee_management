const express = require('express')
const db = require('./db')
const utils = require('./utils')
const cors = require('cors')
const app = express()

app.use(cors('*'))
app.use(express.json())
app.use(express.urlencoded({ extended:true }))

//getting complete employee list
app.get('/view',(request,response)=>{
    const statement = `select * from user`

    db.connection.query(statement,(error,result)=>{
        response.send(utils.createResponse(error,result))
    })
})

//getting a single employee details
app.get('/view/:id',(request,response)=>{
    const id = request.params.id
    const statement = `select * from user where id = ${id}`

    db.connection.query(statement,(error,result)=>{
        const data = result[0]
        console.log(data)
        response.send(utils.createResponse(error,data))
    })
})

//adding employees
app.post('/add',(request,response)=>{
    const { name,location,email,mobile } = request.body
    const statement = `insert into user(name,location,email,mobile) values (?,?,?,?)`

    db.connection.query(statement,
        [name,location,email,mobile],
        (error,result)=>{
            response.send(utils.createResponse(error,result))
        })
})

//editing the employee
app.put('/edit/:id',(request,response)=>{
    const id = request.params.id
    const { name,location,email,mobile } = request.body
    const statement = `update user set name = ?,location = ?, email = ?, mobile = ?
                        where id = ?`
    
    db.connection.query(statement,
        [name,location,email,mobile,id],
        (error,result)=>{
            response.send(utils.createResponse(error,result))
        })
})

//deleting the employee details
app.delete('/delete/:id',(request,response)=>{
    const id = request.params.id
    const statement = `delete from user where id = ${id}`

    db.connection.query(statement,(error,result)=>{
        response.send(utils.createResponse(error,result))
    })
})

app.listen(process.env.PORT || 8080,()=>{
    console.log('server started on port 3000')
})
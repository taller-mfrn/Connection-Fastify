//const fs = require("fs");
const fastify = require('fastify')();

fastify.register(require('fastify-mysql'), {
  promise: true,
  connectionString: 'mysql://root@localhost/db-taller'
})

fastify.get('/', (request, reply) => {
    reply.send({ recieve: 'NIL' })
  })

fastify.get('/user_details/:id', async (req, reply) => {
    console.log(req.params);
    const connection = await fastify.mysql.getConnection()
    const [rows, fields] = await connection.query(
        `SELECT * FROM user_details WHERE user_id=${req.params.id}`
  )
  connection.release()
  return rows[0]
})

// fastify.get('/user_details/', async (req, reply) => {
//     const connection = await fastify.mysql.getConnection()
//     const [rows, fields] = await connection.query(
//         `SELECT * FROM user_details`
//   )
//   connection.release()
//   return rows
// })

fastify.listen(3000, err => {
  if (err) throw err
  console.log(`server listening on ${fastify.server.address().port}`)
})

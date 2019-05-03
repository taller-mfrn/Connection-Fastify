# Connection-Fastify
Hecho por: Leonardo Astudillo  


Para hacer las pruebas:

1. Importar el archivo "Sample-SQL-File-100000-Rows.sql" en una base de datos mysql
con user: "root" sin contraseña.  

2. Instalar la configuración del entorno utilizar "npm install".  

3. Ejecutar el archivo usando "node app.js".  

4. Ir a localhost:3000/user_details/:id para ver la información del usuario con ese id.  

Ejemplo:

Input: http://localhost:3000/user_details/1

Response:

{
  "user_id":1,
  "username":"rogers63",
  "first_name":"david",
  "last_name":"john",
  "gender":"Female",
  "password":"e6a33eee180b07e563d74fee8c2c66b8",
  "status":1
}

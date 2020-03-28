const request = require('supertest')
const app = require("../../src/app")
const db = require("../../src/db/connection")

describe('ONG', () => {
   beforeEach(async () => {
      await db.migrate.rollback()
      await db.migrate.latest()
   })
   
   it('should be able to create a new ONG', async () => {
      const res = await request(app)
         .post('/ongs')
         .send({
            name: "Teste",
            email: "teste@teste.com",
            whatsapp: "11940028922",
            city: "SP",
            uf: "SP"
         })
      
      expect(res.body).toHaveProperty('id')
      expect(res.body.id).toHaveLength(8)
   })

   afterAll(async () => await db.destroy())
})
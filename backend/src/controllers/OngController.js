const generateUUID = require("../utils/generateUUID")
const db = require("../db/connection")

module.exports = {
   async index(req, res){
      const ongs = await db('ongs').select('*')

      return res.json(ongs)
   },
   async create(req, res){
      const { name, email, whatsapp, city, uf } = req.body
      const id = generateUUID()

      await db('ongs').insert({
         id,
         name,
         email,
         whatsapp,
         city,
         uf
      })

      res.json({ id })
   },
}
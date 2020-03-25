const db = require("../db/connection")

module.exports = {
   async create(req, res){
      const ong = await db('ongs')
         .where('id', req.body.id)
         .select('name')
         .first()

      if(!ong) return res.status(400).json({ error: "No ONG found with this ID" })

      return res.json(ong)
   }
}
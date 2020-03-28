const generateUUID = require("../../src/utils/generateUUID")

describe('Generate Unique ID', () => {
   it('should generate an unique ID', () => {
      const id = generateUUID()
      expect(id).toHaveLength(8)
   })
})
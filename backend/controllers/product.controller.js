const Products = require('../models/products.model')

module.exports = {
  list: async (req, res) => {
    try {
      const products = await Products.findAll()

      return res.status(200).json(products)
    } catch (err) {
      console.log(err)
      return res
        .status(err.status || 500)
        .send(err.message || 'Something went wrong!')
    }
  }
}

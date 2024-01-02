const Products = require('../models/products.model');
const Stars = require('../models/stars.model');
const Users = require('../models/users.model');

module.exports = {
  list: async (req, res) => {
    try {
      const starsWithDetails = await Stars.findAll({
        include: [
          {
            model: Products,
            attributes: ['name'],
          },
          {
            model: Users,
            attributes: ['name', 'email'],
          },
        ],
        attributes: ['stars'],
      });

      return res.status(200).json(starsWithDetails);
    } catch (err) {
      console.log(err)
      return res
        .status(err.status || 500)
        .send(err.message || 'Something went wrong!')
    }
  }
}

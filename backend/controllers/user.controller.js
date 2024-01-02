const Stars = require("../models/stars.model");
const Users = require("../models/users.model");

module.exports = {
  star: async (req, res) => {
    try {
      console.log("hi")
      const { name, email, productId, stars } = req.body;
  
      // Check if the user exists or create a new one
      const [user, created] = await Users.findOrCreate({
        where: { email },
        defaults: { name }
      });
  
      // Associate the user with the starred product
      await Stars.create({
        user_id: user.id,
        product_id: productId,
        stars
      });
  
      res.status(201).json({ message: 'Product starred successfully!' });
    } catch (error) {
      console.error('Error starring product:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }  
}

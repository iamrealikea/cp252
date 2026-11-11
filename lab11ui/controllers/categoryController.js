const Category = require('../models/Category');

module.exports = {
  showCreateForm: (req, res) => {
    res.render('categories/create');
  },

  createCategory: (req, res) => {
    const { name } = req.body;
    const created = Category.create(name);
    if (!created) {
      return res.status(400).send('Category already exists');
    }
    console.log("Creating Category: "+ name);
    res.redirect('/categories/new');
  }
};

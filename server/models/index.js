const Item = require('./Item')
const User = require('./User')
const Category = require('./Category')
const Subcategory = require('./subCategory')

Item.belongsTo(Category, {
foreignKey: 'category_id'
});

Category.hasMany(Item, {
foreignKey: 'category_id'
});

Item.belongsTo(Subcategory, {
foreignKey: 'subcategory_id'
});

Subcategory.hasMany(Item, {
    foreignKey: 'subcategory_id'
});

Subcategory.belongsTo(Category, {
    foreignKey: 'category_id'
});

Category.hasMany(Subcategory, {
    foreignKey: 'category_id'
});

module.exports = {Item, User, Category, Subcategory}


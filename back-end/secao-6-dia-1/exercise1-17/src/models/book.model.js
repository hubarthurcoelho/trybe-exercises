const BookModel = (sequelize, dataTypes) => {
  const Book = sequelize.define('Book', {
    title: dataTypes.STRING,
    author: dataTypes.STRING,
    pageQuantity: dataTypes.INTEGER,
    createdAt: dataTypes.DATE,
    updatedAt: dataTypes.DATE,
  }, {
    tableName: 'Books',
    underscored: true,
  });

  return Book;
};

module.exports = BookModel;

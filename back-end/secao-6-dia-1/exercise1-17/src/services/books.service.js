const { Book } = require('../models');

const getAll = async () => {
  const books = Book.findAll();
  return books;
};

module.exports = {
  getAll,
};

const bookService = require('../services/books.service');

const getAll = async (_req, res) => {
    const response = await bookService.getAll();
    console.log(response);
    res.status(200).json(response);
};

module.exports = {
  getAll,
};

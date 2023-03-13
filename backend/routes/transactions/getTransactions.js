module.exports = function (req, res, next) {
  db.collection("transactions")
    .find({})
    .toArray()
    .then((trans) => {
      console.log(trans);
      res.json(trans);
    });
};

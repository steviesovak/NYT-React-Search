const db = require("../models");

module.exports = {
    //find articles
  findAll: function(req, res) {
    db.Article
      .find(req.query)
      .sort({ date: -1 })
      .then(dbArticle => res.json(dbArticle))
      .catch(err => res.status(422).json(err));
  },
  // find by id
  findById: function(req, res) {
    db.Article
      .findById(req.params.id)
      .then(dbArticle => res.json(dbArticle))
      .catch(err => res.status(422).json(err));
  },
  //create 
  create: function(req, res) {
    const article = {
      _id: req.body._id,
      title: req.body.headline.main,
      url: req.body.web_url
    };
    db.Article
      .create(article)
      .then(dbArticle => res.json(dbArticle))
      .catch(err => res.status(422).json(err));
  },
  //update
  update: function(req, res) {
    db.Article
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbArticle => res.json(dbArticle))
      .catch(err => res.status(422).json(err));
  },
  //delete
  remove: function(req, res) {
    db.Article
      .findById({ _id: req.params.id })
      .then(dbArticle => dbArticle.remove())
      .then(dbArticle => res.json(dbArticle))
      .catch(err => res.status(422).json(err));
  }
};

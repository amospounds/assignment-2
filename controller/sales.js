const pool = require("../model/index");
const salesController = {};

salesController.getAllPosts = function (req, res, next) {
  // get all posts from database
  pool.query("SELECT * FROM salesblack", (error, results) => {
    if (error) {
      throw error;
    }
    return res.render("sales", { salesPosts: results.rows });
  });
};

salesController.createAPost = function (req, res, next) {
  // req.body
  let manufacturer = req.body.manufacturer ;
  let model = req.body.model;
  let color = req.body.color;
  let year = req.body.year;



  pool.query(
    `INSERT INTO salesblack (Manufacturer,Model,Color,Year ) VALUES ($1 , $2, $3,$4)`,
    [manufacturer , model, color, year],
    (error, results) => {
      console.log(results);
      if (error) {
        throw error;
      }
      return res.render("sales", { salesPosts: [] });
    }
  );
};

salesController.deleteAPost = function (req, res, next) {
  // get resource id

  const id = req.params.id;

  // Replace sahmie in Blackforcesahmie with your fullname - no spaces
  pool.query(
    "DELETE FROM salesblack WHERE id = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.redirect("/sales");
    }
  );
};

salesController.editAPost = function (req, res, next) {
  const id = req.params.id;

  pool.query(
    "SELECT * FROM salesblack WHERE id = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.render("salesEdit", { salesPost: results.rows[0] });
    }
  );
};

salesController.updateAPost = function (req, res, next) {
  const id = req.params.id;

  let manufacturer = req.body.manufacturer ;
  let model = req.body.model;
  let color = req.body.color;
  let year = req.body.year;

  pool.query(
    "UPDATE salesblack SET manufacturer = $1, model = $2, color = $3,year = $4 WHERE id = $5",
    [manufacturer , model, color, year, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.redirect("/sales");
    }
  );
};

module.exports = salesController;

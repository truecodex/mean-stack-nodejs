var express = require('express');
var router = express.Router();

var model = require('../models/product-model');

router.get('/:offset/:limit', function(req, res, next) {
  let offset = req.params.offset;
  let limit = req.params.limit;
  model.getProducts(offset, limit, function(err, products) {
    if(err) {
      res.json(err)
    } else {
      model.getTotalProducts(function(err, result) {
        if (err) {
          res.json(err)
        } else {
          res.json({data: products, total: result[0].total})
        }
      })
    }
  })
});

router.get('/:id', function(req, res) {
  let id = req.params.id;
  model.getProduct(id, function(err, result){
    res.json({data: result[0], error: err})
  })
})

router.post('/add', function(req, res) {
  model.addProduct(req.body, function(err, result) {
    res.json({data: result, error: err})
  })
})

router.put('/update', function(req, res) {
  model.updateProduct(req.body, function(err, result) {
    res.json({data: result, error: err})
  })
})

router.delete('/delete/:id', function(req, res) {
  let id = req.params.id;
  model.deleteProduct(id, function(err, result) {
    res.json({data: result, error: err})
  })
})

module.exports = router;
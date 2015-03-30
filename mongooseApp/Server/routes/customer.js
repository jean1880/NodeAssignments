module.exports = function(app) {
  // Module dependencies.
  var mongoose = require('mongoose'),
      Customer = mongoose.models.Customer,
      api = {};

  // ALL
  api.customers = function (req, res) {
    Customer.find(function(err, customers) {
      if (err) {
        res.json(500, err);
      } else {    
        res.json({customers: customers});
      }
    });
  };

  // GET
  api.customer = function (req, res) {
    var id = req.params.id;
    Customer.findOne({ '_id': id }, function(err, customer) {
      if (err) {
        res.json(404, err);
      } else {
        res.json({customer: customer});
      }
    });
  };

  // POST
  api.addCustomer = function (req, res) {
    
    var customer;
      
    if(typeof req.body.customer == 'undefined'){
         res.status(500);
         return res.json({message: 'customer is undefined'});
    }

    customer = new Customer(req.body.customer);

    customer.save(function (err) {
      if (!err) {
        console.log("created customer");
        return res.json(201, customer.toObject());
      } else {
        return res.json(500, err);
      }
    });

  };

  // PUT
  api.editCustomer = function (req, res) {
    var id = req.params.id;

    Customer.findById(id, function (err, customer) {


    
      if(typeof req.body.customer["FirstName"] != 'undefined'){
        customer["FirstName"] = req.body.customer["FirstName"];
      }  
    
      if(typeof req.body.customer["LastName"] != 'undefined'){
        customer["LastName"] = req.body.customer["LastName"];
      }  
    
      if(typeof req.body.customer["Birthdate"] != 'undefined'){
        customer["Birthdate"] = req.body.customer["Birthdate"];
      }  
    
      if(typeof req.body.customer["Age"] != 'undefined'){
        customer["Age"] = req.body.customer["Age"];
      }  
    
      if(typeof req.body.customer["Address"] != 'undefined'){
        customer["Address"] = req.body.customer["Address"];
      }  
    
      if(typeof req.body.customer["PhoneNumber"] != 'undefined'){
        customer["PhoneNumber"] = req.body.customer["PhoneNumber"];
      }  
    

      return customer.save(function (err) {
        if (!err) {
          console.log("updated customer");
          return res.json(200, customer.toObject());        
        } else {
         return res.json(500, err);
        }
        return res.json(customer);
      });
    });

  };

  // DELETE
  api.deleteCustomer = function (req, res) {
    var id = req.params.id;
    return Customer.findById(id, function (err, customer) {
      return customer.remove(function (err) {
        if (!err) {
          console.log("removed customer");
          return res.send(204);
        } else {
          console.log(err);
          return res.json(500, err);
        }
      });
    });

  };


  app.get('/api/customers', api.customers);
  app.get('/api/customer/:id', api.customer);
  app.post('/api/customer', api.addCustomer);
  app.put('/api/customer/:id', api.editCustomer);
  app.delete('/api/customer/:id', api.deleteCustomer);
};
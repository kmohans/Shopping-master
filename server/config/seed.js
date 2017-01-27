/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var Setting = require('../api/setting/setting.model');
var Product = require('../api/product/product.model');
var Category = require('../api/category/category.model');
var Brand = require('../api/brand/brand.model');
var PaymentMethod = require('../api/PaymentMethod/PaymentMethod.model');
var Setting = require('../api/setting/setting.model');
var Feature = require('../api/feature/feature.model');
var Coupon = require('../api/coupon/coupon.model');
var Shipping = require('../api/shipping/shipping.model');
var Country = require('../api/country/country.model');

Shipping.find(function (err, data) {
  if(data.length < 1){
    Shipping.create(
      {
        "_id" : "561f73dbe87e75d814a98f5a",
        "carrier" : "DTDC",
        "country" : "India",
        "charge" : 2,
        "minWeight" : 200,
        "maxWeight" : 5000,
        "minOrderValue" : 10,
        "active" : true,
        "__v" : 0,
        "name" : "DTDC"
      },
      {
          "_id" : "561f7ff6fb2f8dac199a618f",
          "carrier" : "UPS",
          "country" : "USA",
          "charge" : 2,
          "minWeight" : 500,
          "maxWeight" : 10000,
          "minOrderValue" : 20,
          "__v" : 0,
          "active" : true
      },
      {
          "_id" : "561f801ffb2f8dac199a6190",
          "carrier" : "DHL",
          "country" : "Germany",
          "charge" : 4,
          "minWeight" : 0,
          "maxWeight" : 20000,
          "minOrderValue" : 300,
          "active" : true,
          "__v" : 0
      },
      {
          "_id" : "561f804dfb2f8dac199a6191",
          "carrier" : "DHL",
          "country" : "India",
          "charge" : 1,
          "minWeight" : 500,
          "maxWeight" : 5000,
          "minOrderValue" : 20,
          "active" : true,
          "__v" : 0
      }
    );
  }
});

Coupon.find(function (err, data) {
  if(data.length < 1){
    Coupon.create(
      {
        "_id" : "561cbd6fc3c4fab4009caa0e",
        "code" : "A100",
        "amount" : 100,
        "info" : "$100 discount on all products above $100",
        "active" : true,
        "type" : "Discount",
        "minimumCartValue" : 100,
        "__v" : 0
      }
    );
  }
});

Feature.find(function (err, data) {
  if(data.length < 1){
    Feature.create(
      {"key" : "Type", "val" : "Blouses", "active" : true},
      {"key" : "Type", "val" : "Gown", "active" : true},
      {"key" : "Fit", "val" : "Slim", "active" : true},
      {"key" : "Fit", "val" : "Tight", "active" : true},
      {"key" : "Fit", "val" : "Loose", "active" : true},
      {"key" : "Fit", "val" : "Regular", "active" : true},
      {"key" : "Fabric", "val" : "Cotton", "active" : true},
      {"key" : "Fabric", "val" : "Polyester", "active" : true},
      {"key" : "Neck", "val" : "Round Neck", "active" : true},
      {"key" : "Neck", "val" : "Collar", "active" : true},
      {"key" : "Color", "val" : "Red", "active" : true},
      {"key" : "Color", "val" : "Green", "active" : true},
      {"key" : "Color", "val" : "Blue", "active" : true},
      {"key" : "Color", "val" : "White", "active" : true}
    );
  }
});

Setting.find(function (err, data) {
  if(data.length < 1){
    Setting.create({
      "minOrderValue" : 20,
      "shippingCharge" : 15
    });
  }
});

PaymentMethod.find(function (err, data) {
  if(data.length < 1){
    PaymentMethod.create({
        name: 'COD',
        email: '-',
        active : true
    },
    {
        name: 'PayPal',
        email: '2lessons@gmail.com',
        active : true
    },
    {
        name: 'Google',
        email: '2lessons@gmail.com',
        options: {
              ship_method_name_1: "UPS Next Day Air",
              ship_method_price_1: "20.00",
              ship_method_currency_1: "USD",
              ship_method_name_2: "UPS Ground",
              ship_method_price_2: "15.00",
              ship_method_currency_2: "USD"
          },
        active : true
    },
    {
        name: 'Stripe',
        email: 'pk_test_srKHaSHynBIVLX03r33xLszb',
        options: { chargeurl : "http://biri.in/order" },
        active : true
    });
  }
});

// Setting.find(function (err, data) {
//   if(data.length < 1){
//     Setting.create({
//       paypal : '2lessons@gmail.com'
//     });
//   }
// });

Thing.find(function (err, data) {
  if(data.length < 1){
    Thing.create({
      name : 'Development Tools',
      info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
    }, {
      name : 'Server and Client integration',
      info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
    }, {
      name : 'Smart Build System',
      info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
    },  {
      name : 'Modular Structure',
      info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
    },  {
      name : 'Optimized Build',
      info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
    },{
      name : 'Deployment Ready',
      info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
    });
  }
});

User.find(function (err, data) {
  if(data.length < 1){
    User.create({
      provider: 'local',
      name: 'Test User',
      email: 'test@test.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@admin.com',
      password: 'admin'
    }, function() {
        console.log('finished populating users');
    });
  }
});

Product.find(function (err, data) {
  if(data.length < 1){
    Product.create( {
    "_id" : "5607a6af0dc20f1b0366522a",
    "name" : "Guislain - Delicious Vegetable Panini with Mascarpone Cheese and Sun dried Tomato Paste",
    "info" : "A delightful mix of crunchy exotic vegetables, soft mascarpone cheese and tart sundried tomate paste on freshly baked focaccia bread. This panini is all set to woo your tastebuds, with a bottle of freshly squeezed watermelon juice in tow.",
    "brand" : {
        "active" : true,
        "__v" : 0,
        "slug" : "alleviater",
        "info" : "Alleviater",
        "name" : "Alleviater",
        "_id" : "5607c5c1dddfb6780c5bddf8"
    },
    "nameLower" : "guislain - delicious vegetable panini with mascarpone cheese and sun dried tomato paste",
    "active" : true,
    "sku" : 5,
    "type" : "Veg",
    "slug" : "Guislain - Delicious Vegetable Panini with Mascarpone Cheese and Sun dried Tomato Paste",
    "variants" : [
        {
            "mrp" : 5,
            "price" : 5,
            "size" : "5",
            "weight" : "130g",
            "image" : "paninis_guislain_veg_250.jpeg"
        }
    ],
    "keyFeatures" : [],
    "features" : [
        {
            "key" : "Type",
            "val" : "Veg"
        },
        {
            "key" : "Ingradians1",
            "val" : "Mascarpone Cheese"
        },
        {
            "key" : "Ingradians2",
            "val" : "Tomato Paste"
        }
    ],
    "category" : {
        "active" : true,
        "slug" : "paninis",
        "__v" : 0,
        "parentCategory" : 1,
        "category" : 100,
        "name" : "Paninis",
        "_id" : "560773d2d4124c770bfc4b59"
    },
    "__v" : 0
},{
    "_id" : "5607a6af0dc20f1b0366522b",
    "name" : "Eyck - Scrumptious Grilled Chicken Panini with Sun dried Tomato Paste and Mascarpone Cheese",
    "info" : "Tender grilled chicken panini with a vibrant sundried tomato paste, mascarpone cheese and crunchy vegetables on freshly baked focaccia bread. Sweet, spice and everything nice - including a bottle of freshly squeezed watermelon juice gratis.",
    "brand" : {
        "active" : true,
        "__v" : 0,
        "slug" : "alleviater",
        "info" : "Alleviater",
        "name" : "Alleviater",
        "_id" : "5607c5c1dddfb6780c5bddf8"
    },
    "nameLower" : "Eyck - Scrumptious Grilled Chicken Panini with Sun dried Tomato Paste and Mascarpone Cheese",
    "active" : true,
    "sku" : 5,
    "type" : "Non-Veg",
    "slug" : "Eyck - Scrumptious Grilled Chicken Panini with Sun dried Tomato Paste and Mascarpone Cheese",
    "variants" : [
        {
            "mrp" : 5.5,
            "price" : 5.5,
            "size" : "5",
            "weight" : "130g",
            "image" : "paninis_eyck-nv_280.jpeg"
        }
    ],
    "keyFeatures" : [],
    "features" : [
        {
            "key" : "Type",
            "val" : "Non-Veg"
        },
        {
            "key" : "Ingradians1",
            "val" : "Chicken"
        },
        {
            "key" : "Ingradians2",
            "val" : "Tomato Paste"
        },
		{
            "key" : "Ingradians3",
            "val" : "Mascarpone Cheese"
        }
    ],
    "category" : {
        "active" : true,
        "slug" : "paninis",
        "__v" : 0,
        "parentCategory" : 1,
        "category" : 100,
        "name" : "Paninis",
        "_id" : "560773d2d4124c770bfc4b59"
    },
    "__v" : 0
},{
    "_id" : "5607a6af0dc20f1b0366522c",
    "name" : "Mustard Mayo Chicken Panini - Grilled Chicken with Mustard Mayo, Green Lettuce on homemade classic Italian Focaccia Bread",
    "info" : "A classic panini with savoury grilled chicken tossed in tangy mustard mayo layered on a bed of green lettuce",
    "brand" : {
        "active" : true,
        "__v" : 0,
        "slug" : "alleviater",
        "info" : "Alleviater",
        "name" : "Alleviater",
        "_id" : "5607c5c1dddfb6780c5bddf8"
    },
    "nameLower" : "Mustard Mayo Chicken Panini - Grilled Chicken with Mustard Mayo, Green Lettuce on homemade classic Italian Focaccia Bread",
    "active" : true,
    "sku" : 5,
    "type" : "Non-Veg",
    "slug" : "Mustard Mayo Chicken Panini - Grilled Chicken with Mustard Mayo, Green Lettuce on homemade classic Italian Focaccia Bread",
    "variants" : [
        {
            "mrp" : 5.5,
            "price" : 5.5,
            "size" : "5",
            "weight" : "130g",
            "image" : "panini_Mayo_nv_270.jpeg"
        }
    ],
    "keyFeatures" : [],
    "features" : [
        {
            "key" : "Type",
            "val" : "Non-Veg"
        },
        {
            "key" : "Ingradians1",
            "val" : "Chicken"
        },
        {
            "key" : "Ingradians2",
            "val" : "Green Lettuce"
        },
		{
            "key" : "Ingradians3",
            "val" : "Mustard Mayo"
        }
    ],
    "category" : {
        "active" : true,
        "slug" : "paninis",
        "__v" : 0,
        "parentCategory" : 1,
        "category" : 100,
        "name" : "Paninis",
        "_id" : "560773d2d4124c770bfc4b59"
    },
    "__v" : 0
},{
    "_id" : "5607a6af0dc20f1b0366522d",
    "name" : "Spinach and Corn Panini- Creamy Spinach and Sweet Corn with Mayo on homemade classic Italian Focaccia Bread",
    "info" : "An all time favorite panini with smooth, creamy & crunchy filling of spinach and corn.",
    "brand" : {
        "active" : true,
        "__v" : 0,
        "slug" : "alleviater",
        "info" : "Alleviater",
        "name" : "Alleviater",
        "_id" : "5607c5c1dddfb6780c5bddf8"
    },
    "nameLower" : "Spinach and Corn Panini- Creamy Spinach and Sweet Corn with Mayo on homemade classic Italian Focaccia Bread",
    "active" : true,
    "sku" : 5,
    "type" : "Veg",
    "slug" : "Spinach and Corn Panini- Creamy Spinach and Sweet Corn with Mayo on homemade classic Italian Focaccia Bread",
    "variants" : [
        {
            "mrp" : 5,
            "price" : 5,
            "size" : "5",
            "weight" : "100g",
            "image" : "paninis_spinach_veg_250.jpeg"
        }
    ],
    "keyFeatures" : [],
    "features" : [
        {
            "key" : "Type",
            "val" : "Veg"
        },
        {
            "key" : "Ingradians1",
            "val" : "Spinach"
        },
        {
            "key" : "Ingradians2",
            "val" : "Sweet Corn"
        }
    ],
    "category" : {
        "active" : true,
        "slug" : "paninis",
        "__v" : 0,
        "parentCategory" : 1,
        "category" : 100,
        "name" : "Paninis",
        "_id" : "560773d2d4124c770bfc4b59"
    },
    "__v" : 0
},{
    "_id" : "5607a6af0dc20f1b0366522e",
    "name" : "Paneer Panache - Paneer Panini with pesto and lettuce",
    "info" : "Smothered with Pesto, covered with lettuce and a hearty fill of Paneer makes this Panini every vegetarian's delight.",
    "brand" : {
        "active" : true,
        "__v" : 0,
        "slug" : "alleviater",
        "info" : "Alleviater",
        "name" : "Alleviater",
        "_id" : "5607c5c1dddfb6780c5bddf8"
    },
    "nameLower" : "Paneer Panache - Paneer Panini with pesto and lettuce",
    "active" : true,
    "sku" : 5,
    "type" : "Veg",
    "slug" : "Paneer Panache - Paneer Panini with pesto and lettuce",
    "variants" : [
        {
            "mrp" : 5.5,
            "price" : 5.5,
            "size" : "5",
            "weight" : "120g",
            "image" : "panini_paneer_pestoni_veg_270.jpeg"
        }
    ],
    "keyFeatures" : [],
    "features" : [
        {
            "key" : "Type",
            "val" : "Veg"
        },
        {
            "key" : "Ingradians1",
            "val" : "Paneer"
        },
        {
            "key" : "Ingradians2",
            "val" : "lettuce"
        }
    ],
    "category" : {
        "active" : true,
        "slug" : "paninis",
        "__v" : 0,
        "parentCategory" : 1,
        "category" : 100,
        "name" : "Paninis",
        "_id" : "560773d2d4124c770bfc4b59"
    },
    "__v" : 0
},{
    "_id" : "5607a6af0dc20f1b0366522f",
    "name" : "Pierlala - Fresh Panini with Smoked Salmon and Mascarpone Cream Cheese",
    "info" : "Smothered with Pesto, covered with lettuce and a hearty fill of Paneer makes this Panini every vegetarian's delight.",
    "brand" : {
        "active" : true,
        "__v" : 0,
        "slug" : "alleviater",
        "info" : "Alleviater",
        "name" : "Alleviater",
        "_id" : "5607c5c1dddfb6780c5bddf8"
    },
    "nameLower" : "Pierlala - Fresh Panini with Smoked Salmon and Mascarpone Cream Cheese",
    "active" : true,
    "sku" : 5,
    "type" : "Non-Veg",
    "slug" : "Pierlala - Fresh Panini with Smoked Salmon and Mascarpone Cream Cheese",
    "variants" : [
        {
            "mrp" : 7.5,
            "price" : 7.5,
            "size" : "5",
            "weight" : "200g",
            "image" : "panini_pierala_nv_380.jpeg"
        }
    ],
    "keyFeatures" : [],
    "features" : [
        {
            "key" : "Type",
            "val" : "Non-Veg"
        },
        {
            "key" : "Ingradians1",
            "val" : "Smoked Salmon"
        },
        {
            "key" : "Ingradians2",
            "val" : "Mascarpone Cream Cheese"
        }
    ],
    "category" : {
        "active" : true,
        "slug" : "paninis",
        "__v" : 0,
        "parentCategory" : 1,
        "category" : 100,
        "name" : "Paninis",
        "_id" : "560773d2d4124c770bfc4b59"
    },
    "__v" : 0
},{
    "_id" : "5607a6af0dc20f1b0366523a",
    "name" : "Paneer Pestoni - French goat cheese salad with cottage cheese panini",
    "info" : "Cottage cheese with green lettuce and pesto mayo on freshly baked focaccia bread - Peppery Mustard dip",
    "brand" : {
        "active" : true,
        "__v" : 0,
        "slug" : "alleviater",
        "info" : "Alleviater",
        "name" : "Alleviater",
        "_id" : "5607c5c1dddfb6780c5bddf8"
    },
    "nameLower" : "Paneer Pestoni - French goat cheese salad with cottage cheese panini",
    "active" : true,
    "sku" : 5,
    "type" : "Veg",
    "slug" : "Paneer Pestoni - French goat cheese salad with cottage cheese panini",
    "variants" : [
        {
            "mrp" : 4.5,
            "price" : 4.5,
            "size" : "5",
            "weight" : "120g",
            "image" : "combo_paneer_veg_230.jpeg"
        }
    ],
    "keyFeatures" : [],
    "features" : [
        {
            "key" : "Type",
            "val" : "Veg"
        },
        {
            "key" : "Ingradians1",
            "val" : "Cottage cheese"
        },
        {
            "key" : "Ingradians2",
            "val" : "Green lettuce"
        }
    ],
    "category" : {
        "active" : true,
        "slug" : "combos",
        "__v" : 0,
        "parentCategory" : 1,
        "category" : 200,
        "name" : "Combos",
        "_id" : "560773d2d4124c770bfc4b60"
    },
    "__v" : 0
},{
    "_id" : "5607a6af0dc20f1b0366523b",
    "name" : "Chicken Booster - Grilled chicken salad with mustard mayo chicken panini",
    "info" : "Grilled chicken with mustard mayo, green lettuce on freshly baked focaccia bread - Smokey Barbeque dip",
    "brand" : {
        "active" : true,
        "__v" : 0,
        "slug" : "alleviater",
        "info" : "Alleviater",
        "name" : "Alleviater",
        "_id" : "5607c5c1dddfb6780c5bddf8"
    },
    "nameLower" : "Chicken Booster - Grilled chicken salad with mustard mayo chicken panini",
    "active" : true,
    "sku" : 5,
    "type" : "Non-Veg",
    "slug" : "Chicken Booster - Grilled chicken salad with mustard mayo chicken panini",
    "variants" : [
        {
            "mrp" : 5.5,
            "price" : 5.5,
            "size" : "5",
            "weight" : "180g",
            "image" : "combo_chicken_nv_280.jpeg"
        }
    ],
    "keyFeatures" : [],
    "features" : [
        {
            "key" : "Type",
            "val" : "Non-Veg"
        },
        {
            "key" : "Ingradians1",
            "val" : "Grilled chicken"
        },
        {
            "key" : "Ingradians2",
            "val" : "Green lettuce"
        }
    ],
    "category" : {
        "active" : true,
        "slug" : "combos",
        "__v" : 0,
        "parentCategory" : 1,
        "category" : 200,
        "name" : "Combos",
        "_id" : "560773d2d4124c770bfc4b60"
    },
    "__v" : 0
},{
    "_id" : "5607a6af0dc20f1b0366523c",
    "name" : "Salmon Breezer - Som Tum Salad with Smoked Salmon Panini",
    "info" : "Smoked salmon with rucola and mascarpone cream cheese dressing on freshly baked focaccia bread - Peppery Mustard dip",
    "brand" : {
        "active" : true,
        "__v" : 0,
        "slug" : "alleviater",
        "info" : "Alleviater",
        "name" : "Alleviater",
        "_id" : "5607c5c1dddfb6780c5bddf8"
    },
    "nameLower" : "Salmon Breezer - Som Tum Salad with Smoked Salmon Panini",
    "active" : true,
    "sku" : 5,
    "type" : "Non-Veg",
    "slug" : "Salmon Breezer - Som Tum Salad with Smoked Salmon Panini",
    "variants" : [
        {
            "mrp" : 6,
            "price" : 6,
            "size" : "5",
            "weight" : "200g",
            "image" : "combo_salmon_nv_300.jpeg"
        }
    ],
    "keyFeatures" : [],
    "features" : [
        {
            "key" : "Type",
            "val" : "Non-Veg"
        },
        {
            "key" : "Ingradians1",
            "val" : "Smoked Salmon"
        },
        {
            "key" : "Ingradians2",
            "val" : "mascarpone cream"
        }
    ],
    "category" : {
        "active" : true,
        "slug" : "combos",
        "__v" : 0,
        "parentCategory" : 1,
        "category" : 200,
        "name" : "Combos",
        "_id" : "560773d2d4124c770bfc4b60"
    },
    "__v" : 0
},{
    "_id" : "5607a6af0dc20f1b0366523d",
    "name" : "Veggie Supreme - French goat cheese salad with sautéed vegetable panini",
    "info" : "Sautéed vegetables with green lettuce, home-made sundried tomato paste, and mascarpone cream cheese dressing on freshly baked focaccia bread - Smokey Barbeque dip",
    "brand" : {
        "active" : true,
        "__v" : 0,
        "slug" : "alleviater",
        "info" : "Alleviater",
        "name" : "Alleviater",
        "_id" : "5607c5c1dddfb6780c5bddf8"
    },
    "nameLower" : "Veggie Supreme - French goat cheese salad with sautéed vegetable panini",
    "active" : true,
    "sku" : 5,
    "type" : "Veg",
    "slug" : "Veggie Supreme - French goat cheese salad with sautéed vegetable panini",
    "variants" : [
        {
            "mrp" : 4.5,
            "price" : 4.5,
            "size" : "5",
            "weight" : "200g",
            "image" : "combo_supreme_veg_230.jpeg"
        }
    ],
    "keyFeatures" : [],
    "features" : [
        {
            "key" : "Type",
            "val" : "Veg"
        },
        {
            "key" : "Ingradians1",
            "val" : "French goat cheese"
        },
        {
            "key" : "Ingradians2",
            "val" : "sautéed vegetable"
        }
    ],
    "category" : {
        "active" : true,
        "slug" : "combos",
        "__v" : 0,
        "parentCategory" : 1,
        "category" : 200,
        "name" : "Combos",
        "_id" : "560773d2d4124c770bfc4b60"
    },
    "__v" : 0
},{
    "_id" : "5607a6af0dc20f1b0366523d",
    "name" : "Chicken Kri Kri - French goat cheese salad with grilled chicken panini",
    "info" : "Grilled chicken with green lettuce, home-made sundried tomato paste, and mascarpone cream cheese dressing on freshly baked focaccia bread - Smokey Barbeque dip",
    "brand" : {
        "active" : true,
        "__v" : 0,
        "slug" : "alleviater",
        "info" : "Alleviater",
        "name" : "Alleviater",
        "_id" : "5607c5c1dddfb6780c5bddf8"
    },
    "nameLower" : "Chicken Kri Kri - French goat cheese salad with grilled chicken panini",
    "active" : true,
    "sku" : 5,
    "type" : "Non-Veg",
    "slug" : "Chicken Kri Kri - French goat cheese salad with grilled chicken panin",
    "variants" : [
        {
            "mrp" : 6.5,
            "price" : 6.5,
            "size" : "5",
            "weight" : "200g",
            "image" : "combo_kri_kri_nv_330.jpeg"
        }
    ],
    "keyFeatures" : [],
    "features" : [
        {
            "key" : "Type",
            "val" : "Non-Veg"
        },
        {
            "key" : "Ingradians1",
            "val" : "French goat cheese"
        },
        {
            "key" : "Ingradians2",
            "val" : "sautéed vegetable"
        }
    ],
    "category" : {
        "active" : true,
        "slug" : "combos",
        "__v" : 0,
        "parentCategory" : 1,
        "category" : 200,
        "name" : "Combos",
        "_id" : "560773d2d4124c770bfc4b60"
    },
    "__v" : 0
},{
    "_id" : "5607a6af0dc20f1b0366524a",
    "name" : "Rosemary Chicken with Veggies - Pan Seared Chicken in White Wine Sauce",
    "info" : "Take a bite of this excellently pan seared chicken complimented by a delicious white wine sauce and you will agree that an eye on the scale does not mean a sacrifice by the palate. Enjoy this dish accompanied by a side of grilled exotic vegetables and our signature pillowy focaccia.",
    "brand" : {
        "active" : true,
        "__v" : 0,
        "slug" : "alleviater",
        "info" : "Alleviater",
        "name" : "Alleviater",
        "_id" : "5607c5c1dddfb6780c5bddf8"
    },
    "nameLower" : "Rosemary Chicken with Veggies - Pan Seared Chicken in White Wine Sauce",
    "active" : true,
    "sku" : 5,
    "type" : "Non-Veg",
    "slug" : "Rosemary Chicken with Veggies - Pan Seared Chicken in White Wine Sauce",
    "variants" : [
        {
            "mrp" : 6.5,
            "price" : 6.5,
            "size" : "5",
            "weight" : "200g",
            "image" : "main_rosemary_nv_330.jpeg"
        }
    ],
    "keyFeatures" : [],
    "features" : [
        {
            "key" : "Type",
            "val" : "Non-Veg"
        },
        {
            "key" : "Ingradians1",
            "val" : "Chicken"
        },
        {
            "key" : "Ingradians2",
            "val" : "Veggies"
        }
    ],
    "category" : {
        "active" : true,
        "slug" : "mains",
        "__v" : 0,
        "parentCategory" : 1,
        "category" : 300,
        "name" : "Mains",
        "_id" : "560773d2d4124c770bfc4b61"
    },
    "__v" : 0
},{
    "_id" : "5607a6af0dc20f1b0366524b",
    "name" : "River Sole With Veggies - Delicious fish with white sauce and veggies",
    "info" : "Take a bite of this excellently pan seared chicken complimented by a delicious white wine sauce and you will agree that an eye on the scale does not mean a sacrifice by the palate. Enjoy this dish accompanied by a side of grilled exotic vegetables and our signature pillowy focaccia.",
    "brand" : {
        "active" : true,
        "__v" : 0,
        "slug" : "alleviater",
        "info" : "Alleviater",
        "name" : "Alleviater",
        "_id" : "5607c5c1dddfb6780c5bddf8"
    },
    "nameLower" : "River Sole With Veggies - Delicious fish with white sauce and veggies",
    "active" : true,
    "sku" : 5,
    "type" : "Non-Veg",
    "slug" : "River Sole With Veggies - Delicious fish with white sauce and veggies",
    "variants" : [
        {
            "mrp" : 8,
            "price" : 8,
            "size" : "5",
            "weight" : "250g",
            "image" : "main_river_nv_400.jpeg"
        }
    ],
    "keyFeatures" : [],
    "features" : [
        {
            "key" : "Type",
            "val" : "Non-Veg"
        },
        {
            "key" : "Ingradians1",
            "val" : "Fish"
        },
        {
            "key" : "Ingradians2",
            "val" : "Veggies"
        }
    ],
    "category" : {
        "active" : true,
        "slug" : "mains",
        "__v" : 0,
        "parentCategory" : 1,
        "category" : 300,
        "name" : "Mains",
        "_id" : "560773d2d4124c770bfc4b61"
    },
    "__v" : 0
},{
    "_id" : "5607a6af0dc20f1b0366524c",
    "name" : "Grilled Chicken Pasta in Red Sauce - Al Dente Spaghetti and Juicy Chicken in Tangy Tomato Sauce",
    "info" : "Al-dente pasta tossed in a silky tomato sauce, with generous chunks of grilled chicken, tart black olives, fresh basil, spicy chilli flakes, sprigs of parsley and sharp parmesan - accompanied by a side of our beautiful pillowy focaccia, we guarantee that you will fall head over heels for this dish.",
    "brand" : {
        "active" : true,
        "__v" : 0,
        "slug" : "alleviater",
        "info" : "Alleviater",
        "name" : "Alleviater",
        "_id" : "5607c5c1dddfb6780c5bddf8"
    },
    "nameLower" : "Grilled Chicken Pasta in Red Sauce - Al Dente Spaghetti and Juicy Chicken in Tangy Tomato Sauce",
    "active" : true,
    "sku" : 5,
    "type" : "Non-Veg",
    "slug" : "Grilled Chicken Pasta in Red Sauce - Al Dente Spaghetti and Juicy Chicken in Tangy Tomato Sauce",
    "variants" : [
        {
            "mrp" : 5.5,
            "price" : 5.5,
            "size" : "5",
            "weight" : "180g",
            "image" : "main_pasta_nv_280.jpeg"
        }
    ],
    "keyFeatures" : [],
    "features" : [
        {
            "key" : "Type",
            "val" : "Non-Veg"
        },
        {
            "key" : "Ingradians1",
            "val" : "Chicken"
        },
        {
            "key" : "Ingradians2",
            "val" : "Spaghetti"
        }
    ],
    "category" : {
        "active" : true,
        "slug" : "mains",
        "__v" : 0,
        "parentCategory" : 1,
        "category" : 300,
        "name" : "Mains",
        "_id" : "560773d2d4124c770bfc4b61"
    },
    "__v" : 0
},{
    "_id" : "5607a6af0dc20f1b0366524d",
    "name" : "Chettinad Chicken with Lachcha Parathas",
    "info" : "Straight from the merchants of Tamil Nadu to you, Chettinad Chicken is a fiery, flavourful curry studded with generous chunks of tender and delectable chicken. Served with 2 fluffy and crispy Malabar Parathas, this filling meal is bound to leave you smitten.",
    "brand" : {
        "active" : true,
        "__v" : 0,
        "slug" : "alleviater",
        "info" : "Alleviater",
        "name" : "Alleviater",
        "_id" : "5607c5c1dddfb6780c5bddf8"
    },
    "nameLower" : "Chettinad Chicken with Lachcha Parathas",
    "active" : true,
    "sku" : 5,
    "type" : "Non-Veg",
    "slug" : "Chettinad Chicken with Lachcha Parathas",
    "variants" : [
        {
            "mrp" : 5.5,
            "price" : 5.5,
            "size" : "5",
            "weight" : "180g",
            "image" : "main_chettinad_nv_260.jpeg"
        }
    ],
    "keyFeatures" : [],
    "features" : [
        {
            "key" : "Type",
            "val" : "Non-Veg"
        },
        {
            "key" : "Ingradians1",
            "val" : "Chicken"
        },
        {
            "key" : "Ingradians2",
            "val" : "crispy Malabar Parathas"
        }
    ],
    "category" : {
        "active" : true,
        "slug" : "mains",
        "__v" : 0,
        "parentCategory" : 1,
        "category" : 300,
        "name" : "Mains",
        "_id" : "560773d2d4124c770bfc4b61"
    },
    "__v" : 0
},{
    "_id" : "5607a6af0dc20f1b0366524e",
    "name" : "Athena : Goddess's Platter - A delicious platter of Tabbouleh, 2 generous half pita pockets with falafel, hummus, pickled veggies and 4 mini pita",
    "info" : "Been waiting to join the royal ranks? You don't need to get knighted when you can get the Goddess's Platter! Athena is an irresistable dish that has two generous halves of soft freshly baked pita pockets filled with wholesome falafel, along with a stunning tabbouleh salad that is a harmonious marriage of bulgur, parsley, and tomatoes with a sublime olive oil-lemon dressing. Did we mention the creamy hummus, pickled vegetables and four mini pitas on the side?",
    "brand" : {
        "active" : true,
        "__v" : 0,
        "slug" : "alleviater",
        "info" : "Alleviater",
        "name" : "Alleviater",
        "_id" : "5607c5c1dddfb6780c5bddf8"
    },
    "nameLower" : "Athena : Goddess's Platter - A delicious platter of Tabbouleh, 2 generous half pita pockets with falafel, hummus, pickled veggies and 4 mini pita",
    "active" : true,
    "sku" : 5,
    "type" : "Veg",
    "slug" : "Athena : Goddess's Platter - A delicious platter of Tabbouleh, 2 generous half pita pockets with falafel, hummus, pickled veggies and 4 mini pita",
    "variants" : [
        {
            "mrp" : 5,
            "price" : 5,
            "size" : "5",
            "weight" : "220g",
            "image" : "main_athena-veg_255.jpeg"
        }
    ],
    "keyFeatures" : [],
    "features" : [
        {
            "key" : "Type",
            "val" : "Veg"
        },
        {
            "key" : "Ingradians1",
            "val" : "Falafel"
        },
        {
            "key" : "Ingradians2",
            "val" : "Sublime olive"
        }
    ],
    "category" : {
        "active" : true,
        "slug" : "mains",
        "__v" : 0,
        "parentCategory" : 1,
        "category" : 300,
        "name" : "Mains",
        "_id" : "560773d2d4124c770bfc4b61"
    },
    "__v" : 0
},{
    "_id" : "5607a6af0dc20f1b0366524f",
    "name" : "Gokulam's Lemon Rice - South Indian Lemon Rice with cooling raita, flavourful sambar and papad",
    "info" : "Looks can be deceptive. Take for example Gokulam's Lemon Rice. It looks quite simple and sunny, but a spoonful will have the complexity of flavours hit you one by one. The spicy bite of green chillies, the crunch of earthy groudnuts and the zingy lemon juice running through the golden-yellow grains of rice takes this dish to a whole other level. Throw in some raita, sambar and papad, and lunchtime woes stay away!",
    "brand" : {
        "active" : true,
        "__v" : 0,
        "slug" : "alleviater",
        "info" : "Alleviater",
        "name" : "Alleviater",
        "_id" : "5607c5c1dddfb6780c5bddf8"
    },
    "nameLower" : "Gokulam's Lemon Rice - South Indian Lemon Rice with cooling raita, flavourful sambar and papad",
    "active" : true,
    "sku" : 5,
    "type" : "Veg",
    "slug" : "Gokulam's Lemon Rice - South Indian Lemon Rice with cooling raita, flavourful sambar and papad",
    "variants" : [
        {
            "mrp" : 3.5,
            "price" : 3.5,
            "size" : "5",
            "weight" : "250g",
            "image" : "main_gokulam_veg_180.jpeg"
        }
    ],
    "keyFeatures" : [],
    "features" : [
        {
            "key" : "Type",
            "val" : "Veg"
        },
        {
            "key" : "Ingradians1",
            "val" : "Gokulam's Lemon Rice"
        },
        {
            "key" : "Ingradians2",
            "val" : "Golden-yellow grains"
        }
    ],
    "category" : {
        "active" : true,
        "slug" : "mains",
        "__v" : 0,
        "parentCategory" : 1,
        "category" : 300,
        "name" : "Mains",
        "_id" : "560773d2d4124c770bfc4b61"
    },
    "__v" : 0
},
{
    "_id" : "5607a6af0dc20f1b0366525a",
    "name" : "Subz Tehri Biryani",
    "info" : "Simple ingredients often come together to work magic, and our Vegetable Biryani does just that! Aromatic basmati rice tossed in a rich gravy with a melange of spices and vegetable jewels create an ambrosial delight. It is no wonder they call Biryani the food of the Gods. Accompanied by a saalan with a kick and a refreshing raita this meal is will have the angels singing.",
    "brand" : {
        "active" : true,
        "__v" : 0,
        "slug" : "alleviater",
        "info" : "Alleviater",
        "name" : "Alleviater",
        "_id" : "5607c5c1dddfb6780c5bddf8"
    },
    "nameLower" : "Subz Tehri Biryani",
    "active" : true,
    "sku" : 5,
    "type" : "Veg",
    "slug" : "Subz Tehri Biryani",
    "variants" : [
        {
            "mrp" : 4,
            "price" : 4,
            "size" : "5",
            "weight" : "250g",
            "image" : "biryani_dum__190.jpeg"
        }
    ],
    "keyFeatures" : [],
    "features" : [
        {
            "key" : "Type",
            "val" : "Veg"
        },
        {
            "key" : "Ingradians1",
            "val" : "Vegetable"
        },
        {
            "key" : "Ingradians2",
            "val" : "Gravy"
        }
    ],
    "category" : {
        "active" : true,
        "slug" : "biryanis",
        "__v" : 0,
        "parentCategory" : 1,
        "category" : 400,
        "name" : "Biryanis",
        "_id" : "560773d2d4124c770bfc4b62"
    },
    "__v" : 0
},
{
    "_id" : "5607a6af0dc20f1b0366525b",
    "name" : "Nizami Begum Box",
    "info" : "When Dum Maaro Dum was crooned by a groovy actress in the psychedelic 70s, we guarantee that all epicurean minds would have drifted towards the ambrosial Hyderabadi Dum Biryani...such is its popularity! Beautifully spiced rice studded generously with vegetables and cooked to perfection on Dum Pukht with a melt-in-your-mouth serving of hara bhara kebab, tangy salan, refreshing raita, fresh rings of onion and our cookies with love.",
    "brand" : {
        "active" : true,
        "__v" : 0,
        "slug" : "alleviater",
        "info" : "Alleviater",
        "name" : "Alleviater",
        "_id" : "5607c5c1dddfb6780c5bddf8"
    },
    "nameLower" : "Nizami Begum Box",
    "active" : true,
    "sku" : 5,
    "type" : "Non-Veg",
    "slug" : "Nizami Begum Box",
    "variants" : [
        {
            "mrp" : 3.5,
            "price" : 3.5,
            "size" : "5",
            "weight" : "200g",
            "image" : "biryani_nizami_nv_180.jpeg"
        }
    ],
    "keyFeatures" : [],
    "features" : [
        {
            "key" : "Type",
            "val" : "Non-Veg"
        },
        {
            "key" : "Ingradians1",
            "val" : "Mutton"
        },
        {
            "key" : "Ingradians2",
            "val" : "Gravy"
        }
    ],
    "category" : {
        "active" : true,
        "slug" : "biryanis",
        "__v" : 0,
        "parentCategory" : 1,
        "category" : 400,
        "name" : "Biryanis",
        "_id" : "560773d2d4124c770bfc4b62"
    },
    "__v" : 0
},{
    "_id" : "5607a6af0dc20f1b0366525c",
    "name" : "Shahi Chicken Dum Biryani",
    "info" : "A true Hyderabadi style kachchi dum chicken biryani where half cooked basmati rice is layered with raw marinated meat and aromatic spices and herbs, then finished on slow heat till done on dum. Accompanied by a Saalan with a kick and a refreshing raita this meal will leave your taste buds tingling for more.",
    "brand" : {
        "active" : true,
        "__v" : 0,
        "slug" : "alleviater",
        "info" : "Alleviater",
        "name" : "Alleviater",
        "_id" : "5607c5c1dddfb6780c5bddf8"
    },
    "nameLower" : "Shahi Chicken Dum Biryani",
    "active" : true,
    "sku" : 5,
    "type" : "Non-Veg",
    "slug" : "Shahi Chicken Dum Biryani",
    "variants" : [
        {
            "mrp" : 4.5,
            "price" : 4.5,
            "size" : "5",
            "weight" : "200g",
            "image" : "biryani_dum_nv_220.jpeg"
        }
    ],
    "keyFeatures" : [],
    "features" : [
        {
            "key" : "Type",
            "val" : "Non-Veg"
        },
        {
            "key" : "Ingradians1",
            "val" : "Chicken"
        },
        {
            "key" : "Ingradians2",
            "val" : "Gravy"
        }
    ],
    "category" : {
        "active" : true,
        "slug" : "biryanis",
        "__v" : 0,
        "parentCategory" : 1,
        "category" : 400,
        "name" : "Biryanis",
        "_id" : "560773d2d4124c770bfc4b62"
    },
    "__v" : 0
},{
    "_id" : "5607a6af0dc20f1b0366526a",
    "name" : "Fiery Chicken Roll - 7 inch Grilled Chicken Roll with Mint Chutney",
    "info" : "4 P.M. snack cravings getting you all fired up? Our Fiery Chicken Roll is the perfect match for you. Tender chicken tossed in an intensely flavoursome sauce, accompanied faithfully by crunchy onions and bell peppers, wrapped up snugly in a delicious paratha.",
    "brand" : {
        "active" : true,
        "__v" : 0,
        "slug" : "alleviater",
        "info" : "Alleviater",
        "name" : "Alleviater",
        "_id" : "5607c5c1dddfb6780c5bddf8"
    },
    "nameLower" : "Fiery Chicken Roll - 7 inch Grilled Chicken Roll with Mint Chutney",
    "active" : true,
    "sku" : 5,
    "type" : "Non-Veg",
    "slug" : "Fiery Chicken Roll - 7 inch Grilled Chicken Roll with Mint Chutney",
    "variants" : [
        {
            "mrp" : 3,
            "price" : 3,
            "size" : "5",
            "weight" : "120g",
            "image" : "snack_fiery_nv_140.jpeg"
        }
    ],
    "keyFeatures" : [],
    "features" : [
        {
            "key" : "Type",
            "val" : "Non-Veg"
        },
        {
            "key" : "Ingradians1",
            "val" : "Chicken"
        },
        {
            "key" : "Ingradians2",
            "val" : "Mint"
        }
    ],
    "category" : {
        "active" : true,
        "slug" : "snacks",
        "__v" : 0,
        "parentCategory" : 2,
        "category" : 500,
        "name" : "Snacks",
        "_id" : "560774dad4124c770bfc4b70"
    },
    "__v" : 0
},{
    "_id" : "5607a6af0dc20f1b0366526b",
    "name" : "Hariyali Begum (Paneer) - 9 inch Hariyali Begum Roll with complimentary Turbo Charger",
    "info" : "If you're feeling those pangs get you down, meet the colourful Hariyali Begum. A crispy, wholesome roti with the goodness of spinach, stuffed generously with melt-in-your-mouth Kadhai paneer that is glazed perfectly in a juicy sauce of peppers and spices. Fresh minty green chutney plays the perfect accompaniment and you get a complimentary Turbo Charger to wash it down. Good things come in big packages too, and this Begum is 25% larger, perfect for those hungry days.",
    "brand" : {
        "active" : true,
        "__v" : 0,
        "slug" : "alleviater",
        "info" : "Alleviater",
        "name" : "Alleviater",
        "_id" : "5607c5c1dddfb6780c5bddf8"
    },
    "nameLower" : "Hariyali Begum (Paneer) - 9 inch Hariyali Begum Roll with complimentary Turbo Charger",
    "active" : true,
    "sku" : 5,
    "type" : "Veg",
    "slug" : "Hariyali Begum (Paneer) - 9 inch Hariyali Begum Roll with complimentary Turbo Charger",
    "variants" : [
        {
            "mrp" : 3.5,
            "price" : 3.5,
            "size" : "5",
            "weight" : "120g",
            "image" : "snack_hariyali_nv_160.jpeg"
        }
    ],
    "keyFeatures" : [],
    "features" : [
        {
            "key" : "Type",
            "val" : "Veg"
        },
        {
            "key" : "Ingradians1",
            "val" : "Paneer"
        },
        {
            "key" : "Ingradians2",
            "val" : "Mint"
        }
    ],
    "category" : {
        "active" : true,
        "slug" : "snacks",
        "__v" : 0,
        "parentCategory" : 2,
        "category" : 500,
        "name" : "Snacks",
        "_id" : "560774dad4124c770bfc4b70"
    },
    "__v" : 0
},{
    "_id" : "5607a6af0dc20f1b0366526c",
    "name" : "Tinos - Four delicious freshly baked mini pita pockets stuffed with golden falafel, with hummus and veggies on the side",
    "info" : "Say goodbye to the ol' boring snack of tea and biscuits and hello to Tinos! Four halves of delicious and miniature pita pockets, fresh from the oven, filled to the brim with Mediterranean magic. Golden falafels that are bursting with flavour and goodness - this one will keep you satiated till dinner! A little creamy hummus on the side along with some fresh veggie sticks, and Tinos goes from great to perfection.",
    "brand" : {
        "active" : true,
        "__v" : 0,
        "slug" : "alleviater",
        "info" : "Alleviater",
        "name" : "Alleviater",
        "_id" : "5607c5c1dddfb6780c5bddf8"
    },
    "nameLower" : "Tinos - Four delicious freshly baked mini pita pockets stuffed with golden falafel, with hummus and veggies on the side",
    "active" : true,
    "sku" : 5,
    "type" : "Veg",
    "slug" : "Tinos - Four delicious freshly baked mini pita pockets stuffed with golden falafel, with hummus and veggies on the side",
    "variants" : [
        {
            "mrp" : 2.5,
            "price" : 2.5,
            "size" : "5",
            "weight" : "120g",
            "image" : "snack_tinos_veg_130.jpeg"
        }
    ],
    "keyFeatures" : [],
    "features" : [
        {
            "key" : "Type",
            "val" : "Veg"
        },
        {
            "key" : "Ingradians1",
            "val" : "Pita"
        },
        {
            "key" : "Ingradians2",
            "val" : "veggie sticks"
        }
    ],
    "category" : {
        "active" : true,
        "slug" : "snacks",
        "__v" : 0,
        "parentCategory" : 2,
        "category" : 500,
        "name" : "Snacks",
        "_id" : "560774dad4124c770bfc4b70"
    },
    "__v" : 0
},{
    "_id" : "5607a6af0dc20f1b0366527a",
    "name" : "Berrylicious Blackberry Premium - 500ml tub",
    "info" : "We have always loved our ice creams to be delicious, That’s exactly what we have done, made it a whole lot creamier so that it just melts away. And yes we have used 100% Natural blackberries for our ice cream.",
    "brand" : {
        "active" : true,
        "__v" : 0,
        "slug" : "alleviater",
        "info" : "Alleviater",
        "name" : "Alleviater",
        "_id" : "5607c5c1dddfb6780c5bddf8"
    },
    "nameLower" : "Berrylicious Blackberry Premium - 500ml tub",
    "active" : true,
    "sku" : 5,
    "type" : "Veg",
    "slug" : "Berrylicious Blackberry Premium - 500ml tub",
    "variants" : [
        {
            "mrp" : 5.5,
            "price" : 5.5,
            "size" : "5",
            "weight" : "200g",
            "image" : "ice_blackberry_veg_270.jpeg"
        }
    ],
    "keyFeatures" : [],
    "features" : [
        {
            "key" : "Type",
            "val" : "Veg"
        },
        {
            "key" : "Ingradians1",
            "val" : "Blackberry"
        }
    ],
    "category" : {
        "active" : true,
        "slug" : "icecreams",
        "__v" : 0,
        "parentCategory" : 2,
        "category" : 600,
        "name" : "Ice Creams",
        "_id" : "560774dad4124c770bfc4b71"
    },
	"__v" : 0
},{
    "_id" : "5607a6af0dc20f1b0366527b",
    "name" : "Filter Coffee with Choco Shavings - (150 grams)",
    "info" : "We believe filter coffee is the best kind of coffee. It is a wonder noone thought of serving it cold. So far. All our ice creams are made from natural ingredients, with no added preservatives or essences. Beat the heat with us.",
    "brand" : {
        "active" : true,
        "__v" : 0,
        "slug" : "alleviater",
        "info" : "Alleviater",
        "name" : "Alleviater",
        "_id" : "5607c5c1dddfb6780c5bddf8"
    },
    "nameLower" : "Filter Coffee with Choco Shavings - (150 grams)",
    "active" : true,
    "sku" : 5,
    "type" : "Veg",
    "slug" : "Filter Coffee with Choco Shavings - (150 grams)",
    "variants" : [
        {
            "mrp" : 2.5,
            "price" : 2.5,
            "size" : "5",
            "weight" : "100g",
            "image" : "ice_coffee_veg_120.jpeg"
        }
    ],
    "keyFeatures" : [],
    "features" : [
        {
            "key" : "Type",
            "val" : "Veg"
        },
        {
            "key" : "Ingradians1",
            "val" : "Coffee"
        }
    ],
    "category" : {
        "active" : true,
        "slug" : "icecreams",
        "__v" : 0,
        "parentCategory" : 2,
        "category" : 600,
        "name" : "Ice Creams",
        "_id" : "560774dad4124c770bfc4b71"
    },
	    "__v" : 0
},{
    "_id" : "5607a6af0dc20f1b0366527c",
    "name" : "Berrylicious Blueberry Premium - 500ml tub",
    "info" : "We believe filter coffee is the best kind of coffee. It is a wonder noone thought of serving it cold. So far. All our ice creams are made from natural ingredients, with no added preservatives or essences. Beat the heat with us.",
    "brand" : {
        "active" : true,
        "__v" : 0,
        "slug" : "alleviater",
        "info" : "Alleviater",
        "name" : "Alleviater",
        "_id" : "5607c5c1dddfb6780c5bddf8"
    },
    "nameLower" : "Berrylicious Blueberry Premium - 500ml tub",
    "active" : true,
    "sku" : 5,
    "type" : "Veg",
    "slug" : "Berrylicious Blueberry Premium - 500ml tub",
    "variants" : [
        {
            "mrp" : 5.5,
            "price" : 5.5,
            "size" : "5",
            "weight" : "200g",
            "image" : "ice_blueberry_veg_270.jpeg"
        }
    ],
    "keyFeatures" : [],
    "features" : [
        {
            "key" : "Type",
            "val" : "Veg"
        },
        {
            "key" : "Ingradians1",
            "val" : "Blueberry"
        }
    ],
    "category" : {
        "active" : true,
        "slug" : "icecreams",
        "__v" : 0,
        "parentCategory" : 2,
        "category" : 600,
        "name" : "Ice Creams",
        "_id" : "560774dad4124c770bfc4b71"
    },
	    "__v" : 0
},{
    "_id" : "5607a6af0dc20f1b0366528a",
    "name" : "Kesari Gulab Jamun in a Jar(4 pieces)",
    "info" : "Gulab Jamun is one of the most popular desserts in India. This delicious dessert consists of fried dumplings of khoya, soaked in rose, elaichi and kesar flavored sugar syrup. It gets its name from two words: Gulab which means rose (for the rose flavored syrup) and Jamun which is a kind of deep purple colored Indian berry (the cooked dumplings are dark brown in colour). Serve Gulab Jamun warm or at room temprature; by itself or topped with ice cream!",
    "brand" : {
        "active" : true,
        "__v" : 0,
        "slug" : "alleviater",
        "info" : "Alleviater",
        "name" : "Alleviater",
        "_id" : "5607c5c1dddfb6780c5bddf8"
    },
    "nameLower" : "Kesari Gulab Jamun in a Jar(4 pieces)",
    "active" : true,
    "sku" : 5,
    "type" : "Veg",
    "slug" : "Kesari Gulab Jamun in a Jar(4 pieces)",
    "variants" : [
        {
            "mrp" : 3.5,
            "price" : 3.5,
            "size" : "5",
            "weight" : "180g",
            "image" : "desert_gulab_veg_160.jpeg"
        }
    ],
    "keyFeatures" : [],
    "features" : [
        {
            "key" : "Type",
            "val" : "Veg"
        },
        {
            "key" : "Ingradians1",
            "val" : "Khoya"
        }
    ],
    "category" : {
        "active" : true,
        "slug" : "desserts",
        "__v" : 0,
        "parentCategory" : 2,
        "category" : 700,
        "name" : "Desserts",
        "_id" : "560774dad4124c770bfc4b72"
    },
	"__v" : 0
},{
    "_id" : "5607a6af0dc20f1b0366528b",
    "name" : "Classic Belgian Chocolate Brownie",
    "info" : "Inspired by the classic Belgian brownie, this beauty is crafted with love, care and a whole lot of chocolate. You'll find yourself getting nutty surprises, thanks to crunchy walnuts, hiding skillfully in the beautiful, dark, fugdy goodness. Dusted with pristine icing sugar, this treat if shared is sure to put you in the good books of your loved ones.",
    "brand" : {
        "active" : true,
        "__v" : 0,
        "slug" : "alleviater",
        "info" : "Alleviater",
        "name" : "Alleviater",
        "_id" : "5607c5c1dddfb6780c5bddf8"
    },
    "nameLower" : "Classic Belgian Chocolate Brownie",
    "active" : true,
    "sku" : 5,
    "type" : "Non-Veg",
    "slug" : "Classic Belgian Chocolate Brownie",
    "variants" : [
        {
            "mrp" : 3.5,
            "price" : 3.5,
            "size" : "5",
            "weight" : "180g",
            "image" : "desert_brownie_nv_160.jpeg"
        }
    ],
    "keyFeatures" : [],
    "features" : [
        {
            "key" : "Type",
            "val" : "Non-Veg"
        },
        {
            "key" : "Ingradians1",
            "val" : "Brownie"
        },
		{ 
            "key" : "Ingradians2",
            "val" : "Chocolate"
        }
    ],
    "category" : {
        "active" : true,
        "slug" : "desserts",
        "__v" : 0,
        "parentCategory" : 2,
        "category" : 700,
        "name" : "Desserts",
        "_id" : "560774dad4124c770bfc4b72"
    },
	"__v" : 0
},{
    "_id" : "5607a6af0dc20f1b0366528c",
    "name" : "Hazelnut Praline Caramel Chocolate Cake (220 grams)",
    "info" : "A gourmet entremet hand crafted to perfection , made from the finest quality Swiss Felchlin chocolate with a gooey caramel sauce in the center and crushed roasted hazelnuts garnished on top. It's an absolute beauty.",
    "brand" : {
        "active" : true,
        "__v" : 0,
        "slug" : "alleviater",
        "info" : "Alleviater",
        "name" : "Alleviater",
        "_id" : "5607c5c1dddfb6780c5bddf8"
    },
    "nameLower" : "Hazelnut Praline Caramel Chocolate Cake (220 grams)",
    "active" : true,
    "sku" : 5,
    "type" : "Non-Veg",
    "slug" : "Hazelnut Praline Caramel Chocolate Cake (220 grams)",
    "variants" : [
        {
            "mrp" : 6,
            "price" : 6,
            "size" : "5",
            "weight" : "250g",
            "image" : "desert_hazelnut_nv_300.jpeg"
        }
    ],
    "keyFeatures" : [],
    "features" : [
        {
            "key" : "Type",
            "val" : "Non-Veg"
        },
        {
            "key" : "Ingradians1",
            "val" : "Caramel"
        },
		{ 
            "key" : "Ingradians2",
            "val" : "Chocolate"
        }
    ],
    "category" : {
        "active" : true,
        "slug" : "desserts",
        "__v" : 0,
        "parentCategory" : 2,
        "category" : 700,
        "name" : "Desserts",
        "_id" : "560774dad4124c770bfc4b72"
    },
    "__v" : 0
},{
    "_id" : "5607a6af0dc20f1b0366529a",
    "name" : "Dark chocolate orange truffle cake (550g)",
    "info" : "Sinful & blissful - This scrumptious chocolate cake comes with a rich dark chocolate & orange truffle filling frosted with ganache and garnished with caramelised oranges. Weight : 550 gms",
    "brand" : {
        "active" : true,
        "__v" : 0,
        "slug" : "alleviater",
        "info" : "Alleviater",
        "name" : "Alleviater",
        "_id" : "5607c5c1dddfb6780c5bddf8"
    },
    "nameLower" : "Dark chocolate orange truffle cake (550g)",
    "active" : true,
    "sku" : 5,
    "type" : "Non-Veg",
    "slug" : "Dark chocolate orange truffle cake (550g)",
    "variants" : [
        {
            "mrp" : 14,
            "price" : 14,
            "size" : "5",
            "weight" : "550g",
            "image" : "cake_chocolate_nv_700.jpeg"
        }
    ],
    "keyFeatures" : [],
    "features" : [
        {
            "key" : "Type",
            "val" : "Non-Veg"
        },
        {
            "key" : "Ingradians1",
            "val" : "Chocolate"
        },
		{ 
            "key" : "Ingradians2",
            "val" : "Orange"
        }
    ],
    "category" : {
        "active" : true,
        "slug" : "cakes",
        "__v" : 0,
        "parentCategory" : 2,
        "category" : 800,
        "name" : "Cakes",
        "_id" : "560774dad4124c770bfc4b73"
    },
    "__v" : 0
},{
    "_id" : "5607a6af0dc20f1b0366529b",
    "name" : "Fudgy rum chocolate cake with marshmallows (500 grams)",
    "info" : "Divine dark chocolate plays with distinctive notes of dark rum infused with soft and fluffy marshmallows frosted with a creamy chocolate ganache. Weight : 500 gms (Contain Alcohol).",
    "brand" : {
        "active" : true,
        "__v" : 0,
        "slug" : "alleviater",
        "info" : "Alleviater",
        "name" : "Alleviater",
        "_id" : "5607c5c1dddfb6780c5bddf8"
    },
    "nameLower" : "Fudgy rum chocolate cake with marshmallows (500 grams)",
    "active" : true,
    "sku" : 5,
    "type" : "Non-Veg",
    "slug" : "Fudgy rum chocolate cake with marshmallows (500 grams)",
    "variants" : [
        {
            "mrp" : 14,
            "price" : 14,
            "size" : "5",
            "weight" : "500g",
            "image" : "cake_rumchocolate_nv_700.jpeg"
        }
    ],
    "keyFeatures" : [],
    "features" : [
        {
            "key" : "Type",
            "val" : "Non-Veg"
        },
        {
            "key" : "Ingradians1",
            "val" : "Marshmallows"
        },
		{ 
            "key" : "Ingradians2",
            "val" : "Orange"
        }
    ],
    "category" : {
        "active" : true,
        "slug" : "cakes",
        "__v" : 0,
        "parentCategory" : 2,
        "category" : 800,
        "name" : "Cakes",
        "_id" : "560774dad4124c770bfc4b73"
    },
    "__v" : 0
},{
    "_id" : "5607a6af0dc20f1b0366529c",
    "name" : "Spiced walnut ring with salted caramel sauce (500 grams)",
    "info" : "This delicious halo is laced with aromatic flavors of cinnamon, nutmeg & ginger and blended with finely chopped walnuts, topped with a salted caramel sauce which makes it both unique in flavour & appearance. If you love to experiment with flavours, this beauty is a good match.",
    "brand" : {
        "active" : true,
        "__v" : 0,
        "slug" : "alleviater",
        "info" : "Alleviater",
        "name" : "Alleviater",
        "_id" : "5607c5c1dddfb6780c5bddf8"
    },
    "nameLower" : "Spiced walnut ring with salted caramel sauce (500 grams)",
    "active" : true,
    "sku" : 5,
    "type" : "Veg",
    "slug" : "Spiced walnut ring with salted caramel sauce (500 grams)",
    "variants" : [
        {
            "mrp" : 13,
            "price" : 13,
            "size" : "5",
            "weight" : "500g",
            "image" : "cake_walnut_veg_650.jpeg"
        }
    ],
    "keyFeatures" : [],
    "features" : [
        {
            "key" : "Type",
            "val" : "Veg"
        },
        {
            "key" : "Ingradians1",
            "val" : "Cinnamon"
        },
		{ 
            "key" : "Ingradians2",
            "val" : "Walnuts"
        }
    ],
    "category" : {
        "active" : true,
        "slug" : "cakes",
        "__v" : 0,
        "parentCategory" : 2,
        "category" : 800,
        "name" : "Cakes",
        "_id" : "560774dad4124c770bfc4b73"
    },
    "__v" : 0
},		
{
    "_id" : "5607a6af0dc20f1b0366530a",
    "name" : "Shuddh Watermelon - The wonderful watermelon elixir that is just fruit in a bottle (300ml)",
    "info" : "The virgin watermelon in the form of a pure elixir! Our quintessential watermelon juice is packed with the all natural goodness of fruit and no preservatives.",
    "brand" : {
        "active" : true,
        "__v" : 0,
        "slug" : "alleviater",
        "info" : "Alleviater",
        "name" : "Alleviater",
        "_id" : "5607c5c1dddfb6780c5bddf8"
    },
    "nameLower" : "Shuddh Watermelon - The wonderful watermelon elixir that is just fruit in a bottle (300ml)",
    "active" : true,
    "sku" : 5,
    "type" : "Veg",
    "slug" : "Shuddh Watermelon - The wonderful watermelon elixir that is just fruit in a bottle (300ml)",
    "variants" : [
        {
            "mrp" : 2.5,
            "price" : 2.5,
            "size" : "5",
            "weight" : "100g",
            "image" : "drink_shudhwatermelon_veg_120.jpeg"
        }
    ],
    "keyFeatures" : [],
    "features" : [
        {
            "key" : "Type",
            "val" : "Veg"
        },
        {
            "key" : "Ingradians1",
            "val" : "Watermelon"
        }
    ],
    "category" : {
        "active" : true,
        "slug" : "drinks",
        "__v" : 0,
        "parentCategory" : 2,
        "category" : 900,
        "name" : "Drinks",
        "_id" : "560774dad4124c770bfc4b74"
    },
    "__v" : 0
},{
    "_id" : "5607a6af0dc20f1b0366530b",
    "name" : "Cuban Cold Coffee - The superpower of the best coffee on earth contained in a bottle (300ml)",
    "info" : "The superpower of the best coffee on earth contained in a bottle. Wakes you up, keeps you going and tastes delicious - what more could a coffee lover want?",
    "brand" : {
        "active" : true,
        "__v" : 0,
        "slug" : "alleviater",
        "info" : "Alleviater",
        "name" : "Alleviater",
        "_id" : "5607c5c1dddfb6780c5bddf8"
    },
    "nameLower" : "Cuban Cold Coffee - The superpower of the best coffee on earth contained in a bottle (300ml)",
    "active" : true,
    "sku" : 5,
    "type" : "Veg",
    "slug" : "Cuban Cold Coffee - The superpower of the best coffee on earth contained in a bottle (300ml)",
    "variants" : [
        {
            "mrp" : 2.5,
            "price" : 2.5,
            "size" : "5",
            "weight" : "100g",
            "image" : "drink_cubancoldcoffee_veg_120.jpeg"
        }
    ],
    "keyFeatures" : [],
    "features" : [
        {
            "key" : "Type",
            "val" : "Veg"
        },
        {
            "key" : "Ingradians1",
            "val" : "Coffee"
        }
    ],
    "category" : {
        "active" : true,
        "slug" : "drinks",
        "__v" : 0,
        "parentCategory" : 2,
        "category" : 900,
        "name" : "Drinks",
        "_id" : "560774dad4124c770bfc4b74"
    },
    "__v" : 0
},{
    "_id" : "5607a6af0dc20f1b0366530c",
    "name" : "Turbo Charger - The classic lemonade with a modern minty twist (300ml)",
    "info" : "The classic lemonade with a modern minty twist. Packed with zesty lemon, fresh mint leavesand caspian sea salt, this one quenches your thirst in the freshest way possible.",
    "brand" : {
        "active" : true,
        "__v" : 0,
        "slug" : "alleviater",
        "info" : "Alleviater",
        "name" : "Alleviater",
        "_id" : "5607c5c1dddfb6780c5bddf8"
    },
    "nameLower" : "Turbo Charger - The classic lemonade with a modern minty twist (300ml)",
    "active" : true,
    "sku" : 5,
    "type" : "Veg",
    "slug" : "Turbo Charger - The classic lemonade with a modern minty twist (300ml)",
    "variants" : [
        {
            "mrp" : 2,
            "price" : 2,
            "size" : "5",
            "weight" : "100g",
            "image" : "drinks_turbocharger_veg_100.jpeg"
        }
    ],
    "keyFeatures" : [],
    "features" : [
        {
            "key" : "Type",
            "val" : "Veg"
        },
        {
            "key" : "Ingradians1",
            "val" : "Lemonade"
        }
    ],
    "category" : {
        "active" : true,
        "slug" : "drinks",
        "__v" : 0,
        "parentCategory" : 2,
        "category" : 900,
        "name" : "Drinks",
        "_id" : "560774dad4124c770bfc4b74"
    },
    "__v" : 0
},			
 function() {
        console.log('finished populating products');
    });
  }
});

Category.find(function (err, data) {
  if(data.length < 1){
    Category.create({
    "_id" : "560773abd4124c770bfc4b57",
    "name" : "Bread & Rice",
    "category" : 1,
    "parentCategory" : 0,
    "active" : true,
    "__v" : 0,
    "slug" : "Bread_Rice"
  },{
      "_id" : "560773b6d4124c770bfc4b58",
      "name" : "Snacks & Desserts",
      "category" : 2,
      "parentCategory" : 0,
      "active" : true,
      "__v" : 0,
      "slug" : "Snacks_Desserts"
  },{
      "_id" : "560773d2d4124c770bfc4b59",
      "name" : "Paninis",
      "category" : 100,
      "parentCategory" : 1,
      "active" : true,
      "__v" : 0,
      "slug" : "paninis"
  },{
      "_id" : "560773d2d4124c770bfc4b60",
      "name" : "Combos",
      "category" : 200,
      "parentCategory" : 1,
      "active" : true,
      "__v" : 0,
      "slug" : "combos"
  },{
      "_id" : "560773d2d4124c770bfc4b61",
      "name" : "Mains",
      "category" : 300,
      "parentCategory" : 1,
      "active" : true,
      "__v" : 0,
      "slug" : "mains"
  },{
      "_id" : "560773d2d4124c770bfc4b62",
      "name" : "Biryanis",
      "category" : 400,
      "parentCategory" : 1,
      "active" : true,
      "__v" : 0,
      "slug" : "biryanis"
  },{
      "_id" : "560774dad4124c770bfc4b70",
      "name" : "Snacks",
      "category" : 500,
      "parentCategory" : 2,
      "active" : true,
      "__v" : 0,
      "slug" : "snacks"
  },{
      "_id" : "560774dad4124c770bfc4b71",
      "name" : "Ice Creams",
      "category" : 600,
      "parentCategory" : 2,
      "active" : true,
      "__v" : 0,
      "slug" : "icecreams"
  },{
      "_id" : "560774dad4124c770bfc4b72",
      "name" : "Desserts",
      "category" : 700,
      "parentCategory" : 2,
      "active" : true,
      "__v" : 0,
      "slug" : "desserts"
  },{
      "_id" : "560774dad4124c770bfc4b73",
      "name" : "Cakes",
      "category" : 800,
      "parentCategory" : 2,
      "active" : true,
      "__v" : 0,
      "slug" : "cakes"
  },{
      "_id" : "560774dad4124c770bfc4b74",
      "name" : "Drinks",
      "category" : 900,
      "parentCategory" : 2,
      "active" : true,
      "__v" : 0,
      "slug" : "drinks"
  }, function() {
        console.log('finished populating categories');
    });
  }
});

Brand.find(function (err, data) {
  if(data.length < 1){
    Brand.create({
    "_id" : "5607c58bdddfb6780c5bddf3",
    "name" : "Estelle",
    "info" : "Estelle",
    "slug" : "estelle",
    "active" : true,
    "__v" : 0
}, {
    "_id" : "5607c599dddfb6780c5bddf4",
    "name" : "FREECULTR",
    "info" : "FREECULTR",
    "slug" : "freecultr",
    "active" : true,
    "__v" : 0
},{
    "active" : true,
    "__v" : 0,
    "slug" : "alleviater",
    "info" : "Alleviater",
    "name" : "Alleviater",
    "_id" : "5607c5c1dddfb6780c5bddf8"
}, function() {
        console.log('finished populating brands');
    });
  }
});

Country.find(function (err, data) {
  if(data.length < 1){
    Country.create({"name":"Afghanistan","dial_code":"+93","code":"AF"},{"name":"Albania","dial_code":"+355","code":"AL"},{"name":"Algeria","dial_code":"+213","code":"DZ"},{"name":"AmericanSamoa","dial_code":"+1 684","code":"AS"},{"name":"Andorra","dial_code":"+376","code":"AD"},{"name":"Angola","dial_code":"+244","code":"AO"},{"name":"Anguilla","dial_code":"+1 264","code":"AI"},{"name":"Antarctica","dial_code":"+672","code":"AQ"},{"name":"Antigua and Barbuda","dial_code":"+1268","code":"AG"},{"name":"Argentina","dial_code":"+54","code":"AR"},{"name":"Armenia","dial_code":"+374","code":"AM"},{"name":"Aruba","dial_code":"+297","code":"AW"},{"name":"Australia","dial_code":"+61","code":"AU"},{"name":"Austria","dial_code":"+43","code":"AT"},{"name":"Azerbaijan","dial_code":"+994","code":"AZ"},{"name":"Bahamas","dial_code":"+1 242","code":"BS"},{"name":"Bahrain","dial_code":"+973","code":"BH"},{"name":"Bangladesh","dial_code":"+880","code":"BD"},{"name":"Barbados","dial_code":"+1 246","code":"BB"},{"name":"Belarus","dial_code":"+375","code":"BY"},{"name":"Belgium","dial_code":"+32","code":"BE"},{"name":"Belize","dial_code":"+501","code":"BZ"},{"name":"Benin","dial_code":"+229","code":"BJ"},{"name":"Bermuda","dial_code":"+1 441","code":"BM"},{"name":"Bhutan","dial_code":"+975","code":"BT"},{"name":"Bolivia, Plurinational State of","dial_code":"+591","code":"BO"},{"name":"Bosnia and Herzegovina","dial_code":"+387","code":"BA"},{"name":"Botswana","dial_code":"+267","code":"BW"},{"name":"Brazil","dial_code":"+55","code":"BR"},{"name":"British Indian Ocean Territory","dial_code":"+246","code":"IO"},{"name":"Brunei Darussalam","dial_code":"+673","code":"BN"},{"name":"Bulgaria","dial_code":"+359","code":"BG"},{"name":"Burkina Faso","dial_code":"+226","code":"BF"},{"name":"Burundi","dial_code":"+257","code":"BI"},{"name":"Cambodia","dial_code":"+855","code":"KH"},{"name":"Cameroon","dial_code":"+237","code":"CM"},{"name":"Canada","dial_code":"+1","code":"CA"},{"name":"Cape Verde","dial_code":"+238","code":"CV"},{"name":"Cayman Islands","dial_code":"+ 345","code":"KY"},{"name":"Central African Republic","dial_code":"+236","code":"CF"},{"name":"Chad","dial_code":"+235","code":"TD"},{"name":"Chile","dial_code":"+56","code":"CL"},{"name":"China","dial_code":"+86","code":"CN"},{"name":"Christmas Island","dial_code":"+61","code":"CX"},{"name":"Cocos (Keeling) Islands","dial_code":"+61","code":"CC"},{"name":"Colombia","dial_code":"+57","code":"CO"},{"name":"Comoros","dial_code":"+269","code":"KM"},{"name":"Congo","dial_code":"+242","code":"CG"},{"name":"Congo, The Democratic Republic of the","dial_code":"+243","code":"CD"},{"name":"Cook Islands","dial_code":"+682","code":"CK"},{"name":"Costa Rica","dial_code":"+506","code":"CR"},{"name":"Cote d'Ivoire","dial_code":"+225","code":"CI"},{"name":"Croatia","dial_code":"+385","code":"HR"},{"name":"Cuba","dial_code":"+53","code":"CU"},{"name":"Cyprus","dial_code":"+357","code":"CY"},{"name":"Czech Republic","dial_code":"+420","code":"CZ"},{"name":"Denmark","dial_code":"+45","code":"DK"},{"name":"Djibouti","dial_code":"+253","code":"DJ"},{"name":"Dominica","dial_code":"+1 767","code":"DM"},{"name":"Dominican Republic","dial_code":"+1 849","code":"DO"},{"name":"Ecuador","dial_code":"+593","code":"EC"},{"name":"Egypt","dial_code":"+20","code":"EG"},{"name":"El Salvador","dial_code":"+503","code":"SV"},{"name":"Equatorial Guinea","dial_code":"+240","code":"GQ"},{"name":"Eritrea","dial_code":"+291","code":"ER"},{"name":"Estonia","dial_code":"+372","code":"EE"},{"name":"Ethiopia","dial_code":"+251","code":"ET"},{"name":"Falkland Islands (Malvinas)","dial_code":"+500","code":"FK"},{"name":"Faroe Islands","dial_code":"+298","code":"FO"},{"name":"Fiji","dial_code":"+679","code":"FJ"},{"name":"Finland","dial_code":"+358","code":"FI"},{"name":"France","dial_code":"+33","code":"FR"},{"name":"French Guiana","dial_code":"+594","code":"GF"},{"name":"French Polynesia","dial_code":"+689","code":"PF"},{"name":"Gabon","dial_code":"+241","code":"GA"},{"name":"Gambia","dial_code":"+220","code":"GM"},{"name":"Georgia","dial_code":"+995","code":"GE"},{"name":"Germany","dial_code":"+49","code":"DE"},{"name":"Ghana","dial_code":"+233","code":"GH"},{"name":"Gibraltar","dial_code":"+350","code":"GI"},{"name":"Greece","dial_code":"+30","code":"GR"},{"name":"Greenland","dial_code":"+299","code":"GL"},{"name":"Grenada","dial_code":"+1 473","code":"GD"},{"name":"Guadeloupe","dial_code":"+590","code":"GP"},{"name":"Guam","dial_code":"+1 671","code":"GU"},{"name":"Guatemala","dial_code":"+502","code":"GT"},{"name":"Guernsey","dial_code":"+44","code":"GG"},{"name":"Guinea","dial_code":"+224","code":"GN"},{"name":"Guinea-Bissau","dial_code":"+245","code":"GW"},{"name":"Guyana","dial_code":"+595","code":"GY"},{"name":"Haiti","dial_code":"+509","code":"HT"},{"name":"Holy See (Vatican City State)","dial_code":"+379","code":"VA"},{"name":"Honduras","dial_code":"+504","code":"HN"},{"name":"Hong Kong","dial_code":"+852","code":"HK"},{"name":"Hungary","dial_code":"+36","code":"HU"},{"name":"Iceland","dial_code":"+354","code":"IS"},{"name":"India","dial_code":"+91","code":"IN"},{"name":"Indonesia","dial_code":"+62","code":"ID"},{"name":"Iran, Islamic Republic of","dial_code":"+98","code":"IR"},{"name":"Iraq","dial_code":"+964","code":"IQ"},{"name":"Ireland","dial_code":"+353","code":"IE"},{"name":"Isle of Man","dial_code":"+44","code":"IM"},{"name":"Israel","dial_code":"+972","code":"IL"},{"name":"Italy","dial_code":"+39","code":"IT"},{"name":"Jamaica","dial_code":"+1 876","code":"JM"},{"name":"Japan","dial_code":"+81","code":"JP"},{"name":"Jersey","dial_code":"+44","code":"JE"},{"name":"Jordan","dial_code":"+962","code":"JO"},{"name":"Kazakhstan","dial_code":"+7 7","code":"KZ"},{"name":"Kenya","dial_code":"+254","code":"KE"},{"name":"Kiribati","dial_code":"+686","code":"KI"},{"name":"Korea, Democratic People's Republic of","dial_code":"+850","code":"KP"},{"name":"Korea, Republic of","dial_code":"+82","code":"KR"},{"name":"Kuwait","dial_code":"+965","code":"KW"},{"name":"Kyrgyzstan","dial_code":"+996","code":"KG"},{"name":"Lao People's Democratic Republic","dial_code":"+856","code":"LA"},{"name":"Latvia","dial_code":"+371","code":"LV"},{"name":"Lebanon","dial_code":"+961","code":"LB"},{"name":"Lesotho","dial_code":"+266","code":"LS"},{"name":"Liberia","dial_code":"+231","code":"LR"},{"name":"Libyan Arab Jamahiriya","dial_code":"+218","code":"LY"},{"name":"Liechtenstein","dial_code":"+423","code":"LI"},{"name":"Lithuania","dial_code":"+370","code":"LT"},{"name":"Luxembourg","dial_code":"+352","code":"LU"},{"name":"Macao","dial_code":"+853","code":"MO"},{"name":"Macedonia, The Former Yugoslav Republic of","dial_code":"+389","code":"MK"},{"name":"Madagascar","dial_code":"+261","code":"MG"},{"name":"Malawi","dial_code":"+265","code":"MW"},{"name":"Malaysia","dial_code":"+60","code":"MY"},{"name":"Maldives","dial_code":"+960","code":"MV"},{"name":"Mali","dial_code":"+223","code":"ML"},{"name":"Malta","dial_code":"+356","code":"MT"},{"name":"Marshall Islands","dial_code":"+692","code":"MH"},{"name":"Martinique","dial_code":"+596","code":"MQ"},{"name":"Mauritania","dial_code":"+222","code":"MR"},{"name":"Mauritius","dial_code":"+230","code":"MU"},{"name":"Mayotte","dial_code":"+262","code":"YT"},{"name":"Mexico","dial_code":"+52","code":"MX"},{"name":"Micronesia, Federated States of","dial_code":"+691","code":"FM"},{"name":"Moldova, Republic of","dial_code":"+373","code":"MD"},{"name":"Monaco","dial_code":"+377","code":"MC"},{"name":"Mongolia","dial_code":"+976","code":"MN"},{"name":"Montenegro","dial_code":"+382","code":"ME"},{"name":"Montserrat","dial_code":"+1664","code":"MS"},{"name":"Morocco","dial_code":"+212","code":"MA"},{"name":"Mozambique","dial_code":"+258","code":"MZ"},{"name":"Myanmar","dial_code":"+95","code":"MM"},{"name":"Namibia","dial_code":"+264","code":"NA"},{"name":"Nauru","dial_code":"+674","code":"NR"},{"name":"Nepal","dial_code":"+977","code":"NP"},{"name":"Netherlands","dial_code":"+31","code":"NL"},{"name":"Netherlands Antilles","dial_code":"+599","code":"AN"},{"name":"New Caledonia","dial_code":"+687","code":"NC"},{"name":"New Zealand","dial_code":"+64","code":"NZ"},{"name":"Nicaragua","dial_code":"+505","code":"NI"},{"name":"Niger","dial_code":"+227","code":"NE"},{"name":"Nigeria","dial_code":"+234","code":"NG"},{"name":"Niue","dial_code":"+683","code":"NU"},{"name":"Norfolk Island","dial_code":"+672","code":"NF"},{"name":"Northern Mariana Islands","dial_code":"+1 670","code":"MP"},{"name":"Norway","dial_code":"+47","code":"NO"},{"name":"Oman","dial_code":"+968","code":"OM"},{"name":"Pakistan","dial_code":"+92","code":"PK"},{"name":"Palau","dial_code":"+680","code":"PW"},{"name":"Palestinian Territory, Occupied","dial_code":"+970","code":"PS"},{"name":"Panama","dial_code":"+507","code":"PA"},{"name":"Papua New Guinea","dial_code":"+675","code":"PG"},{"name":"Paraguay","dial_code":"+595","code":"PY"},{"name":"Peru","dial_code":"+51","code":"PE"},{"name":"Philippines","dial_code":"+63","code":"PH"},{"name":"Pitcairn","dial_code":"+872","code":"PN"},{"name":"Poland","dial_code":"+48","code":"PL"},{"name":"Portugal","dial_code":"+351","code":"PT"},{"name":"Puerto Rico","dial_code":"+1 939","code":"PR"},{"name":"Qatar","dial_code":"+974","code":"QA"},{"name":"Romania","dial_code":"+40","code":"RO"},{"name":"Russia","dial_code":"+7","code":"RU"},{"name":"Rwanda","dial_code":"+250","code":"RW"},{"name":"Réunion","dial_code":"+262","code":"RE"},{"name":"Saint Barthélemy","dial_code":"+590","code":"BL"},{"name":"Saint Helena, Ascension and Tristan Da Cunha","dial_code":"+290","code":"SH"},{"name":"Saint Kitts and Nevis","dial_code":"+1 869","code":"KN"},{"name":"Saint Lucia","dial_code":"+1 758","code":"LC"},{"name":"Saint Martin","dial_code":"+590","code":"MF"},{"name":"Saint Pierre and Miquelon","dial_code":"+508","code":"PM"},{"name":"Saint Vincent and the Grenadines","dial_code":"+1 784","code":"VC"},{"name":"Samoa","dial_code":"+685","code":"WS"},{"name":"San Marino","dial_code":"+378","code":"SM"},{"name":"Sao Tome and Principe","dial_code":"+239","code":"ST"},{"name":"Saudi Arabia","dial_code":"+966","code":"SA"},{"name":"Senegal","dial_code":"+221","code":"SN"},{"name":"Serbia","dial_code":"+381","code":"RS"},{"name":"Seychelles","dial_code":"+248","code":"SC"},{"name":"Sierra Leone","dial_code":"+232","code":"SL"},{"name":"Singapore","dial_code":"+65","code":"SG"},{"name":"Slovakia","dial_code":"+421","code":"SK"},{"name":"Slovenia","dial_code":"+386","code":"SI"},{"name":"Solomon Islands","dial_code":"+677","code":"SB"},{"name":"Somalia","dial_code":"+252","code":"SO"},{"name":"South Africa","dial_code":"+27","code":"ZA"},{"name":"South Georgia and the South Sandwich Islands","dial_code":"+500","code":"GS"},{"name":"Spain","dial_code":"+34","code":"ES"},{"name":"Sri Lanka","dial_code":"+94","code":"LK"},{"name":"Sudan","dial_code":"+249","code":"SD"},{"name":"Suriname","dial_code":"+597","code":"SR"},{"name":"Svalbard and Jan Mayen","dial_code":"+47","code":"SJ"},{"name":"Swaziland","dial_code":"+268","code":"SZ"},{"name":"Sweden","dial_code":"+46","code":"SE"},{"name":"Switzerland","dial_code":"+41","code":"CH"},{"name":"Syrian Arab Republic","dial_code":"+963","code":"SY"},{"name":"Taiwan","dial_code":"+886","code":"TW"},{"name":"Tajikistan","dial_code":"+992","code":"TJ"},{"name":"Tanzania, United Republic of","dial_code":"+255","code":"TZ"},{"name":"Thailand","dial_code":"+66","code":"TH"},{"name":"Timor-Leste","dial_code":"+670","code":"TL"},{"name":"Togo","dial_code":"+228","code":"TG"},{"name":"Tokelau","dial_code":"+690","code":"TK"},{"name":"Tonga","dial_code":"+676","code":"TO"},{"name":"Trinidad and Tobago","dial_code":"+1 868","code":"TT"},{"name":"Tunisia","dial_code":"+216","code":"TN"},{"name":"Turkey","dial_code":"+90","code":"TR"},{"name":"Turkmenistan","dial_code":"+993","code":"TM"},{"name":"Turks and Caicos Islands","dial_code":"+1 649","code":"TC"},{"name":"Tuvalu","dial_code":"+688","code":"TV"},{"name":"Uganda","dial_code":"+256","code":"UG"},{"name":"Ukraine","dial_code":"+380","code":"UA"},{"name":"United Arab Emirates","dial_code":"+971","code":"AE"},{"name":"United Kingdom","dial_code":"+44","code":"GB"},{"name":"United States","dial_code":"+1","code":"US"},{"name":"Uruguay","dial_code":"+598","code":"UY"},{"name":"Uzbekistan","dial_code":"+998","code":"UZ"},{"name":"Vanuatu","dial_code":"+678","code":"VU"},{"name":"Venezuela, Bolivarian Republic of","dial_code":"+58","code":"VE"},{"name":"Viet Nam","dial_code":"+84","code":"VN"},{"name":"Virgin Islands, British","dial_code":"+1 284","code":"VG"},{"name":"Virgin Islands, U.S.","dial_code":"+1 340","code":"VI"},{"name":"Wallis and Futuna","dial_code":"+681","code":"WF"},{"name":"Yemen","dial_code":"+967","code":"YE"},{"name":"Zambia","dial_code":"+260","code":"ZM"},{"name":"Zimbabwe","dial_code":"+263","code":"ZW"},{"name":"Aland Islands","dial_code":"+358","code":"AX"}, function() {
        console.log('finished populating countries');
    });
  }
});

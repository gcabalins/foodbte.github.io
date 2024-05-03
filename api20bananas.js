
  var settings = {
    "url": "https://api.20bananas.com/clientes/",
    "method": "PUT",
    "timeout": 0,
    "headers": {
      "apikey": "f602b62f79dacb124709251d157c8915",
      "Content-Type": "application/json"
    },
    "data": JSON.stringify([
      {
        "codcliente": "666",
        "codcomercial": "23"
      }
    ]),
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });
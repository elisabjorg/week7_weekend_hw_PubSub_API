const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const PunkApi = function () {
  this.punkApi = [];
};

PunkApi.prototype.getData = function() {
  const request = new RequestHelper('https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_gt=6');
  request.get()
  .then((data) => {
  this.data = data;
  PubSub.publish('Punkapi:punkapi-ready', this.data);
  console.log(data);
});
};

module.exports = PunkApi;

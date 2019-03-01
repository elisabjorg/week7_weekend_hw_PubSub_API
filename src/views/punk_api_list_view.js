const PubSub = require('../helpers/pub_sub.js');
const PunkApiDetailView = require('./punk_api_detail_view.js');


const PunkApiListView = function (container) {
  this.container = container;
};

PunkApiListView.prototype.bindEvents = function () {
  PubSub.subscribe('Punkapi:punkapi-ready', (evt) => {
    this.renderApiDetailViews(evt.detail);
  });
};

PunkApiListView.prototype.renderApiDetailViews = function (apis) {
  apis.forEach((api) => {
    const apiItem = this.createApiListItem(api);
    this.container.appendChild(apiItem);
  });
};

PunkApiListView.prototype.createApiListItem = function (api) {
  const apiDetailView = new PunkApiDetailView();
  const apiDetail = apiDetailView.createApiDetail(api);
  return apiDetail;
  // console.log('hi', apiDetailView);
};

module.exports = PunkApiListView;

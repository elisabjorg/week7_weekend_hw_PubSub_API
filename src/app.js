const PunkApi = require('./models/punk_api.js');
const PunkApiListView = require('./views/punk_api_list_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const listContainer = document.querySelector('#api-list');
  const apiListView = new PunkApiListView(listContainer);
  apiListView.bindEvents();

  const punkApi = new PunkApi();
  punkApi.getData();


});

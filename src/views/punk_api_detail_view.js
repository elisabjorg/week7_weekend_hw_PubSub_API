const PunkApiDetailView = function () {};

PunkApiDetailView.prototype.createApiDetail = function (api) {
  const apiDetail = document.createElement('div');
  apiDetail.classList.add('api-detail');

  const name = document.createElement('h2');
  name.textContent = api.name;
  apiDetail.appendChild(name);

  const description = document.createElement('h4');
  description.textContent = (`Description: ${api.description}`);
  apiDetail.appendChild(description);

  const detailList = document.createElement('ul');
  const tagline = this.createDetailListItem('Tagline', api.tagline);
  detailList.appendChild(tagline);

  const firstbrewed = this.createDetailListItem('First brewed', api.first_brewed);
  detailList.appendChild(firstbrewed);

  const image = document.createElement('img');
  image.classList.add('medium-image');
  image.src = api.image_url;
  detailList.appendChild(image);

  apiDetail.appendChild(detailList);
  return apiDetail;
};

PunkApiDetailView.prototype.createDetailListItem = function (label, property) {
  const element = document.createElement('li');
  element.textContent = `${label}: ${property}`;
  return element;
}

module.exports = PunkApiDetailView;

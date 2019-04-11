const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Mountain = function(){
  this.mountains = null;
};

Mountain.prototype.bindEvents = function(){
  PubSub.subscribe('SelectView:change', (evt) => {
    const selectedRegion = evt.detail;
    this.publishRegionDetails(selectedRegion);
  });
};

Mountain.prototype.publishRegionDetails = function(selectedRegion){
  const region = this.mountains;
  PubSub.publish('selectedRegion:data', selectedRegion)
};

Mountain.prototype.getData = function(mountains){
  const url = `https://munroapi.herokuapp.com/munros`;
    const request = new Request(url);
    request.get()
    .then((mountains) => {
      this.mountains = mountains;
      PubSub.publish('Mountains:mountains-ready', this.mountains);
    })
    .catch((err) => {
      PubSub.publish('Mountains:error', err)
  });
};

module.exports = Mountain;

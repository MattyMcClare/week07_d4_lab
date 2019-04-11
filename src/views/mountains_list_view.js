const PubSub = require('../helpers/pub_sub.js');
const MountainView = require('./mountain_view.js')

const MountainsListView = function (container){
  this.container = container;
};

MountainsListView.prototype.bindEvents = function(){
  PubSub.subscribe('Mountains:mountains-ready', (evt) =>{
    this.mountains = evt.detail;
    this.render();
  });
  PubSub.subscribe('selectedRegion:data', (evt) => {
    this.region = evt.detail;
    this.render();
  });
};

MountainsListView.prototype.render = function(){
  this.mountains.forEach((mountain) => {
    const mountainView = new MountainView(this.container, mountain);
    mountainView.render();
  });
};

module.exports = MountainsListView;

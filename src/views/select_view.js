const PubSub = require('../helpers/pub_sub.js');
const MountainView = require('./mountain_view.js');

const SelectView = function(element, mountains){
  this.element = element;
  this.mountains = [];
};

SelectView.prototype.bindEvents = function(){
  PubSub.subscribe('Mountains:mountains-ready', (evt) => {
    const mountainsByRegion = evt.detail;
    this.populate(mountainsByRegion);
  });
  this.element.addEventListener('change', (evt) => {
    const mountainRegion = evt.target.value;
    console.log(mountainRegion);
    PubSub.publish('SelectView:change', mountainRegion);
  });
};

SelectView.prototype.populate = function(mountains){
  mountains.forEach(mountain, index) => {
    const option = document.createElement('option');
    option.textContent = mountain;
    option.value = index;
    this.element.appendChild(option);
};

module.exports = SelectView;

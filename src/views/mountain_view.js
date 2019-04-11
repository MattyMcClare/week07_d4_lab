const MountainView = function(container, mountain){
  this.mountainsContainer = container;
  this.mountain = mountain;
};

MountainView.prototype.render = function(){
  const mountainContainer = document.createElement('div');
  mountainContainer.classList.add('mountain');

  const name = this.createMountainHeading();
  mountainContainer.appendChild(name);

  const detailList = this.createDetailList();
  mountainContainer.appendChild(detailList);

  this.mountainsContainer.appendChild(mountainContainer);
};


MountainView.prototype.createMountainHeading = function(){
  const name = document.createElement('h3');
  name.classList.add('mountain-name');

  name.textContent = this.mountain.name;
  return name;
};

MountainView.prototype.createDetailList = function(){
  const detailList = document.createElement('ul');
  detailList.classList.add('mountain');
  this.populateList(detailList);
  return detailList;
};

MountainView.prototype.populateList = function(list){
  const height = document.createElement('li');
    height.textContent = `Height: ${this.mountain.height}`;
    list.appendChild(height);

    const region = document.createElement('li');
      region.textContent = `Region: ${this.mountain.region}`;
      list.appendChild(region);
};


module.exports = MountainView;

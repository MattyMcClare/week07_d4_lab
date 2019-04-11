const Mountain = require('./models/mountains.js');
const MountainsListView = require('./views/mountains_list_view.js');
const SelectView = require('./views/select_view.js');


document.addEventListener('DOMContentLoaded', () =>  {
  const mountainsListContainer = document.querySelector('#list');
  const mountainsListView = new MountainsListView(mountainsListContainer);
  mountainsListView.bindEvents();
  const selectDropdown = document.querySelector('#region');
  const selectView = new SelectView(selectDropdown);
  selectView.bindEvents();
  
  const mountain = new Mountain();
  mountain.getData();
});

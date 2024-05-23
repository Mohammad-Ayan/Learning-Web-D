const availableList = document.getElementById('availableList');
const selectedList = document.getElementById('selectedList');
const addSelectedBtn = document.getElementById('addSelected');
const removeSelectedBtn = document.getElementById('removeSelected');

addSelectedBtn.addEventListener('click', function() {
  const selectedItems = availableList.querySelectorAll('li.selected');
  selectedItems.forEach(item => {
    const newItem = document.createElement('li');
    newItem.textContent = item.textContent;
    newItem.dataset.value = item.dataset.value;
    selectedList.appendChild(newItem);
    item.classList.remove('selected');
  });
});

removeSelectedBtn.addEventListener('click', function() {
  const selectedItems = selectedList.querySelectorAll('li.selected');
  selectedItems.forEach(item => {
    item.remove();
  });
});

availableList.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('selected');
  }
});

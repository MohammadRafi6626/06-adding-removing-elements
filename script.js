// Get references to the form, input, and list elements
const form = document.querySelector('#form');
const input = document.querySelector('#item-input');
const list = document.querySelector('#list');

// Listen for the form's submit event
form.addEventListener('submit', function(event) {
  // Prevent the page from reloading
  event.preventDefault();

  // Get the value the user typed
  const itemText = input.value.trim();

  // Only add if the input is not empty
  if (itemText !== '') {
    // Create a new list item element
    const li = document.createElement('li');

    // Create a span to hold the item text
    const span = document.createElement('span');
    span.textContent = itemText;
    li.appendChild(span);

    // Create a delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    // Add a trash icon using Font Awesome
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';

    // Listen for clicks on the delete button
    deleteBtn.addEventListener('click', function() {
      // Remove the list item from the list
      list.removeChild(li);
    });

    // Add the delete button to the list item
    li.appendChild(deleteBtn);

    // Add the new item to the list
    list.appendChild(li);

    // Clear the input box
    input.value = '';
    // Optionally, focus the input for the next entry
    input.focus();
  }
});

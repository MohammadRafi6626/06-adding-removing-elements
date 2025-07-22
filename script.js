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
    // Set the text of the list item
    li.textContent = itemText;
    // Add the new item to the list
    list.appendChild(li);
    // Clear the input box
    input.value = '';
    // Optionally, focus the input for the next entry
    input.focus();
  }
});

function addtasks() {
    let task = document.getElementById('taskbtn').value;
  
    // Create a new div element for the task
    let newTask = document.createElement('div');
  
    // Add the 'task' class to the new div element
    newTask.classList.add('task');
  
    // Create a new span element for the task text
    let newTaskText = document.createElement('span');
  
    // Add the 'task-text' class to the span element
    newTaskText.classList.add('task-text');
  
    // Set the text content of the span element to the task value
    newTaskText.textContent = task;
  
    // Append the span element to the new div element
    newTask.appendChild(newTaskText);
  
    // Create a new button element for the div
    let newButton = document.createElement('button');
  
    // Add the 'task-btn' class to the button element
    newButton.classList.add('del-btn');
  
    // Set the text content of the button element
    newButton.textContent = 'Delete';
  
    // Attach an event listener to the delete button
    newButton.addEventListener('click', function() {
      // Remove the parent div of the delete button
      newButton.parentElement.remove();
    });
  
    // Append the button element to the new div element
    newTask.appendChild(newButton);
  
    // Get the otherTasks div and append the new div element to it
    let otherTasksDiv = document.querySelector('.otherTasks');
    otherTasksDiv.appendChild(newTask);
  
    // Clear the input field
    document.getElementById('taskbtn').value = '';
}

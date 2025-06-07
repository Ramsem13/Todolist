let addbtn = document.getElementById('add-btn');
const taskinput = document.getElementById('task-input');

addbtn.addEventListener('click', addTask);

function addTask() {
    const tasktxt = taskinput.value.trim(); // Get the value inside the function
    
    if(tasktxt) {
        const taskList = document.getElementById("task-list");
        const li = document.createElement('li');
        li.innerHTML = `${tasktxt}
        <button class="dlt-btn">Delete</button>`; // Changed id to class since multiple buttons will exist
        taskList.appendChild(li);
        taskinput.value = '';
        
        // Add event listener to the new delete button
        li.querySelector('.dlt-btn').addEventListener('click', function() {
            li.remove();
        });
    }
}
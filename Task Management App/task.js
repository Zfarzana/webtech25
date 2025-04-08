// Select input fields and task list
const quickInput = document.getElementById('quickInput');
const detailedForm = document.getElementById('detailedForm');
const taskList = document.getElementById('taskList');
const voiceInput = document.getElementById('voiceInput');

// Handle Quick Add (Enter key)
quickInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    const task = quickInput.value.trim();
    if (task) {
      addTask(task);
      quickInput.value = '';
    }
  }
});

// Handle Detailed Task Form
detailedForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('taskName').value.trim();
  const desc = document.getElementById('taskDesc').value.trim();
  const label = document.getElementById('taskLabel').value.trim();
  const date = document.getElementById('taskDate').value;

  if (name) {
    let taskText = name;
    if (desc) taskText += ` - ${desc}`;
    if (label) taskText += ` [${label}]`;
    if (date) taskText += ` (Due: ${date})`;

    addTask(taskText);
    detailedForm.reset();
  }
});

// Handle Voice Input Simulation
function simulateVoiceInput() {
  const input = voiceInput.value.trim();
  if (input.toLowerCase().startsWith('add task:')) {
    const taskText = input.substring(9).trim();
    if (taskText) {
      addTask(taskText);
      voiceInput.value = '';
    }
  } else {
    alert('Please use "Add task: ..." format');
  }
}

// Add task to task list with delete option
function addTask(text) {
  const li = document.createElement('li');
  li.textContent = '📝 ' + text;

  const delBtn = document.createElement('button');
  delBtn.textContent = '❌';
  delBtn.style.marginLeft = '10px';
  delBtn.onclick = () => taskList.removeChild(li);

  li.appendChild(delBtn);
  taskList.appendChild(li);
}

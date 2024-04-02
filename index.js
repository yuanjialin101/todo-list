document.addEventListener("DOMContentLoaded", function() {
let button = document.querySelector('#button')

let tasks = JSON.parse(localStorage.getItem("tasks")) || ['']
console.log(tasks)

button.addEventListener('click' ,renderItems )

//functions 

function renderItems(){
  
    const input = document.querySelector('#new-task')
    const list = document.querySelector('#todo-list')
    if(tasks !== '' && input.value !== ''){
       tasks.push(input.value)
       
   console.log(tasks)



       const li = document.createElement("li");
       const checkbox = document.createElement("input");
       checkbox.type = "checkbox";
       checkbox.className = "todo-checkbox";
       const label = document.createElement("label");
       label.textContent = input.value.trim();
       const deleteButton = document.createElement("button");
       deleteButton.classList.add = 'remove_btn'
       deleteButton.textContent = "Delete";
       deleteButton.className = "delete-button";2
        deleteButton.addEventListener('click', ()=>{z
         tasks.splice()
        })
       
  
  
        setLocaleStorage()
  
       //append Items
       li.appendChild(checkbox);
      li.appendChild(label);
      li.appendChild(deleteButton);
      list.appendChild(li);
      input.value = ''
    
  }
  else{
    if(input.value === ''){
      alert('your Input field is empty')
    }
  }
}

//save to localstorage
function setLocaleStorage() {
 const data =  JSON.stringify(tasks)
  localStorage.setItem("tasks",data)

}

 
})
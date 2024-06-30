const todoList=[{
  name: 'make dinner',
  dueDate:'2022-12-22'},
  {
   name:'wash dishes',
  dueDate:'2022-12-23'}];
renderTodolist();

function renderTodolist(){
let todoListHTML='';

todoList.forEach((todoObj,index)=>{
  const{name, dueDate}=todoObj;
  const html=`
  <div>${name}</div>
   <div>${dueDate}</div>
  <button class="delete-todo-button js-delete-todo-button">Delete</button>
  `;
  todoListHTML+=html;

});

console.log(todoListHTML);
document.querySelector('.js-todo-list').innerHTML=todoListHTML;

document.querySelectorAll('.js-delete-todo-button').forEach((deleteButton,index)=>{
    deleteButton.addEventListener('click',()=>{
      todoList.splice(index,1);
      renderTodolist();
    });
  });

}



document.querySelector('.js-add-todo-button').addEventListener('click',()=>{
  addTodo();
})



function addTodo(){
  const inputElement= document.querySelector('.js-name-input');
  const name= inputElement.value;

  const dateInputelement=document.querySelector('.js-due-date-input');
  const dueDate=dateInputelement.value;

  console.log(name);

  todoList.push({
    //name:name,
    //dueDate:dueDate
    name,
    dueDate});
  console.log(todoList);

  inputElement.value='';

  renderTodolist();
}
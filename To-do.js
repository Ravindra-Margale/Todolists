 let todoList =[
    {item :'sahil',
    duedate:'4/2/2024'},
    {item :'ravi',
    duedate:'4/2/2024'},
    {item :'vishal',
    duedate:'4/2/2024',}];
 displayItem();
 
 function addTodo(){
    let inputElement= document.querySelector('#input-text');
    let dateElement= document.querySelector('#input-date');
    let todoItem= inputElement.value;
    let todoDate = dateElement.value;
    todoList.push({item:todoItem,duedate:todoDate});
    inputElement.value= '';
    dateElement.value= '';
    displayItem();
}
function displayItem(){
    let containerElement=document.querySelector('.todo-container');
    let newHtml='';
    for(let i= 0;i<todoList.length;i++){
        let Item=todoList[i].item;
        let duedate= todoList[i].duedate;
        newHtml+=`
        <span>${Item}</span>
        <span>${duedate}</span>
        <button class="btn-Delete"  onclick="todoList.splice(${i},1);
        displayItem();
        ">Delete</button> `; 
      
    }
    containerElement.innerHTML= newHtml;
}
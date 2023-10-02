const input = document.querySelector('input');
const addBtn =document.querySelector('.btn-add');
const ul = document.querySelector('ul');
const empty = document.querySelector('.empty');

addBtn.addEventListener('click', (e) => {
 e.preventDefault();
 
 const text = input.value; //toma el valor del input y lo guarda
    if(text !=='') {
        const li = document.createElement('li')
        const p = document.createElement('p')
        p.textContent =text;

        li.appendChild(p);
        li.appendChild(addDeleteBtn());
        ul.appendChild(li);

        input.value ="";
        empty.style.display ="none";

        const deleteAllBtn = document.querySelector('.btn-delete-all');

        deleteAllBtn.addEventListener('click', () => {
        // Elimina todas las tareas (elementos <li>) del <ul>
        const tasks = document.querySelectorAll('li');
        tasks.forEach(task => {
            ul.removeChild(task);
  });

  // Muestra el mensaje "Lista vacía"
  empty.style.display = 'block';
});
        
  }
});

function addDeleteBtn(){
    const deleteBtn = document.createElement('button');

    deleteBtn.textContent ="X";
    deleteBtn.className ="btn-delete";

    deleteBtn.addEventListener('click', (e) => {
        const item = e.target.parentElement;
        ul.removeChild(item)

        const items = document.querySelectorAll('li');
        
        if(items.length === 0) {
            empty.style.display = "block";
        }
    });
    return deleteBtn;
}


let input = document.getElementById('input')
let addBtn = document.getElementById('add')
let error = document.getElementById('error')
let todos = document.querySelector('.todos')
let main = document.querySelector('main')
let data = []
let count = 0
addBtn.addEventListener('click', () => {
    let todo = {}
    if (input.value !== '') {
        todo.task = input.value
        todo.id = count + 1
        count++
        todo.completed = false
        data.push(todo)
        display()
        input.value = ''
    } else {
        error.innerText = 'Please enter a task'
    }
})

function display() {
    todos.innerText = ''
    data.forEach((todo) => {
        let div = document.createElement('div')
        div.className = 'todo'
        let h2 = document.createElement('h2')
        h2.innerText = todo.task
        let btn1 = document.createElement('button')
        let btn2 = document.createElement('button')
        btn1.innerText = 'Delete'
        btn2.innerText = todo.completed ? 'Completed' : 'Inprogress'
        todo.completed ? h2.style.textDecoration = 'line-through' : h2.style.textDecoration = 'none'
        div.appendChild(h2)
        div.appendChild(btn1)
        div.appendChild(btn2)
        todos.appendChild(div)
        btn1.addEventListener('click', () => {
            data = data.filter(element => element.id !== todo.id)
            display()
        })
        btn2.addEventListener('click', () => {
            data = data.map(element => {
                if (element.id === todo.id) {
                    return { task: element.task, id: element.id, completed: !element.completed }
                } else {
                    return element
                }
            })
            display()
        })
    })
}



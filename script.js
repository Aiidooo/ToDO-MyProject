// нужно при нажатий на кнопку создать li и добавлять его (вместо с содержимим из инпута) в todoList

const todoInput = document.querySelector('#todoInput')
const todoButton = document.querySelector('#todoButton')
const todoUl = document.querySelector('#todoUl')

// Initial Render - Первичная отрисовка
render()

// Мое решение
todoButton.addEventListener('click', (event) => {
    event.preventDefault()

    addNewTaskToLS()

    // Re-render - Повторная отрисовка
    render()
})

function addNewTaskToLS() {
    const todoInputValue = todoInput.value.trim()

    // сохранить данные в Local Storage 
    const oldTasks = JSON.parse(localStorage.getItem('tasks') || '[]')
    oldTasks.push(todoInputValue)
    const updatedTasks = JSON.stringify(oldTasks)
    localStorage.setItem('tasks', updatedTasks)

    console.log(oldTasks)

    todoInput.value = ''
}

function removeTaskToLS(task) {
    const oldTasks = JSON.parse(localStorage.getItem('tasks') || '[]')
    const updatedTasks = JSON.stringify(oldTasks.filter(t => t !== task))
    localStorage.setItem('tasks', updatedTasks)
}

function render() {
    // Очистка списка
    // не стоит так делать
    todoUl.innerText = ''

    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]')
    tasks.forEach(task => {
        if (!task) {
            alert('un correct')
            return
        }

        // Создаем li
        const newLi = document.createElement('li')
        todoUl.appendChild(newLi)
        todoUl.prepend(newLi)

        // Создаем span
        const newSpan = document.createElement('span')
        newLi.append(newSpan)
        newSpan.innerText = task

        // Создаем button remove
        const removeButton = document.createElement('button')
        removeButton.classList.add('removeBtn')
        removeButton.innerText = 'Remove'
        removeButton.type = 'button'
        newLi.append(removeButton)

        // Удаление задачи из localStorage
        removeButton.addEventListener('click', () => {
            // alert('Oh shet')
            // newLi.remove()
            removeTaskToLS(task)

            render()
        })
    });
}

// 2-решение
// const removeButton = document.createElement('button')
// removeButton.innerText = 'remove task'
// // removeButton.style.background = 'red'
// // removeButton.style.padding = '10px'
// removeButton.classList.add('removeBTN') вместо верхнего можно использовать это
// document.body.appendChild(removeButton)


// 3-решение
// todoButton.addEventListener('click', (event) => {
//     event.preventDefault()

//     const taskText = todoInput.value.trim()

//     if (!taskText) {
//         alert('Please enter valid task')
//         return
//     }

//     // создаем пустой li
//     const li = document.createElement('li')
//     // li.innerText = taskText
//     todoUl.prepend(li)

//     // создаем span
//     const span = document.createElement('span')
//     span.innerText = taskText
//     li.appendChild(span)

//     // Кнопка удаление задачи
//     const removeBtn = document.createElement('button')
//     removeBtn.classList.add('removeBtn')
//     removeBtn.innerText = 'Remove'
//     li.appendChild(removeBtn)

//     removeBtn.addEventListener('click', () => {
//         li.remove()
//     })

//     todoInput.value = ''
// })


// Не работает
// const element = document.querySelectorAll('span');

// element.addEventListener('mouseenter', () => {
//   element.style.whiteSpace = 'normal';
// });

// element.addEventListener('mouseleave', () => {
//   element.style.whiteSpace = 'nowrap';
// });


// LocalStorage

// console.log(localStorage)
// console.log(localStorage.getItem('name'))

// localStorage.setItem('lesson', 'Javascript')
// console.log(localStorage.getItem('lesson'))

// localStorage.setItem('isOk', true)
// console.log(localStorage.getItem('isOk'))

// const task = ['Поиграть с другом', 'Отвести машину на мойку', 'Заказать продукты']
// const taskJSON = JSON.stringify(task)
// localStorage.setItem('task', taskJSON)
// console.log(JSON.parse(localStorage.getItem('task')))




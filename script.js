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
    oldTasks.push(
        {
            id: Date.now() + Math.random() * 100,
            text: todoInputValue,
            status: 'Working'
        }
    )
    const updatedTasks = JSON.stringify(oldTasks)
    localStorage.setItem('tasks', updatedTasks)

    console.log(oldTasks)

    todoInput.value = ''
}

function removeTaskToLS(task) {
    const oldTasks = JSON.parse(localStorage.getItem('tasks') || '[]')
    const updatedTasks = JSON.stringify(oldTasks.filter(t => t.id !== task.id))
    localStorage.setItem('tasks', updatedTasks)
}

function changeTaskStatus(task, newStatus) {
    const oldTasks = JSON.parse(localStorage.getItem('tasks') || '[]')
    const taskToUpdate = oldTasks.find(t => t.id === task.id)
    taskToUpdate.status = newStatus
    localStorage.setItem('tasks', JSON.stringify(oldTasks))
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
        newSpan.innerText = task.text

        // Создаем span для кнопок status и remove
        const newSpanBtn = document.createElement('span')
        newSpanBtn.classList.add('newSpanBtn')

        if (task.status === 'Working') {
            // Создаем button Working
            const workingBtn = document.createElement('button')
            workingBtn.classList.add('workingBtn')
            workingBtn.innerText = 'Working'
            workingBtn.type = 'button'

            workingBtn.addEventListener('click', () => {
                changeTaskStatus(task, 'Done')
                render()
            })
            newSpanBtn.append(workingBtn)
        }
        else if (task.status === 'Done') {
            // Создаем button done
            const doneBtn = document.createElement('button')
            doneBtn.classList.add('doneBtn')
            doneBtn.innerText = 'Done'
            doneBtn.type = 'button'

            doneBtn.addEventListener('click', () => {
                changeTaskStatus(task, 'Working')
                render()
            })
            newSpanBtn.append(doneBtn)
        }

        // Создаем button remove
        const removeButton = document.createElement('button')
        removeButton.classList.add('removeBtn')
        removeButton.innerText = 'Remove'
        removeButton.type = 'button'
        newSpanBtn.append(removeButton)

        newLi.appendChild(newSpanBtn)

        // Удаление задачи из localStorage
        removeButton.addEventListener('click', () => {
            // alert('Oh shet')
            // newLi.remove()
            removeTaskToLS(task)

            render()
        })
    });
}

console.log(localStorage)

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

// в верхнем фильтр выбирает по тексту и может удалить одинаковые задачи
// const task = ['Поиграть с другом', 'Отвести машину на мойку', 'Заказать продукты']

// в внизу фильтр вибирает по id. безопасный способ
// const task = [
//     {
//         id: 1,
//         text: 'Поиграть с другом'
//     }, {
//         id: 2,
//         text: 'Отвести машину на мойку',
//     }, {
//         id: 3,
//         text: 'Заказать продукты'
//     },
// ]

// const taskJSON = JSON.stringify(task)
// localStorage.setItem('task', taskJSON)
// console.log(JSON.parse(localStorage.getItem('task')))

// Дата прямо сейчас в милисекундах
// console.log(Date.now())


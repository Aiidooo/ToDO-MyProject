// нужно при нажатий на кнопку создать li и добавлять его (вместо с содержимим из инпута) в todoList

const todoInput = document.querySelector('#todoInput')
const todoButton = document.querySelector('#todoButton')
const todoUl = document.querySelector('#todoUl')

// Мое решение
function todoList() {
    const todoInputValue = todoInput.value.trim()

    if (!todoInputValue) {
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
    newSpan.innerText = todoInputValue

    // Создаем button remove
    const removeButton = document.createElement('button')
    removeButton.classList.add('removeBtn')
    removeButton.innerText = 'Remove'
    removeButton.type = 'button'
    newLi.append(removeButton)

    removeButton.addEventListener('click', () => {
        // alert('Oh shet')
        newLi.remove()
    })

    todoInput.value = '' 
}

todoButton.addEventListener('click', (event) => {
    event.preventDefault()
    todoList()    
})


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

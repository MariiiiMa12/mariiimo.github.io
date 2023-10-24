const classNames = {
    TODO_ITEM: 'todo-container',
    TODO_CHECKBOX: 'todo-checkbox',
    TODO_TEXT: 'todo-text',
    TODO_DELETE: 'todo-delete',
  }
  
  const list = document.getElementById('todo-list')
  const itemCountSpan = document.getElementById('item-count')
  const uncheckedCountSpan = document.getElementById('unchecked-count')
  
  function newTodo() {
    // Запит користувача на введення нової справи
    const todoText = prompt('Введіть нову справу', 'Нова справа')
  
    if (todoText) {
      // Створення нового елемента списку справи
      const todoItem = document.createElement('li')
      todoItem.className = classNames.TODO_ITEM
  
      // Створення чекбокса для справи
      const todoCheckbox = document.createElement('input')
      todoCheckbox.type = 'checkbox'
      todoCheckbox.className = classNames.TODO_CHECKBOX
  
      // Додавання обробника події для відстеження зміни стану чекбокса
      todoCheckbox.addEventListener('change', updateUncheckedCount)
  
      // Створення текстового вмісту справи
      const todoTextElement = document.createElement('span')
      todoTextElement.className = classNames.TODO_TEXT
      todoTextElement.textContent = todoText
  
      // Створення кнопки для видалення справи
      const todoDeleteButton = document.createElement('button')
      todoDeleteButton.className = classNames.TODO_DELETE
      todoDeleteButton.textContent = 'Видалити'
      todoDeleteButton.addEventListener('click', deleteTodo)
  
      // Додавання чекбокса, текстового вмісту та кнопки в елемент справи
      todoItem.appendChild(todoCheckbox)
      todoItem.appendChild(todoTextElement)
      todoItem.appendChild(todoDeleteButton)
  
      // Додавання елементу справи до списку справ
      list.appendChild(todoItem)
  
      // Оновлення загальної кількості справ
      itemCountSpan.textContent = list.children.length
  
      // Оновлення кількості незроблених справ
      updateUncheckedCount()
    }
  }
  
  function deleteTodo() {
    // Видалення справи та оновлення кількості справ
    const todoItem = this.parentElement
    list.removeChild(todoItem)
    itemCountSpan.textContent = list.children.length
  
    // Оновлення кількості незроблених справ
    updateUncheckedCount()
  }
  
  function updateUncheckedCount() {
    // Оновлення кількості незроблених справ
    const checkboxes = document.querySelectorAll(`.${classNames.TODO_CHECKBOX}`)
    let uncheckedCount = 0
  
    checkboxes.forEach(checkbox => {
      if (!checkbox.checked) {
        uncheckedCount++
      }
    })
  
    uncheckedCountSpan.textContent = uncheckedCount
  }
  
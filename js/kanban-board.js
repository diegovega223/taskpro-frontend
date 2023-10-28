document.addEventListener('DOMContentLoaded', function () {
  const selectElements = document.querySelectorAll('.input-project');

  selectElements.forEach((select) => {
      select.addEventListener('change', (event) => {
          const selectedValue = event.target.value;
          const taskCard = event.target.closest('.task-card');
          const kanbanBoard = document.querySelector('.kanban-board');
          const cardId = taskCard.id;
          taskCard.remove();
          kanbanBoard.querySelector(`.${selectedValue}`).appendChild(taskCard);
      });
  });
});

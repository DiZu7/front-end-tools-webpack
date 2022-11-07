import { onToggleTask } from './updateTask';
import { deleteTask, getTasksList } from './tasksGateway';
import { setItem } from './storage';
import { renderTasks } from './renderTask';

export const onListClick = (e) => {
  const isDeleteBtn = e.target.classList.contains('list-item__delete-btn');
  const taskId = e.target.dataset.id;
  if (isDeleteBtn) {
    deleteTask(taskId)
      .then(() => getTasksList())
      .then((newTasksList) => {
        setItem('tasksList', newTasksList);
        renderTasks();
      });
  }
  onToggleTask(e);
};

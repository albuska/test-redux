export const selectTasks = state => state.tasks.items;
export const selectIsLoading = state => state.tasks.isLoading;
export const selectError = state => state.tasks.error;
export const selectStatusFilter = state => state.filters.status;


// const selectTotalValue = state => {
//   const a = state.values.a;
//   const b = state.values.b;
//   return a + b;
// };

// ***************************************
// export const selectVisibleTasks = state => {
//   // Використовуємо інші селектори
//   const tasks = selectTasks(state);
//   const statusFilter = selectStatusFilter(state);
//   switch (statusFilter) {
//     case statusFilters.active:
//       return tasks.filter(task => !task.completed);
//     case statusFilters.completed:
//       return tasks.filter(task => task.completed);
//     default:
//       return tasks;
//   }
// };

const tasks = [
    {id: 234, title: 'Create user registration API', timeSpent: 4, category: 'Backend', type: 'task'},
    {id: 235, title: 'Create user registration UI', timeSpent: 8, category: 'Frontend', type: 'task'},
    {id: 237, title: 'User sign-in via Google UI', timeSpent: 3.5, category: 'Frontend', type: 'task'},
    {id: 238, title: 'User sign-in via Google API', timeSpent: 5, category: 'Backend', type: 'task'},
    {id: 241, title: 'Fix account linking', timeSpent: 5, category: 'Backend', type: 'bug'},
    {id: 250, title: 'Fix wrong time created on new record', timeSpent: 1, category: 'Backend', type: 'bug'},
    {id: 262, title: 'Fix sign-in failed messages', timeSpent: 2, category: 'Frontend', type: 'bug'},
];
let frontendHours = tasks.reduce((acc, task) => {
    if (task.category === 'Frontend'){
        acc += task.timeSpent;
    }
    return acc
}, 0);

let bugHours = tasks.reduce((acc,task) => {
   if (task.type === 'bug'){
       acc += task.timeSpent
   }
   return acc
},0);

let uiTasks = tasks.reduce((acc, task) => {
  if (task.title.includes('UI')){
      acc++
  }
  return acc
},0);

let frontendAndBackendTasks = tasks.reduce((acc,task) => {
    if (task.category === 'Frontend'){
        acc.Frontend++
    }
    if (task.category === 'Backend'){
        acc.Backend++
    }
    return acc
},{Frontend: 0, Backend: 0});

let fourHourTasks = tasks.reduce((acc, task) => {
    if (task.timeSpent > 4){
        acc.push({title: task.title, category: task.category})
    }
    return acc
},[]);
console.log(frontendHours);
console.log(bugHours);
console.log(uiTasks);
console.log(frontendAndBackendTasks);
console.log(fourHourTasks);
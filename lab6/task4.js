var todo = {
    title: 'Clean room',
    completed: false,
    createdAt: Date.now(),
};
var todosArray = [
    { title: 'Learn TypeScript', description: 'Study utility types', completed: false, createdAt: Date.now() },
    { title: 'Buy groceries', description: 'Eggs and bread', completed: true, createdAt: Date.now() },
];
todosArray.push({ title: 'New Todo', description: 'This will not work', completed: false, createdAt: Date.now() }); // Error

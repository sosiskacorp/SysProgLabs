interface Todo {
    title: string;
    description: string;
    completed: boolean;
    createdAt: number;
  }
  
  type TodoPreview = Omit<Todo, 'description'>;
  const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
    createdAt: Date.now(),
  };
  
  const todosArray: Readonly<Todo[]> = [
    { title: 'Learn TypeScript', description: 'Study utility types', completed: false, createdAt: Date.now() },
    { title: 'Buy groceries', description: 'Eggs and bread', completed: true, createdAt: Date.now() },
  ];
  

interface Todo {
    priority: number;
    description: string;
    done: boolean;
}

const todo: Partial<Todo> = {
    description: 'Todo 1',
    done: false
}

function updateTodo(updatedTodo: Pick<Todo, 'done'>) {
    return { ...todo, ...updatedTodo };
}

const updatedTodo = {
    done: true
}

console.log(updateTodo(updatedTodo));

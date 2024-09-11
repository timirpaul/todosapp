import { createContext, ReactNode, useState } from "react";

export type TodosProviderProps = {
  children: ReactNode;
};
export type Todo = {
  id: string;
  task: string;
  completed: boolean;
  createdAt: Date;
};
export type TodosContext = {
  todos: Todo[];
  handleAddtodo: (task: string) => void;
};

export const todosContext = createContext<TodosContext | null>(null);

export const TodosProvider = ({ children }: TodosProviderProps) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const handleAddTodo = (task) => {};
  return (
    <todosContext.Provider value={{ todo, handleAddTodo }}>
      {children}
    </todosContext.Provider>
  );
};

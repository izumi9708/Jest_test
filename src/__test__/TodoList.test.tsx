import { act, findAllByRole, findByRole, getByRole, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useEffect } from "react";
import ToDoList from "../TodoList ";

//1. コンポーネントが正しく初期化され、初期のタスクリストが空であることをテストしてください。
//2. 新しいタスクを追加すると、タスクリストにそのタスクが表示されることをテストしてください。
//3. タスクを削除すると、タスクリストからそのタスクが削除されることをテストしてください。

describe('TodoList Component Test',() => {
  // 1.
  it('Exist Initialize Component', async () => {
    render(<ToDoList />);
  
    const listItems = screen.getByRole('list');
    const childCount = listItems.children.length;

    expect(childCount).toBe(0);
  });

  // 2.
  it('shold be add list',async () => {
    render(<ToDoList />);

    const inputName = screen.getByPlaceholderText('New Task');
    const listItems = screen.getByRole('list');
    const initialCount = listItems.children.length;
    const addBtn = screen.getByText('Add Task');

    act(() => {
      userEvent.type(inputName,'タスク１');
      userEvent.click(addBtn);
    })

    await waitFor(() => {
      const clickCount = listItems.children.length;
      
      expect(clickCount).toBe(initialCount + 1);
    })
  })

  // 3.
  it('shold be delete task',async() => {
    render(<ToDoList />);

    const inputName = screen.getByPlaceholderText('New Task');
    const listItems = screen.getByRole('list');
    const addBtn = screen.getByText('Add Task');

    act(() => {
      userEvent.type(inputName,'タスク１');
      userEvent.click(addBtn);
    })

    const taskSetCount = listItems.children.length;

    await waitFor(() => {
      const deleteBtn = screen.getByText('Delete');

      act(() => {
        userEvent.click(deleteBtn);
      })
    })

    await waitFor(() => {
      const clickCount = listItems.children.length;

      expect(clickCount).toBe(taskSetCount - 1);
    })

  })
})
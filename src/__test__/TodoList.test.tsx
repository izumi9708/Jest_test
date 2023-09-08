import { act, findAllByRole, findByRole, getByRole, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ToDoList from "../TodoList ";

//1. コンポーネントが正しく初期化され、初期のタスクリストが空であることをテストしてください。
//2. 新しいタスクを追加すると、タスクリストにそのタスクが表示されることをテストしてください。
//3. タスクを削除すると、タスクリストからそのタスクが削除されることをテストしてください。
//4. 適切な型を持つプロパティと関数がコンポーネント内に存在することをTypeScriptの型チェックを使用して確認するテストを書いてください。

describe('TodoList Component Test',() => {
  // 1.
  it('Exist Initialize Conponent', async() => {
    render(<ToDoList/>);

    const listWrap = await screen.findByRole('ul');
  })
})
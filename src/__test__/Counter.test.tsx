import { getByRole, render, screen, waitFor } from "@testing-library/react";
import Counter from "../Counter/Counter";

// コンポーネントをテストするためのJestテストを書いてください。以下のテストケースを考慮してください。

// コンポーネントが正しく初期化され、初期値が表示されることをテストしてください。
// "Increment"ボタンをクリックすると、カウントが増加し、"Decrement"ボタンをクリックするとカウントが減少することをテストしてください。
// カウンターが負の値にならないことを確認するためのテストを書いてください。
// 適切な型を持つプロパティと関数がコンポーネント内に存在することをTypeScriptの型チェックを使用して確認してください。

describe('Test Counter Component',() => {
  // 1.
  it('Exist Initialize Number',async () => {
    const initialNum = 0;
    render(<Counter initialValue={initialNum}/>);

    await waitFor(() => {
      const elem = screen.getByText(`Count: ${initialNum}`);
      
      expect(elem).toBeInTheDocument();

    })
  })
})
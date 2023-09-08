import { act, getByRole, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "../Counter/Counter";

// コンポーネントをテストするためのJestテストを書いてください。以下のテストケースを考慮してください。

// 1.コンポーネントが正しく初期化され、初期値が表示されることをテストしてください。
// 2."Increment"ボタンをクリックすると、カウントが増加し、"Decrement"ボタンをクリックするとカウントが減少することをテストしてください。
// 3.カウンターが負の値にならないことを確認するためのテストを書いてください。
// 4.適切な型を持つプロパティと関数がコンポーネント内に存在することをTypeScriptの型チェックを使用して確認してください。

describe.skip('Test Counter Component',() => {
  // 1.
  it('Exist Initialize Number',async () => {
    const initialNum = 0;
    render(<Counter initialValue={initialNum}/>);

    await waitFor(() => {
      const elem = screen.getByText(`Count: ${initialNum}`);
      
      expect(elem).toBeInTheDocument();

    })
  })

  // 2.
  it('Click the Increment button to increase the count', async() => {
    const initialNum = 0;
    render(<Counter initialValue={initialNum}/>);

    const incrementBtn = screen.getByText('Increment');
    const elem = screen.getByText(`Count: ${initialNum}`);

    act(() => {
      userEvent.click(incrementBtn);
    })

    await waitFor(() => {
      expect(elem.textContent).toMatch(`Count: ${initialNum + 1}`);
    })

  })

  it('Click the Decrement button to increase the count', async() => {
    const initialNum = 1;
    render(<Counter initialValue={initialNum}/>);

    const decrementBtn = screen.getByText('Decrement');
    const elem = screen.getByText(`Count: ${initialNum}`);

    act(() => {
      userEvent.click(decrementBtn);
    })

    await waitFor(() => {
      expect(elem.textContent).toMatch(`Count: ${initialNum - 1}`);
    })

  })

  // 3.
  it('Counter shold a positive value', async () => {
    const initialNum = 1;
    render(<Counter initialValue={initialNum}/>);

    const decrementBtn = screen.getByText('Decrement');
    const elem = screen.getByText(`Count: ${initialNum}`);

    act(() => {
      userEvent.click(decrementBtn);
    })

    await waitFor(() => {
      const resultNum = Number(elem.textContent?.slice(-1));
      expect(resultNum).toBeGreaterThanOrEqual(0);
    })

  })
})
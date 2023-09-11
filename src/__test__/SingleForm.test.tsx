import { act, getByRole, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import SimpleForm from "../ SingleForm";
// import {SimpleForm} from "../ SingleForm";

// 1.コンポーネントが正しく初期化され、入力フィールドが空であることをテストしてください。
// 2.ユーザーがテキストを入力し、フォームを送信すると、入力された値が表示されることをテストしてください。

describe('SingleFrom Component Test',() => {
  // 1.
  it('shold be initialize component',() => {
    render(<SimpleForm/>);

    const input = screen.getByPlaceholderText('Enter something...');
    expect(input).toHaveTextContent('');
  })

  // 2.
  it('shold be send form after text',async() => {
    render(<SimpleForm/>);

    const input = screen.getByPlaceholderText('Enter something...');
    const button = screen.getByRole('button');
    const sendText = screen.getByText('Submitted Value:');

    act(() => {
      userEvent.type(input,'sample text');
      userEvent.click(button);
    })

    await waitFor(() => {
      expect(sendText).toHaveTextContent('Submitted Value: sample text');
    })

  })

})
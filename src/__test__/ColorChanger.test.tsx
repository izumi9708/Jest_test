import { act, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ColorChanger from "../ColorChanger/ColorChanger";

// 1.コンポーネントが正しく初期化され、初期のカラーが "red" で表示されることをテストしてください。
// 2."Change Color" ボタンをクリックすると、カラーが "red" から "blue" に変化し、テキストの色も変わることをテストしてください。
// 3.カラーが "blue" の状態で再び "Change Color" ボタンをクリックすると、カラーが "red" に戻り、テキストの色も変わることをテストしてください。

describe('ColorChanger Component Test',() => {
  // 1.
  it('shold be initialize text with red',() => {
    render(<ColorChanger/>);

    const heading = screen.getByRole('heading');
    expect(heading).toHaveTextContent('red');
  })

  // 2.
  it('shold be click btn with blue',() => {
    render(<ColorChanger/>);
    const changeBtn = screen.getByRole('button');

    act(() => {
      userEvent.click(changeBtn);
    })

    const heading = screen.getByRole('heading');
    expect(heading).toHaveTextContent('blue');
  })

  // 3.
  it('shold be click blue btn with red',async() => {
    render(<ColorChanger/>);
    const changeBtn = screen.getByRole('button');

    act(() => {
      userEvent.click(changeBtn);
    })

    await waitFor(() => {
      act(() => {
        userEvent.click(changeBtn);
      })

      const heading = screen.getByRole('heading');
      expect(heading).toHaveTextContent('red');
    })
    
  })

})
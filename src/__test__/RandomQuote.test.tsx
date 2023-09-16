import { render, screen, waitFor } from "@testing-library/react";
import ExternalDataComponent from "../RandomQuote/RandomQuote";
import {fetchData} from '../RandomQuote/fetchData';
import { act } from "react-dom/test-utils";

// 1.ExternalDataComponent コンポーネントの初期レンダリング時に "Loading..." メッセージが表示されることを確認するテストを書いてください。
// 2.ExternalDataComponent コンポーネントがデータを正しく取得し、データを表示していることを確認するテストを書いてください。
// 3.ExternalDataComponent コンポーネントがローディング状態からデータ表示状態に正しく切り替わることを確認するテストを書いてください。

jest.mock('../RandomQuote/fetchData');

describe('RanfomQuote Component Test',() => {
  // 1.
  it('shold be component rendering loading',async() => {
    //非同期処理の完了を待ち、ステートにデータが入る前の空の状態にする
    (fetchData as jest.Mock).mockResolvedValue([]);
  
    // ExternalDataComponent をレンダリング
    await waitFor(() => {
      act(() => {
        render(<ExternalDataComponent/>)
      })
    })
  
    // "Loading..." メッセージが表示されているか確認
    const loadingMessage = screen.getByText('Loading...');
    expect(loadingMessage).toBeInTheDocument();
  })
  // 2.
  it('should display response data', async () => {
    const res = [{ id: 1, name: 'a' }, { id: 2, name: 'b' }];
  
    const result = (fetchData as jest.Mock).mockResolvedValue(res);

    type Data = {
      id:number;
      name:string;
    }
    // await result().then((res:Data[]) => {
    //   // console.log(res)
    // })

    render(<ExternalDataComponent/>)
      
    await waitFor(() => {
      const list = screen.getAllByRole('listitem');
      
      list.forEach(item => expect(item).toBeInTheDocument())
    })
    
  
  });


  // 3.
  it('shold be change display',async() => {
    //非同期処理の完了を待ち、ステートにデータが入る前の空の状態にする
    (fetchData as jest.Mock).mockResolvedValue([]);
  
    // ExternalDataComponent をレンダリング
    render(<ExternalDataComponent/>);

    const initialDisplay = screen.getByText('Loading...');
    expect(initialDisplay).toBeInTheDocument();

    const res = [{ id: 1, name: 'a' }, { id: 2, name: 'b' }];
    (fetchData as jest.Mock).mockResolvedValue(res);

    render(<ExternalDataComponent/>)

    await waitFor(() => {
      const changeDisplay = screen.getAllByRole('listitem');
      
      changeDisplay.forEach(item => expect(item).toBeInTheDocument());
    })
    
    })
  

})

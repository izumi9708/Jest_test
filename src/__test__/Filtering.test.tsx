import { act, getByRole, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {filterEvens,reverseString} from '../function/filtering';

// 1.関数が正しく動作し、与えられた数値の配列から偶数だけをフィルタリングして返すことをテストしてください。
// 2.空の配列が与えられた場合、関数が空の配列を返すことをテストしてください。
// 3.関数が正しく動作し、与えられた文字列を逆さまにして返すことをテストしてください。
// 4.空の文字列が与えられた場合、関数が空の文字列を返すことをテストしてください。


describe.skip('Filtering Function Test',() => {
  // 1.
  it('shold be return even number',() => {
    const numberArr:number[] = [2,5,6,7,10];
    const resultArr = filterEvens(numberArr).length;

    expect(resultArr).toBe(3)
  })

  // 2.
  it('shold be return empty array',() => {
    const testArr:number[] = [];
    const resultArr = filterEvens(testArr).length;

    expect(resultArr).toBe(0);
  })

  // 3.
  it('shold be return reverse string',() => {
    const string = 'rotor';

    expect(reverseString(string)).toMatch(string);
  })

  // 4.
  it('shold be return empty array',() => {
    const testArr:string = '';

    expect(reverseString(testArr)).toMatch('');
  })
})

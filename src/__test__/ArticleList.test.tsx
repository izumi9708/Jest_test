import { act, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ArticleList from "../Article/ArticleList";
import {initialArticles} from '../Article/initialArticle';

// 1.コンポーネントが正しく初期化され、指定された記事が表示されることをテストしてください。
// 2.カテゴリーを選択したときに、選択されたカテゴリーに該当する記事のみが表示されることをテストしてください。

describe('ArticleList Component Test',() => {
  // 1.
  it('should render the component with initial articles', async() => {
    const {container} = render(<ArticleList articles={initialArticles}/>);

    await waitFor(() => {
      const length = container.querySelectorAll('li').length;

      expect(length).toBe(4);
    })
  })

  // 2.
  it('should filter articles by selected category',async() => {
    const {container} = render(<ArticleList articles={initialArticles}/>);
    const select = screen.getByRole('combobox');

    act(() => {
      userEvent.selectOptions(select,'Technology');
    })

    await waitFor(() => {
      const displayedArticles = screen.getAllByRole('listitem');

      expect(displayedArticles.length).toBe(2);
    })
  })
})
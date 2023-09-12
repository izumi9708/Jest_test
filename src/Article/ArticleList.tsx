import React, { useState } from 'react';

interface Article {
  id: number;
  title: string;
  category: string;
}

interface ArticleListProps {
  articles: Article[];
}

const ArticleList = (articles:ArticleListProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string | 'All'>('All');

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredArticles = selectedCategory === 'All' ?
    articles.articles :
    articles.articles.filter(article => article.category === selectedCategory);

  return (
    <div>
      <h1>Article List</h1>
      <div>
        <label>
          Filter by Category:
          <select
            value={selectedCategory}
            onChange={e => handleCategoryChange(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Technology">Technology</option>
            <option value="Sports">Sports</option>
            <option value="Business">Business</option>
          </select>
        </label>
      </div>
      <ul>
        {filteredArticles.map(article => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleList;

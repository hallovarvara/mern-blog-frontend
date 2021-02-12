import './App.css';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ArticlePage } from './pages/ArticlePage';
import { ArticlesPage } from './pages/ArticlesPage';

function App() {
  return (
    <div className="App">
      <HomePage />
      <AboutPage />
      <ArticlePage />
      <ArticlesPage />
    </div>
  );
}

export default App;

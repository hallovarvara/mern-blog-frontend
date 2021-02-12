import './App.css';

import { HashRouter as Router, Route } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { PostPage } from './pages/PostPage';
import { PostsListPage } from './pages/PostsListPage';
import { Menu } from './components/Menu';

function App() {
  return (
    <Router>
      <Menu />
      <main id="#page-body">
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/blog/:path" component={PostPage} />
        <Route path="/blog" exact component={PostsListPage} />
      </main>
    </Router>
  );
}

export default App;

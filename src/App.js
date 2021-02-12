import './App.css';

import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { PostPage } from './pages/PostPage';
import { PostsListPage } from './pages/PostsListPage';
import { Page404 } from './pages/404page';
import { Menu } from './components/Menu';

function App() {
  return (
    <Router>
      <Menu />
      <main id="#page-body">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/blog/:path" component={PostPage} />
          <Route path="/blog" exact component={PostsListPage} />
          <Route component={Page404} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;

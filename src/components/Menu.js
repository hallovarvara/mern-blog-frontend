import { Link } from 'react-router-dom';

import { menuItems } from '../utils/constants';

export const Menu = () => {
  return (
    <nav>
      <ul>
        {menuItems.map(({ title, path }) => (
          <li key={title} className=".article-list-item">
            <Link to={path}>{title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

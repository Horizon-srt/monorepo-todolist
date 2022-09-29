import Link from 'next/link';
import { useRouter } from 'next/router'
import {FC} from 'react';

interface FooterProps {
  itemNumber: number;
};

const Footer: FC<FooterProps> = (data) => {
  const router = useRouter();

  const clearCompleted = () => {
    // TODO
    console.log("ClearCompleted");
  }

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{data.itemNumber}</strong>
        <span> items left</span>
      </span>
      <ul className="filters">
        <li>
          <Link href="#/"><a className={router.asPath == "/#/" ? "selected" : ""}>All</a></Link>
        </li>
        <span> </span>
        <li>
          <Link href="#/active"><a className={router.asPath == "/#/active" ? "selected" : ""}>Active</a></Link>
        </li>
        <span> </span>
        <li>
        <Link href="#/completed"><a className={router.asPath == "/#/completed" ? "selected" : ""}>Completed</a></Link>
        </li>
      </ul>
      <button className="clear-completed" onClick={clearCompleted}>Clear completed</button>
    </footer>
  );
}

export default Footer;
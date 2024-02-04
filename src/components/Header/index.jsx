import Nav from '../Nav';
import './styles.css';

export default function Header({}) {
    return (
      <div className="header p-2 image">
              <h1 className="h1 ps-4">Amy Lloyd</h1>
              <Nav />
      </div>
    );
}
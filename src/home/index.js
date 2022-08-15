import logo from './logo.svg';
import { Link } from 'react-router-dom'
import './style.css';

function Home() {
  return (
    <div className="App Home page">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div style={{
          display: 'flex',
          gap: '15px'
        }}>
          <Link to={'/my'}>我的</Link>
          <Link to={'/about'}>关于我们</Link>
        </div>
      </header>
    </div>
  );
}

export default Home;

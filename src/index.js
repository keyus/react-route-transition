import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route, useLocation, useNavigationType } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from "react-transition-group";
import './index.css';
import Home from './home';
import My from './my';
import About from './about';


const root = ReactDOM.createRoot(document.getElementById('root'));


const ANIMATION_MAP = {
  PUSH: 'forward',
  POP: 'back',
  REPLACE: 'forward',
}
const App = () => {
  const location = useLocation();
  const action = useNavigationType();
  const nodeRef = React.useRef(null)

  console.log(action)

  return (
    <TransitionGroup
      childFactory={child => React.cloneElement(
        child,
        { classNames: ANIMATION_MAP[action] }
      )}
      className={'router-wapper'}>
      <CSSTransition
        timeout={5000}
        key={location.pathname}>
        <Routes location={location}>
          <Route index element={<Home />} />
          <Route path='/my' element={<My />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  )
}
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

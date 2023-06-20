import { useState } from 'react';
import './index.sass';
import Sidebar from "./components/sidebar/Sidebar";
import Main from './components/main/Main';

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Sidebar />
      <Main />
    </>
  );
}

export default App

import { useState } from 'react';
import './index.sass';
import Sidebar from "./components/Sidebar";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>This is example text just to make sure everything works fine</h1>
      <Sidebar/>
    </>
  );
}

export default App

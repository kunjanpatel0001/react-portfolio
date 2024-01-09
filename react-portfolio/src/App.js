import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import AnimatedLetters from './components/AnimatedLetters';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* adding home component without path and just as index */}
        <Route index element={<Home />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;

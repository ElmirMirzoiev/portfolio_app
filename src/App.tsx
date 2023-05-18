import './App.scss'
import {Routes, Route} from 'react-router-dom';
import { Nav } from './header/nav/Nav';
import { Home } from './pages/homePage/Home';

function App() {

  return (
    <div className="App">
            <div className="appBlockElement"/>
            <div className="appContent">
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                </Routes>
                <Nav />
            </div>
        </div>
  )
}

export default App

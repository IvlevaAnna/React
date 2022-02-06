import './App.css';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {Home} from "./views/Home/Home";
import {Profile} from "./views/Profile/Profile";
import {Chats} from "./views/Chats/Chats";
import {Chat} from "./components/Chat/Chat";

function App() {

  return (
      <div className='App'>
          <BrowserRouter>
              <div className="navigation">
                  <Link className="link" to="/">HOME</Link> /
                  <Link className="link" to='/chats'> CHATS</Link>
              </div>
              <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='profile' element={<Profile />} />
                  <Route path='chats' element={<Chats />}>
                      <Route path=':chatId' element={<Chat />} />
                  </Route>
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;

import './App.css';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {Home} from "./views/Home/Home";
import {Profile} from "./views/Profile/Profile";
import {Chats} from "./views/Chats/Chats";
import {Chat} from "./components/Chat/Chat";
import {Provider} from "react-redux";
import {persistor, store} from "./store";
import {PersistGate} from "redux-persist/integration/react";
import {ChatsContainer} from "./views/Chats/ChatsContainer";
import {Holidays} from "./views/Holidays/Holidays";

function App() {

  return (
      <div className='App'>
          <Provider store={store}>
              <PersistGate persistor={persistor}>
                  <BrowserRouter>
                      <div className="navigation">
                          <Link className="link" to="/">HOME</Link> /
                          <Link className="link" to='/chats'> CHATS</Link> /
                          <Link className="link" to='/holidays'> HOLIDAYS</Link>
                      </div>
                      <Routes>
                          <Route path='/' element={<Home />} />
                          <Route path='profile' element={<Profile />} />
                          <Route path='holidays' element={<Holidays />} />
                          <Route path='chats' element={<ChatsContainer />}>
                              <Route path=':chatId' element={<Chat />} />
                          </Route>
                      </Routes>
                  </BrowserRouter>
              </PersistGate>
          </Provider>
      </div>
  );
}

export default App;

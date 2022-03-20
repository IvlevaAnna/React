import './App.css';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {onAuthStateChanged} from "firebase/auth"
import {Home} from "./views/Home/Home";
import {Profile} from "./views/Profile/Profile";
import {Chat} from "./components/Chat/Chat";
import {Provider} from "react-redux";
import {persistor, store} from "./store";
import {PersistGate} from "redux-persist/integration/react";
import {ChatsContainer} from "./views/Chats/ChatsContainer";
import {Holidays} from "./views/Holidays/Holidays";
import {useEffect, useState} from "react";
import {PublicRoute} from "./components/PublicRoute/PublicRoute";
import {PrivateRoute} from "./components/PrivateRoute/PrivateRoute";
import {auth} from './services/firebase'

function App() {
    const [authed, setAuthed] = useState(false)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthed(true)
            }
            else {
                setAuthed(false)
            }
        })

        return unsubscribe
    }, [])

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
                          <Route path='/' element={<PublicRoute authed={authed} />}>
                              <Route path='' element={<Home />} />
                          </Route>
                          <Route path='/' element={<PrivateRoute authed={authed} />}>
                              <Route path='profile' element={<Profile />} />
                          </Route>
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

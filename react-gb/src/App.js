import './App.css';
import {Message} from "./components/Message/Message";
import {useEffect, useState} from "react";
import {MessageForm} from "./components/MessageForm/MessageForm";

function App() {
  const [messageList, setMessageList] = useState([])

    const renderMessages = () => {
        return messageList.map((message) =>
            <Message text={message.text} author={message.author} />)
    }

  return (
    <div className="App">
        {renderMessages()}
        <MessageForm messageList={messageList} setMessageList={setMessageList}/>
    </div>
  );
}

export default App;

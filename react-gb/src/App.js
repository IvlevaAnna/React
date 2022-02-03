import './App.css';
import {Message} from "./components/Message/Message";
import {useEffect, useState} from "react";
import {MessageForm} from "./components/MessageForm/MessageForm";

function App() {
  const [messageList, setMessageList] = useState([])

    useEffect(() => {
        let timeout
        if(messageList[messageList.length -1]?.author === 'me') {
            timeout = setTimeout(() => {
                setMessageList((prevMessageList) => [...prevMessageList, {text: `Your message is: ${prevMessageList[prevMessageList.length-1].text}`, author: 'robot'}])
            }, 1500)
        }

        return () => clearTimeout(timeout)
    }, [messageList])

    const renderMessages = () => {
        return messageList.map((message) =>
            <Message text={message.text} author={message.author} />)
    }

    const handleSubmit = (messageText) => {
        setMessageList([...messageList, {text: messageText, author: 'me'}])

    }

  return (
    <div className="App">
        {renderMessages()}
        <MessageForm onSubmit={handleSubmit}/>
    </div>
  );
}

export default App;

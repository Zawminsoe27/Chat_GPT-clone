import "./App.css";
import gptLogo from "./assets/ChatGPT_Clone_assets/assets/chatgpt.svg";
import addBTn from "./assets/ChatGPT_Clone_assets/assets/add-30.png";
import msgIcon from "./assets/ChatGPT_Clone_assets/assets/message.svg";
import home from "./assets/ChatGPT_Clone_assets/assets/home.svg";
import rocket from "./assets/ChatGPT_Clone_assets/assets/rocket.svg";
import save from "./assets/ChatGPT_Clone_assets/assets/bookmark.svg";
import sendBtn from "./assets/ChatGPT_Clone_assets/assets/send.svg";
import userIcon from "./assets/ChatGPT_Clone_assets/assets/user-icon.png";
import gptImgLogo from "./assets/ChatGPT_Clone_assets/assets/chatgptLogo.svg";
import { sendMsgToOpenAI } from "./openai";
import { useState } from "react";
function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      text: "hi",
      isBot: true,
    },
  ]);
  const handleSend = async () => {
    const text = input;
    const res = await sendMsgToOpenAI(input);
    setMessages([
      ...messages,
      {
        text: input,
        isBot: false,
      },
      { text: res, isBot: true },
    ]);
  };
  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="uppserSideTop">
            <img src={gptLogo} alt="Logo" className="logo" />
            <span className="brand">ChatGPT</span>
          </div>
          <button className="midBtn">
            <img src={addBTn} alt="" className="addBtn" />
            New Chat
          </button>
          <div className="upperSideBottom">
            <button className="query">
              <img src={msgIcon} alt="query" />
              What is Programming
            </button>
            <button className="query">
              <img src={msgIcon} alt="query" />
              How To Use Api
            </button>
          </div>
        </div>
        <div className="lowerSide">
          <div className="listItems">
            <img src={home} alt="Home" className="listItemsImg" />
            Home
          </div>
          <div className="listItems">
            <img src={save} alt="Save" className="listItemsImg" />
            Saved
          </div>
          <div className="listItems">
            <img src={rocket} alt="Rocket" className="listItemsImg" />
            Upgrande To Pro
          </div>
        </div>
      </div>
      <div className="main">
        <div className="chats">
          {messages.map((message, i) => (
            <div key={i} className={message.isBot ? "chat bot" : "chat"}>
              <img
                className="chatimg"
                src={message.isBot ? gptImgLogo : userIcon}
                alt=""
              />
              <p className="txt">{message.text}</p>
            </div>
          ))}
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input
              type="text"
              placeholder="Send a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button className="send">
              <img src={sendBtn} alt="" />
            </button>
          </div>
          <p>
            ChatGpt mproduce inaccurate information about people, places, or
            facts, ChatGpt August 20 Version
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;

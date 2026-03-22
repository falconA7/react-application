import {useState} from "react";
import { ColoredMessage } from "./components/ColoredMessages";

export default function App() {
  const [num,setNum] = useState(0);
  const handleButtonClick = () => {
    setNum(num+1);
  };

  return (
    <div>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColoredMessage />
      <ColoredMessage color="blue">お元気ですか？</ColoredMessage>
      <ColoredMessage color="pink">元気です</ColoredMessage>
      <button onClick={handleButtonClick}>ボタン</button>
      <p>{num}</p>
    </div>

  );
}

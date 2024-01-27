import {FC, useEffect, useState} from "react";

const Counter: FC = () => {

    const [inputValue, setInputValue] = useState("");
    const [message, setMessage] = useState<string[]>([]);

    const handleInputdata = () => {
        setMessage([...message, inputValue]);
        console.log(message);
    };

    const handleDelete = (i: number) => {
        const newmessage = [...message];
        newmessage.splice(i, 1);
        setMessage(newmessage);
      };

    return (
      <div>
        {/* ใน input ให้ใช้ value={inputValue} เพื่อให้แสดงค่าที่อยู่ใน state */}
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button onClick={() => handleInputdata()}>add</button>
  
        <p>ค่าที่กรอก: </p>
        <div>
            {message.map((messageItem, i) => (
                <p key={i}>
                {messageItem}
                <button onClick={() => handleDelete(i)}>del</button>
                </p>
            ))}
        </div>
      </div>
    );
};

export default Counter;


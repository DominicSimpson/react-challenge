import { useState} from "react";

export default function Shouter() {
    const [ message, setMessage ] = useState("");
    function update (e) {
        setMessage(e.target.value);
    }
    return (
        <>
            <input value={message} onChange={update}/>
            <output>{message.toUpperCase()}</output>
        </>
    )
}
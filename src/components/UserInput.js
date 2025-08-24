import React, { useState } from "react";

function UserInput() {
    // This holds whatever the user types in the box
    const [text, setText] = useState("");

    // This updates text whenever someone types
    function handleChange(event) {
        setText(event.target.value);
    }

    return (
        <div>
            {/* Box where user types */}
            <input type="text" value={text} onChange={handleChange} />

            {/* This shows the same thing right below */}
            <p>You typed: {text}</p>
        </div>
    );
}

export default UserInput;

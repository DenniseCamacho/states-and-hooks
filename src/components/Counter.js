import React, { useState } from "react";

export default function Counter() {
    // This count keeps track of the number seen on the screen.
    const [count, setCount] = useState(0);

    // This makes the number go up by 1
    const inc = () => setCount((c) => c + 1);

    // This makes the number go down by 1, but never below 0
    const dec = () => setCount((c) => Math.max(0, c - 1));

    return (
        <div>
            {/* Shows the number in big text */}
            <p style={{ fontSize: 18 }}>Count: <strong>{count}</strong></p>

            {/* Two buttons: one to lower the number, one to raise it */}
            <button onClick={dec} style={{ marginRight: 8 }}>-</button>
            <button onClick={inc}>+</button>
        </div>
    );
}

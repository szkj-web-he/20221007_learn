import React, { useCallback, useInsertionEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";

const Main: React.FC = () => {
    const [count, setCount] = useState(0);
    const ref = useRef(count);

    useInsertionEffect(() => {
        ref.current = count;
    }, [count]);

    const fn = useCallback(() => {
        console.log("fn,我执行了");
        return ref.current;
    }, []);

    const fn2 = useCallback(() => {
        console.log("fn2,我执行了");
        return count;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <button onClick={() => setCount((pre) => ++pre)}>加加</button>
            <p>state的callback:{fn2()}</p>
            <p>ref的callback:{fn()}</p>
            <p>count:{count}</p>
        </>
    );
};

const el = document.getElementById("root");
el && createRoot(el).render(<Main />);

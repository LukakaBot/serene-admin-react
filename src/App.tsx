import { useState } from "react";
import { Button } from "antd";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BaseLayout from "./layouts/BaseLayout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BaseLayout>
        {{
          content: (
            <div className="flex-1 flex flex-col justify-center h-full">
              <div className="flex justify-center items-center">
                <a href="https://vite.dev" target="_blank">
                  <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                  <img
                    src={reactLogo}
                    className="logo react"
                    alt="React logo"
                  />
                </a>
              </div>
              <h1 className="text-red-500">Vite + React</h1>
              <div className="card">
                {/* <button onClick={() => setCount((count) => count + 1)}>
                  count is {count}
                </button> */}
                <Button onClick={() => setCount(() => count + 1)}>
                  count is {count}
                </Button>
                <Button type="primary">Primary Button</Button>
                <p>
                  Edit <code>src/App.tsx</code> and save to test HMR
                </p>
              </div>
              <p className="read-the-docs">
                Click on the Vite and React logos to learn more
              </p>
            </div>
          ),
        }}
      </BaseLayout>
    </>
  );
}

export default App;

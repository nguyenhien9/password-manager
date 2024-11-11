import { BrowserRouter } from "react-router-dom";
import Router from "./routes";
import { ConfigProvider } from "antd";
function App() {
  return (
    <>
      <BrowserRouter>
        <ConfigProvider>
          <Router />
        </ConfigProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

import { ConfigProvider } from "antd";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import { AuthProvider } from "./modules/auth/context/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <ConfigProvider>
            <Routes />
          </ConfigProvider>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;

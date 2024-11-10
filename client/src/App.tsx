import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { ConfigProvider } from "antd";
import Router from "./routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <ConfigProvider>
            <Router />
          </ConfigProvider>
        </QueryClientProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

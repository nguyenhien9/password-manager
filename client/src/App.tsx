import { BrowserRouter } from "react-router-dom";
import Router from "./routes";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <>
      <HelmetProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </HelmetProvider>
    </>
  );
}

export default App;

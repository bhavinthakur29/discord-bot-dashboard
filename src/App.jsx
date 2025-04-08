import { HeadProvider } from "react-head";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage } from "./pages";


const clientId = import.meta.env.VITE_BOT_CLIENT_ID;
const botName = import.meta.env.VITE_BOT_NAME;

export default function App() {
  return (
    <>
      <BrowserRouter>
        <HeadProvider>
          <Routes>
            <Route index path="/" element={<Homepage id={clientId} name={botName} />} />
          </Routes>
        </HeadProvider>
      </BrowserRouter>
    </>
  );
};


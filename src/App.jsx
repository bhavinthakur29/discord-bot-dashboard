import { HeadProvider } from "react-head";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage, Dashboard } from "./pages";
import { clientId, botName } from "./config";
import ProtectedRoute from "./routes/ProtectedRoute";


export default function App() {
  return (
    <>
      <BrowserRouter>
        <HeadProvider>
          <Routes>
            <Route index path="/" element={<Homepage id={clientId} name={botName} />} />
            <Route path="/dashboard" element={
              <ProtectedRoute> <Dashboard /> </ProtectedRoute>
            } />


          </Routes>
        </HeadProvider>
      </BrowserRouter>
    </>
  );
};


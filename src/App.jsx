import { Route, Routes } from "react-router-dom";
import PageLayout from "./layouts/Page/PageLayout";
import AuthPage from "./pages/Auth/AuthPage";
import HomePage from "./pages/Home/HomePage";

function App() {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </PageLayout>
  );
}

export default App;

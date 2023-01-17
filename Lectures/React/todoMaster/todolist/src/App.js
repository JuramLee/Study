import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import { TodoPage } from "./pages/Todo";

function App() {
  return (
    <BrowserRouter>
    {/* HTML5를 지원하는 브라우저 주소를 감지 */}
      <Routes>
      {/* Route path와 감지한 주소가 일치한 router만을 랜더링 시켜주는 역할 */}
        <Route path="/" element={<HomePage />} />
        <Route path="/todo" element={<TodoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
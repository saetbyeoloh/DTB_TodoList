import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignIn, SignUp, Todo } from "./pages";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />}></Route>
        <Route path="/join" element={<SignUp />}></Route>
        <Route path="/todo" element={<Todo />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

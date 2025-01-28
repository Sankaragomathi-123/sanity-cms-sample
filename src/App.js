import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./component/HomePage";
import Blogs from "./component/Blogs";
import Header from "./component/Header";
import SinglePost from "./component/SingleBlog";
import Error from "./component/Error";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="*" element={<Error />} />
          <Route path="blog/:slug" element={<SinglePost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

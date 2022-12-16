import {BrowserRouter, Route, Routes} from 'react-router-dom';
import PostPage from './components/post_page/post_page';
import HomePage from "./components/home_page/home_page";

function AppRouter() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/care/:postId" element={<PostPage/>}/>
          <Route path="*" element={<HomePage/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default AppRouter;

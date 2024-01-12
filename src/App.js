import Footer from "./Footer";
import Missing from "./Missing";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";
import Home from "./Home";
import Nav from "./Nav";
import Header from "./Header";
import { Routes, Route } from "react-router-dom";

import EditPost from "./EditPost";

import { DataProvider } from "./context/DataContext";


function App() {

  
  



  return (
    <div className="App">
      <DataProvider>
        <Header title="Raja social media "/>
        <Nav />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post"> 
              <Route index element={<NewPost />} />
              <Route path=":id" element={<PostPage />} />
              <Route path="edit/:id" element={<EditPost />} />
            </Route>
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Missing />} />
        </Routes>
        <Footer />
      </DataProvider>

    </div>
  );
}

export default App;

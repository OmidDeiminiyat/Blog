import { Blogs } from "./components/blogs/BlogList"
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {SinglePage} from "./components/blogs/SinglePage";


function App() {
  const queryClient = new QueryClient();

  return (
    <>
     
     <QueryClientProvider client={queryClient}>
     <Router>
      <Routes>
        <Route path="/" element={<Blogs />} />
        <Route path="/blogs/SinglePage/:id" element={<SinglePage />} />
      </Routes>
    </Router>
     </QueryClientProvider>
    </>
  )
}

export default App

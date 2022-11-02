import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Movies from "./pages/Movies";

const MyRoutes = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/movies" element={<PrivateRoute />}>
        <Route path="" element={<Movies />} />
        <Route path=":id" element={<MovieDetails />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default MyRoutes;

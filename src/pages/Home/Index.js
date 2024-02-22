import "./Index.css";
import { Nav } from "../../comps/Nav";
import { Link, Route, Routes } from "react-router-dom";
import { Animals } from "../Anilmals/index";
import { Footbal } from "../Teams/index";
import { Cuntries } from "../Cuntries/index";

export function Home() {
  return (
    <>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="box">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1179/1179267.png"
                  className="image"
                />
                <h1 className="tittle">Welcome To The Game</h1>
                <h2 className="subtittle"> please enter your subject</h2>
                <div>
                  <Link to="/cuntries">
                    <button className="button">Cuntries</button>
                  </Link>
                  <Link to="/animals">
                    <button className="button">Animals</button>
                  </Link>
                  <Link to="/footbal">
                    <button className="button">Football</button>
                  </Link>
                </div>
              </div>
            </>
          }
        />
        <Route path="/cuntries" element={<Cuntries />} />
        <Route path="/animals" element={<Animals />} />
        <Route path="/footbal" element={<Footbal />} />
        <Route
          path="/*"
          element={
            <h1 className="tittle" style={{ color: "black" }}>
              Page Not Found :((
            </h1>
          }
        />
      </Routes>
    </>
  );
}

import { Route, Routes } from "react-router-dom";
import "./App.css";
import { route } from "./routes/Routes";
import Layout from "./Component/Layout/Layout";
import Login from "./authentication/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        {route?.map((item) => {
          return (
            <Route
              key={item?.id}
              element={<Layout>{item?.element}</Layout>}
              path={item?.path}
            />
          );
        })}
      </Routes>
    </>
  );
}

export default App;

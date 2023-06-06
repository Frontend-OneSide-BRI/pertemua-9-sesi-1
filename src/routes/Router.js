import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./index";
import Layout from "../components/Layout";

function Router() {
 
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((item) => (
          <>
            {item.layout ? (
              <Route
                key={item.path}
                path={item.path}
                element={<Layout access={item.access}>{item.element}</Layout>}
              />
            ) : (
              <Route key={item.path} path={item.path} element={item.element} />
            )}
          </>
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

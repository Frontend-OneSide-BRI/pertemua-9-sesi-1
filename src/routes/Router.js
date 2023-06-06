import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./index";
import Layout from "../components/Layout";
import { Public, Admin, Member } from "./Authorization";

function Router() {
  const redirectAccess = (item) => {
    console.log(item);
    if (item.access === "public") {
      return (
        <Route
          key={item.path}
          path={item.path}
          element={<Public>{item.element}</Public>}
        />
      );
    }
    if (item.access === "member") {
      return (
        <Route
          key={item.path}
          path={item.path}
          element={<Member>{item.element}</Member>}
        />
      );
    }
    if (item.access === "admin") {
      return (
        <Route
          key={item.path}
          path={item.path}
          element={<Admin>{item.element}</Admin>}
        />
      );
    }
  };
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

import Login from "../Pages/Login";

const routes = [
  {
    element: <h1>Security</h1>,
    path: "/security",
    layout: true,
    access: "admin",
  },
  {
    element: <h1>hello world</h1>,
    path: "/",
    layout: true,
    access: "member",
  },
  {
    element: <h1>Not found</h1>,
    path: "*",
    layout: true,
    access: "member",
  },
  {
    element: <Login />,
    path: "/login",
    layout: false,
    access: "public",
  },
];

export default routes;

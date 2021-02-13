import Inicio from "./components/Inicio";
import Blog from "./components/Blog";
import Posts from "./components/Posts";

export const routes = [
  { path: "/inicio", component: Inicio },
  { path: "/blog", component: Blog },
  { path: "/post/:id", component: Posts },
];

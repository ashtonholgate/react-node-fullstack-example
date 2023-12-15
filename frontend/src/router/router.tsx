import { createBrowserRouter } from "react-router-dom";
import { paths } from "./paths";
import UserSearchPage from "../features/user/components/UserSearchPage";
import ErrorPage from "../features/error/components/ErrorPage";
import UserPage from "../features/user/components/UserPage";

export const router = createBrowserRouter([
  {
    path: paths.userSearchPage,
    element: <UserSearchPage />,
    loader: async () => {
      const result = await fetch("http://localhost:8080");
      return await result.json();
    },
  },
  {
    path: paths.userPage,
    element: <UserPage />,
    loader: async ({ params }) => {
      const id = params.id;
      const result = await fetch(`http://localhost:8080/${id}`);
      return await result.json();
    },
  },
  {
    path: paths.errorPage,
    element: <ErrorPage />,
  },
]);

import { Link, useLoaderData } from "react-router-dom";
import { User } from "../models/user.models";
import { paths } from "../../../router/paths";

export default function UserPage() {
  const user = useLoaderData() as User[];

  return (
    <>
    <p>{JSON.stringify(user)}</p>
    <Link to={paths.userSearchPage}>Back</Link>
    </>
  );
}

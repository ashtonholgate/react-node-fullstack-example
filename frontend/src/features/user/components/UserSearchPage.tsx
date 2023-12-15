import { Link, useLoaderData } from "react-router-dom";
import { paths } from "../../../router/paths";

type User = {
  id: number;
  name: string;
};

export default function UserSearchPage() {
  const users = useLoaderData() as User[];

  return (
    <>
      {users.map((user) => (
        <Link style={{margin: 20}} to={paths.userPage.replace(":id", user.id.toString())}>{user.name}</Link>
      ))}
    </>
  );
}

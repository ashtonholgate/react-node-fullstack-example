import { Link } from "react-router-dom";
import { paths } from "../../../router/paths";

export default function ErrorPage() {
  return (
    <>
      <h1>Oh no! There was an error!</h1>
      <Link to={paths.userSearchPage}>Back</Link>
    </>
  );
}

import { Button } from "antd";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <>
      <div>Login Page</div>
      <Button>
        <Link to="/">Sign out</Link>
      </Button>
    </>
  );
}

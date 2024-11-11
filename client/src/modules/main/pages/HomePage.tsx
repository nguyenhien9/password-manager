import { Button } from "antd";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h1>Welcome backs, user!</h1>
      <Button>
        <Link to="/auth/register">Register</Link>
      </Button>
    </div>
  );
}

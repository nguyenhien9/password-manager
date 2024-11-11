import { Button } from "antd";
import LeftAndRight from "../../layouts/leftandright/LeftAndRight";
import { Link } from "react-router-dom";

export default function HomePage() {
  const LeftPart = () => {
    return (
      <>
        <h1>Welcome back, User</h1>
        <p>Please sign in to continue</p>
        <Button>
          <Link to="/auth/login">Sign in</Link>
        </Button>
      </>
    );
  };
  const RightPart = () => {
    return (
      <>
        <div>Right</div>
      </>
    );
  };
  return <LeftAndRight leftSide={<LeftPart />} rightSide={<RightPart />} />;
}

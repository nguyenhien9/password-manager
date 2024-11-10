import { Button } from "antd";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Button>
        <Link to="/auth/login">Sign in</Link>
      </Button>
    </div>
  );
};

export default HomePage;

import { Col, Row } from "antd";

type Props = {
  children: React.ReactNode;
};

export default function AuthLayout({ children }: Props) {
  const LeftPart = () => {
    return <div>{children}</div>;
  };
  const RightPart = () => {
    return <div>Image</div>;
  };
  return (
    <Row>
      <Col span={12}>{LeftPart()}</Col>
      <Col span={12}>{RightPart()}</Col>
    </Row>
  );
}

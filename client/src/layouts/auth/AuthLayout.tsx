import { Col, Row } from "antd";

type Props = {
  leftPart: React.ReactNode;
  rightContent: string;
};

export default function AuthLayout({ leftPart, rightContent }: Props) {
  return (
    <Row justify={"center"} align={"middle"} gutter={24}>
      <Col sm={12}>{leftPart}</Col>
      <Col sm={0} lg={12}>
        <img src={rightContent} alt="auth-image" />
      </Col>
    </Row>
  );
}

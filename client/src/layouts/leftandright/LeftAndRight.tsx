import { Col, Row } from "antd";

type Props = {
  leftSide: React.ReactNode;
  rightSide: React.ReactNode;
};
export default function LeftAndRight(props: Props) {
  const { leftSide, rightSide } = props;
  return (
    <>
      <Row>
        <Col span={12}>{leftSide}</Col>
        <Col span={12}>{rightSide}</Col>
      </Row>
    </>
  );
}

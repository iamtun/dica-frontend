import { Col, Row } from "antd";
import React, { ReactNode } from "react";
import styles from "./LayoutHeader.module.scss";

interface ILayoutHeaderPageDetail {
    rightTop: ReactNode;
    left: ReactNode;
    rightDown: ReactNode;
    sizeTop: Number;
}

const LayoutHeaderPageDetail: React.FC<ILayoutHeaderPageDetail> = ({ left, rightTop, rightDown, sizeTop }) => {
    return (
        <div className={styles.container} style={{ marginTop: `${sizeTop}px` }}>
            <Row>
                <Col>
                    {left}
                </Col>
                <Col className={styles.__right} >
                    <Row>
                        {rightTop}
                    </Row>
                    <Row style={{ marginTop: 2 }}>
                        {rightDown}
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default LayoutHeaderPageDetail;
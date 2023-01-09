import { Col, Row } from "antd";
import React from "react"

interface ILayoutPageDetail {
    children: React.ReactNode;
}

const LayoutPageDetail: React.FC<ILayoutPageDetail> = ({ children }) => {
    return (
        <Row>
            <Col span={12} offset={4} xs={24} sm={24} md={12} lg={12} className="col">
                {children}
            </Col>
            <Col span={8} xs={0} sm={0} md={4} lg={4}>
                <div className="col-right">
                    <h3>Col-right</h3>
                </div>
            </Col>
        </Row>
    )
}

export default LayoutPageDetail;
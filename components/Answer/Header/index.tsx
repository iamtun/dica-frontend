import { ACCEPTED } from "@/common/svg";
import { Col, Row, Space } from "antd";
import Image from "next/image";
import React from "react";

import styles from "./Header.module.scss";

interface IAnswerHeader {
    isAccepted: Boolean;
}

const AnswerHeader: React.FC<IAnswerHeader> = ({ isAccepted }) => {
    return (
        <Row className={styles.container}>
            {/* xs={9} sm={12} md={12} lg={16} */}
            <Col >
                <p className={styles.__title}>CÂU TRẢ LỜI:</p>
            </Col>
            {/* xs={15} sm={12} md={12} lg={8}  */}
            {isAccepted && <Col >
                <Row>
                    {/* xs={4} sm={6} md={6} lg={4}  */}
                    <Col style={{ marginRight: 4 }}>
                        <Image src={ACCEPTED} width={32} height={32} alt="accepted" />
                    </Col>
                    {/* xs={20} sm={18} md={18} lg={20} */}
                    <Col className={styles.__right} >
                        <Row>
                            <p className={styles._top}>TRẢ LỜI HAY</p>
                        </Row>
                        <Row>
                            <p className={styles.__accepted}>Xác thực bởi</p>
                            <p className={styles.__username}>Cộng Đồng</p>
                            <p className={styles.__username} style={{ color: '#1DACFF' }}>CĐ</p>
                        </Row>
                    </Col>
                </Row>
            </Col>}
        </Row>
    )
}

export default AnswerHeader;
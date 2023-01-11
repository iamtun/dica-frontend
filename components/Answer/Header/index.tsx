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
            <Col span={12} xs={10} sm={12} md={12} lg={18}>
                <p className={styles.__title}>CÂU TRẢ LỜI:</p>
            </Col>
            {isAccepted && <Col span={12} xs={14} sm={12} md={12} lg={6} >
                <Row>
                    <Col span={6} xs={5} sm={6} md={6} lg={4}>
                        <Image src={ACCEPTED} width={32} height={32} alt="accepted" />
                    </Col>
                    <Col span={18} xs={19} sm={18} md={18} lg={20} className={styles.__right} >
                        <Row>
                            <p className={styles._top}>TRẢ LỜI HAY</p>
                        </Row>
                        <Row>
                            <p className={styles.__accepted}>Xác thực bởi</p>
                            <p className={styles.__username}>LooBoo</p>
                            <p className={styles.__username} style={{ color: '#1DACFF' }}>TG</p>
                        </Row>
                    </Col>
                </Row>
            </Col>}
        </Row>
    )
}

export default AnswerHeader;
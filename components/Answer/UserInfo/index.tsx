import { Avatar, Col, Row } from "antd";
import React from "react";
import Image from "next/image";

import AvatarIMG from "@/assets/images/avatar.svg";
import styles from "./UserInfo.module.scss";

const UserInfo:React.FC = () => {
    return (
        <div className={styles.container}>
            <Row>
                <Col span={2} >
                    <Avatar shape="circle" size={32} icon={<Image src={AvatarIMG} width={32} height={32} alt="logo" />}/>
                </Col>
                <Col span={19}  className={styles.__content}>
                    <Row>
                        <p className={styles.__username}>RozaVN</p>
                    </Row>
                    <Row>
                        <Col>
                            <p className={styles.__info}>345 Lá &#8226; Đã giúp được 628 bạn</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default UserInfo;
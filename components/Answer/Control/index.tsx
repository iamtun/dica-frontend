import { DISLIKE, HEART, THREE_DOT } from "@/common/svg";
import QuestionComment from "@/components/Question/Comment";
import { Col, Popover, Row } from "antd";
import Image from "next/image";
import React from "react";

import styles from "./Control.module.scss";

const AnswerControl: React.FC = () => {
    return (
        <div className={styles.container}>
            <Row>
                <Col span={6} lg={4}>
                    <Row className={styles.__row_action}>
                        <Col span={8} lg={8} >
                            <Image src={HEART} width={24} height={24} alt="heart" />
                        </Col>

                        <Col span={8} lg={8}>
                            <p className={styles.__row_count}>45</p>
                        </Col>

                        <Col span={8} lg={8}>
                            <Image src={DISLIKE} width={24} height={24} alt="heart" />
                        </Col>
                    </Row>
                </Col>

                <Col span={14} xs={14} sm={8} lg={8} className={styles.__row_comment}>
                    <QuestionComment comment={4} marginTop={0} />
                </Col>

                <Col span={4} xs={4} sm={10} lg={12} className={styles.__row_option}>
                    <Popover placement="rightBottom" title={<span>Title</span>} content={
                        <div>
                            <p>Content</p>
                            <p>Content</p>
                        </div>
                    } trigger="click" className={styles.popover}>
                     <Image src={THREE_DOT} width={24} height={24} alt="heart" />
                    </Popover>
                </Col>
            </Row>
     </div>
    )
}

export default AnswerControl;
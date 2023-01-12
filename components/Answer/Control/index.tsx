import { DISLIKE, HEART, THREE_DOT } from "@/common/svg";
import QuestionComment from "@/components/Question/Comment";
import { Col, Popover, Row } from "antd";
import Image from "next/image";
import React from "react";

import styles from "./Control.module.scss";

interface IAnswerControl {
    vote_count: Number;
}
const AnswerControl: React.FC<IAnswerControl> = ({ vote_count }) => {
    return (
        <div className={styles.container}>
            <Row className={styles.__row}>
                {/* xs={6} sm={3} md={6} lg={3} */}
                <Col>
                    <Row className={styles.__row}>
                        <Col >
                            <Row className={styles.__row_action}>
                                <Col>
                                    <Image src={HEART} width={24} height={24} alt="heart" />
                                </Col>

                                <Col>
                                    <p className={styles.__row_count}>{vote_count.toString()}</p>
                                </Col>

                                <Col>
                                    <Image src={DISLIKE} width={24} height={24} alt="heart" />
                                </Col>
                            </Row>
                        </Col>


                        {/* xs={14} sm={6} md={12} lg={7} */}
                        <Col className={styles.__row_comment}>
                            <QuestionComment comment={4} marginTop={0} />
                        </Col>
                    </Row>
                </Col>

                {/* xs={4} sm={15} md={6} lg={14} */}
                <Col className={styles.__row_option}>
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
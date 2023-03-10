import { BOOKMARK, BOOKMARK_SELECTED, THREE_DOT } from "@/common/svg";
import Count from "@/components/Count";
import { Button, Popover } from "antd";
import Image from "next/image";
import React from "react";

import styles from "./Control.module.scss";

export interface IQuestionControl {
    answer_count: Number;
}

const QuestionControl: React.FC<IQuestionControl> = ({ answer_count }) => {
    const [bookmark, setBookMark] = React.useState(false);

    const handleClickBookmark = () => {
        setBookMark(!bookmark)
    }
    return (
        <div className={styles.bottom}>
            {/* <ButtonViewAnswer/> */}
            <Button type="primary" shape="round" size="large" icon={<Count answer_count={answer_count} />} className={styles.__button}>
                <p>Xem câu trả lời</p>
            </Button>

            {/* icons right */}
            <div>
                <Image src={bookmark ? BOOKMARK_SELECTED : BOOKMARK} alt="bookmark" width={24} height={24} onClick={handleClickBookmark} />
                <Popover placement="bottomRight" title={<span>Title</span>} content={<div>
                    <p>Content</p>
                    <p>Content</p>
                </div>} trigger="click" className={styles.popover}>
                    <Image src={THREE_DOT} alt="three-dot" width={24} height={24} className={styles.icon_three_dot} />
                </Popover>
            </div>
        </div>
    )
}

export default QuestionControl;
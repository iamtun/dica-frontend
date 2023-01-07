import { ARROW_DOWN, ARROW_UP, COMMENT, COMMENT_SELECTED } from "@/common/svg";
import Image from "next/image";
import React from "react";

import styles from "./Comment.module.scss";
import QuestionCommentBox from "./CommentBox";

interface IQuestionComment {
    comment: Number;
}
const QuestionComment: React.FC<IQuestionComment> = ({ comment }) => {
    const [selected, setSelected] = React.useState(false);

    const handleSelected = () => {
        setSelected(!selected);
    }

    return <div className={styles.container}>
        <div onClick={handleSelected} className={styles.__comment}>
            <Image src={selected ? COMMENT_SELECTED : COMMENT} width={24} height={24} alt="comment-icon" />
            <p>
                <span>{comment.toString()}</span>
                Bình luận
            </p>
            <Image src={selected ? ARROW_DOWN : ARROW_UP} width={12} height={12} alt="arrow" className={styles.__arrow} />
        </div>

        {selected && <QuestionCommentBox />}
    </div>
}

export default QuestionComment;
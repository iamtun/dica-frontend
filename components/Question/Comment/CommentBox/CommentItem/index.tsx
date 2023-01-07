import { ARROW_UP_SEND } from "@/common/svg";
import Image from "next/image";
import React from "react";
import CommentInput from "./CommentInput";
import styles from "./CommentItem.module.scss";
import CommentView, { ICommentView } from "./CommentView";

interface IQuestionCommentBoxItem {
    isInput?: Boolean;
    comment?: ICommentView;
}


const QuestionCommentBoxItem: React.FC<IQuestionCommentBoxItem> = ({ isInput, comment}) => {
    return <div className={styles.container}>
        <Image src={'https://docdn.giainhanh.io/media/avatars/chick.png'} alt="avatar" width={32} height={32} className={styles.__avatar} />

        {isInput ? <CommentInput /> : <CommentView {...comment}/>}
    </div>
}

export default QuestionCommentBoxItem;

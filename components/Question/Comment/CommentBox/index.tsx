import React from "react";

import styles from "./CommentBox.module.scss";
import QuestionCommentBoxItem from "./CommentItem";

const comments = [
    {
        name: "LooBoo",
        timeAgo: "12 phút trước",
        tag: "TG",
        content: "Ráng giải giúp mình với, mình đang gấp"
    },
    {
        name: "KemVani",
        nameUserReplied: "SkyMaster",
        timeAgo: "45 phút trước",
        tag: "QTV",
        content: "Mình siêu vip pro mà bạn"
    }
]

const QuestionCommentBox:React.FC = () => {
    return <div className={styles.container}>
        <QuestionCommentBoxItem isInput={true}/>
        {comments.map(comment => <QuestionCommentBoxItem comment={comment} key={comment.content}/>)}
    </div>
}

export default QuestionCommentBox;
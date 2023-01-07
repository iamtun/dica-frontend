import React from "react"
import styles from "./CommentView.module.scss";

export interface ICommentView {
    name?: String;
    nameUserReplied?: String;
    timeAgo?: String;
    tag?: String;
    content?: String;
}

const CommentView: React.FC<ICommentView> = ({ name, nameUserReplied, timeAgo, tag, content }) => {
    return <div className={styles.container}>
        <div className={styles.__top}>
            <b>{name}</b> {nameUserReplied ? <b> <span className={styles.__arrow}>&#10148;</span> {nameUserReplied}</b> : null} &#8226; <span className={styles.__time}>{timeAgo}</span>  &#8226; <span>{tag}</span>
        </div>
        <div className={styles.__down}>
            <p>{content}</p>
        </div>
    </div>
}

export default CommentView
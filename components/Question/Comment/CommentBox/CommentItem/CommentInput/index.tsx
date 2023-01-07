import { ARROW_UP_SEND } from "@/common/svg"
import Image from "next/image"

import styles from "./CommentInput.module.scss";

const CommentInput: React.FC = () => {
    return <div className={styles.__input}>
        <input type="text" multiple />
        <Image src={ARROW_UP_SEND} width={24} height={24} alt="send" />
    </div>
}

export default CommentInput
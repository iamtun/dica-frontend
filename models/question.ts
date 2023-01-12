import { ITag } from "./tag";
import { IUserInfo } from "./userInfo";

export interface IQuestion {
    id: String;
    title: String;
    url_title: String;
    content: String;
    user_info: IUserInfo;
    answer_count: Number;
    description: String;
    tags: [ITag];
}
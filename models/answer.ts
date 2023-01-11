import { IUserInfo } from "./userInfo";

export interface IAnswer {
    id: String;
    content: String;
    html: String;
    create_time: String;
    user_info: IUserInfo;
    vote_count: Number;
    accepted?: Number;
}

export interface IAnswers {
    list: [IAnswer]
}
import IComent from "./IComent";
import IProfile from "./IProfile";

export default interface IPost {
    time_created: Date,
    coment: IComent,
    content: string[],
    alt?: string,
    like: number,
    user: IProfile
}
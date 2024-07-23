import IProfile from "./IProfile"

export default interface IComent {
    message: string
    respond?: TRespond
    user: IProfile
}

export type TRespond = {
    message: string
    to: string
    user: IProfile
}
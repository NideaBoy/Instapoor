export default interface IProfile {
    id: any
    username: string
    identify: string
    picture: string
    history?: THistory
}

type THistory = {
    id: string
    like: number
    video: any
}
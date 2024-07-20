export default interface Profile {
    id: any
    username: string
    identify: string
    picture: string
    history?: History
}

type History = {
    id: string
    like: number
    video: any
}
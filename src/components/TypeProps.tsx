export type stateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}


export type DialogsPageType = {
    dialogsItem: Array<DialogsItemType>
    message: Array<MessageType>
}

export type DialogsItemType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}

export type ProfilePageType = {
    posts: Array<PostType>
}


export type PostType = {
    id: number
    message: string
    likesCount: number
}


export type MusicType = {
    id: number
}


export type NewsType = {
    id: number
}

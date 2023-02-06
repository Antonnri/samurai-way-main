export type AppPropsType = {
    state: RootStatePropsType
}


export type RootStatePropsType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: sidebarType
}


export type DialogsPageType = {
    dialogsItem: Array<DialogsItemType>
    messages: Array<MessageType>
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
    posts: Array<PostsType>
}
export type PostsType = {
    id: number
    message: string
    likesCount: number
}


export type sidebarType = {}

export type MusicType = {
    id: number
}


export type NewsType = {
    id: number
}

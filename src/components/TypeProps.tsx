
export type StateType = {
    ProfilePage: Array<ProfilePageType>;
    dialogsPage: Array<DialogsType>;
}


export type DialogsType = {
    DialogsItemType: Array<DialogsItemType>;
    MessageType: Array<MessageType>;
}

export type DialogsItemType = {
    id: number;
    name: string;
}

export type MessageType = {
    id: number;
    message: string;
}

export type ProfilePageType = {
    posts: Array<PostType>;
}


export type PostType = {
    id: number;
    message: string;
    likesCount: number;
}


export type MusicType = {
    id: number;
}


export type NewsType = {
    id: number;
}
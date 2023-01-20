export type DialogsType = {
    DialogsItemType: DialogsItemType;
    MessageType: MessageType;
}

export type DialogsItemType = {
    id: number;
    name: string;
}

export type MessageType = {
    id: number;
    messages: string;
}

export type MusicType = {
    id: number;
}


export type NewsType = {
    id: number;
}


export type AppType = {
    DialogsType: DialogsType;

}
export type ProfileType = {
    id: number;
    message: string;
    likesCount: number;

}


export type PostsType = {
    id: number;
    message: string;
    likesCount: number;
}
export type PostType = {
    id: number;
    message: string;
    likesCount: number;
}

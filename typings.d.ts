export interface ChatProps {
    chat: Chat;
    messages: Messages[];
}

export interface Chat {
    id: string;
    users: User[];
}

export interface Messages {
    id: string
    message: string
    timestamp?: any
    user: User
}

export interface User {
    uid: string
    email: string;
    photoURL?: string;
    displayName: string
    emailVerified: boolean
    isAnonymous: boolean
    phoneNumber: string
    providerId: string
}

export interface DocumentProps {
    id: string;
    data: () => any;
}

export interface MessageProps {
    user: User
    message: any
}


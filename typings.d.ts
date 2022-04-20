export interface ChatProps {
    chat: Chat;
    messages: Messages[];
}

export interface Chat {
    id: string;
    users: User[];
}

export interface Messages {
    message: string
    timestamp: any
}

export interface User {
    id: string;
    email: string;
    photoURL: string;
}

export interface DocumentProps {
    id: string;
    data: () => any;
}


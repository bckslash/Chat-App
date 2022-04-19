export interface ChatScreenProps {
    chat: Chat;
    messages: string[];
}

export interface Chat {
    id: string;
    users: User[];
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


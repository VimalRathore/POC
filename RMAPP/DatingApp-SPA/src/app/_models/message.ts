export interface Message {
    id: number;
    senderId: number;
    senderKnowAs: string;
    senderPhotoUrl: string;
    recipientId: string;
    recipientKnownAs: string;
    recipientPhotoUrl: string;
    content: string;
    isRead: string;
    dateRead: Date;
    messageSent: Date;


}

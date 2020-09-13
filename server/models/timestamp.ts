export interface Timestamp {
    createdAt: Date;
    updatedAt: Date;
}

export const timeStampProps = {
    createdAt: {type: Date, required: true, default: Date.now},
    updatedAt: {type: Date, required: true, default: Date.now},
};
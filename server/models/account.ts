import { Timestamp, timeStampProps } from './timestamp';
import { Schema, Document, model } from "mongoose";

export interface Account extends Timestamp{
    name: string;
}

const schema = new Schema({
    name: {required: true, type: String},
    ...timeStampProps
});

export interface AccountDocument extends Account, Document {}

export const Accounts = model<AccountDocument>('account', schema);
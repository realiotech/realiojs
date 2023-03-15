/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.21.12
 * source: cosmos/crypto/hd/v1/hd.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../../../gogoproto/gogo";
import * as pb_1 from "google-protobuf";
export namespace cosmos.crypto.hd.v1 {
    export class BIP44Params extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            purpose?: number;
            coin_type?: number;
            account?: number;
            change?: boolean;
            address_index?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("purpose" in data && data.purpose != undefined) {
                    this.purpose = data.purpose;
                }
                if ("coin_type" in data && data.coin_type != undefined) {
                    this.coin_type = data.coin_type;
                }
                if ("account" in data && data.account != undefined) {
                    this.account = data.account;
                }
                if ("change" in data && data.change != undefined) {
                    this.change = data.change;
                }
                if ("address_index" in data && data.address_index != undefined) {
                    this.address_index = data.address_index;
                }
            }
        }
        get purpose() {
            return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
        }
        set purpose(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        get coin_type() {
            return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
        }
        set coin_type(value: number) {
            pb_1.Message.setField(this, 2, value);
        }
        get account() {
            return pb_1.Message.getFieldWithDefault(this, 3, 0) as number;
        }
        set account(value: number) {
            pb_1.Message.setField(this, 3, value);
        }
        get change() {
            return pb_1.Message.getFieldWithDefault(this, 4, false) as boolean;
        }
        set change(value: boolean) {
            pb_1.Message.setField(this, 4, value);
        }
        get address_index() {
            return pb_1.Message.getFieldWithDefault(this, 5, 0) as number;
        }
        set address_index(value: number) {
            pb_1.Message.setField(this, 5, value);
        }
        static fromObject(data: {
            purpose?: number;
            coin_type?: number;
            account?: number;
            change?: boolean;
            address_index?: number;
        }): BIP44Params {
            const message = new BIP44Params({});
            if (data.purpose != null) {
                message.purpose = data.purpose;
            }
            if (data.coin_type != null) {
                message.coin_type = data.coin_type;
            }
            if (data.account != null) {
                message.account = data.account;
            }
            if (data.change != null) {
                message.change = data.change;
            }
            if (data.address_index != null) {
                message.address_index = data.address_index;
            }
            return message;
        }
        toObject() {
            const data: {
                purpose?: number;
                coin_type?: number;
                account?: number;
                change?: boolean;
                address_index?: number;
            } = {};
            if (this.purpose != null) {
                data.purpose = this.purpose;
            }
            if (this.coin_type != null) {
                data.coin_type = this.coin_type;
            }
            if (this.account != null) {
                data.account = this.account;
            }
            if (this.change != null) {
                data.change = this.change;
            }
            if (this.address_index != null) {
                data.address_index = this.address_index;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.purpose != 0)
                writer.writeUint32(1, this.purpose);
            if (this.coin_type != 0)
                writer.writeUint32(2, this.coin_type);
            if (this.account != 0)
                writer.writeUint32(3, this.account);
            if (this.change != false)
                writer.writeBool(4, this.change);
            if (this.address_index != 0)
                writer.writeUint32(5, this.address_index);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): BIP44Params {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new BIP44Params();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.purpose = reader.readUint32();
                        break;
                    case 2:
                        message.coin_type = reader.readUint32();
                        break;
                    case 3:
                        message.account = reader.readUint32();
                        break;
                    case 4:
                        message.change = reader.readBool();
                        break;
                    case 5:
                        message.address_index = reader.readUint32();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): BIP44Params {
            return BIP44Params.deserialize(bytes);
        }
    }
}

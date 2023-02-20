// @ts-nocheck
/* eslint-disable */
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.21.12
 * source: cosmos/nft/v1beta1/event.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export namespace cosmos.nft.v1beta1 {
    export class EventSend extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            class_id?: string;
            id?: string;
            sender?: string;
            receiver?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("class_id" in data && data.class_id != undefined) {
                    this.class_id = data.class_id;
                }
                if ("id" in data && data.id != undefined) {
                    this.id = data.id;
                }
                if ("sender" in data && data.sender != undefined) {
                    this.sender = data.sender;
                }
                if ("receiver" in data && data.receiver != undefined) {
                    this.receiver = data.receiver;
                }
            }
        }
        get class_id() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set class_id(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get id() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set id(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get sender() {
            return pb_1.Message.getFieldWithDefault(this, 3, "") as string;
        }
        set sender(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        get receiver() {
            return pb_1.Message.getFieldWithDefault(this, 4, "") as string;
        }
        set receiver(value: string) {
            pb_1.Message.setField(this, 4, value);
        }
        static fromObject(data: {
            class_id?: string;
            id?: string;
            sender?: string;
            receiver?: string;
        }): EventSend {
            const message = new EventSend({});
            if (data.class_id != null) {
                message.class_id = data.class_id;
            }
            if (data.id != null) {
                message.id = data.id;
            }
            if (data.sender != null) {
                message.sender = data.sender;
            }
            if (data.receiver != null) {
                message.receiver = data.receiver;
            }
            return message;
        }
        toObject() {
            const data: {
                class_id?: string;
                id?: string;
                sender?: string;
                receiver?: string;
            } = {};
            if (this.class_id != null) {
                data.class_id = this.class_id;
            }
            if (this.id != null) {
                data.id = this.id;
            }
            if (this.sender != null) {
                data.sender = this.sender;
            }
            if (this.receiver != null) {
                data.receiver = this.receiver;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.class_id.length)
                writer.writeString(1, this.class_id);
            if (this.id.length)
                writer.writeString(2, this.id);
            if (this.sender.length)
                writer.writeString(3, this.sender);
            if (this.receiver.length)
                writer.writeString(4, this.receiver);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): EventSend {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new EventSend();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.class_id = reader.readString();
                        break;
                    case 2:
                        message.id = reader.readString();
                        break;
                    case 3:
                        message.sender = reader.readString();
                        break;
                    case 4:
                        message.receiver = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): EventSend {
            return EventSend.deserialize(bytes);
        }
    }
    export class EventMint extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            class_id?: string;
            id?: string;
            owner?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("class_id" in data && data.class_id != undefined) {
                    this.class_id = data.class_id;
                }
                if ("id" in data && data.id != undefined) {
                    this.id = data.id;
                }
                if ("owner" in data && data.owner != undefined) {
                    this.owner = data.owner;
                }
            }
        }
        get class_id() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set class_id(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get id() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set id(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get owner() {
            return pb_1.Message.getFieldWithDefault(this, 3, "") as string;
        }
        set owner(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        static fromObject(data: {
            class_id?: string;
            id?: string;
            owner?: string;
        }): EventMint {
            const message = new EventMint({});
            if (data.class_id != null) {
                message.class_id = data.class_id;
            }
            if (data.id != null) {
                message.id = data.id;
            }
            if (data.owner != null) {
                message.owner = data.owner;
            }
            return message;
        }
        toObject() {
            const data: {
                class_id?: string;
                id?: string;
                owner?: string;
            } = {};
            if (this.class_id != null) {
                data.class_id = this.class_id;
            }
            if (this.id != null) {
                data.id = this.id;
            }
            if (this.owner != null) {
                data.owner = this.owner;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.class_id.length)
                writer.writeString(1, this.class_id);
            if (this.id.length)
                writer.writeString(2, this.id);
            if (this.owner.length)
                writer.writeString(3, this.owner);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): EventMint {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new EventMint();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.class_id = reader.readString();
                        break;
                    case 2:
                        message.id = reader.readString();
                        break;
                    case 3:
                        message.owner = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): EventMint {
            return EventMint.deserialize(bytes);
        }
    }
    export class EventBurn extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            class_id?: string;
            id?: string;
            owner?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("class_id" in data && data.class_id != undefined) {
                    this.class_id = data.class_id;
                }
                if ("id" in data && data.id != undefined) {
                    this.id = data.id;
                }
                if ("owner" in data && data.owner != undefined) {
                    this.owner = data.owner;
                }
            }
        }
        get class_id() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set class_id(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get id() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set id(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get owner() {
            return pb_1.Message.getFieldWithDefault(this, 3, "") as string;
        }
        set owner(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        static fromObject(data: {
            class_id?: string;
            id?: string;
            owner?: string;
        }): EventBurn {
            const message = new EventBurn({});
            if (data.class_id != null) {
                message.class_id = data.class_id;
            }
            if (data.id != null) {
                message.id = data.id;
            }
            if (data.owner != null) {
                message.owner = data.owner;
            }
            return message;
        }
        toObject() {
            const data: {
                class_id?: string;
                id?: string;
                owner?: string;
            } = {};
            if (this.class_id != null) {
                data.class_id = this.class_id;
            }
            if (this.id != null) {
                data.id = this.id;
            }
            if (this.owner != null) {
                data.owner = this.owner;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.class_id.length)
                writer.writeString(1, this.class_id);
            if (this.id.length)
                writer.writeString(2, this.id);
            if (this.owner.length)
                writer.writeString(3, this.owner);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): EventBurn {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new EventBurn();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.class_id = reader.readString();
                        break;
                    case 2:
                        message.id = reader.readString();
                        break;
                    case 3:
                        message.owner = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): EventBurn {
            return EventBurn.deserialize(bytes);
        }
    }
}

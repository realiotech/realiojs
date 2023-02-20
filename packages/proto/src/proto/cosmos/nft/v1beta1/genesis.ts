// @ts-nocheck
/* eslint-disable */
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.21.12
 * source: cosmos/nft/v1beta1/genesis.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./nft";
import * as pb_1 from "google-protobuf";
export namespace cosmos.nft.v1beta1 {
    export class GenesisState extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            classes?: dependency_1.cosmos.nft.v1beta1.Class[];
            entries?: Entry[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1, 2], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("classes" in data && data.classes != undefined) {
                    this.classes = data.classes;
                }
                if ("entries" in data && data.entries != undefined) {
                    this.entries = data.entries;
                }
            }
        }
        get classes() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_1.cosmos.nft.v1beta1.Class, 1) as dependency_1.cosmos.nft.v1beta1.Class[];
        }
        set classes(value: dependency_1.cosmos.nft.v1beta1.Class[]) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
        }
        get entries() {
            return pb_1.Message.getRepeatedWrapperField(this, Entry, 2) as Entry[];
        }
        set entries(value: Entry[]) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
        }
        static fromObject(data: {
            classes?: ReturnType<typeof dependency_1.cosmos.nft.v1beta1.Class.prototype.toObject>[];
            entries?: ReturnType<typeof Entry.prototype.toObject>[];
        }): GenesisState {
            const message = new GenesisState({});
            if (data.classes != null) {
                message.classes = data.classes.map(item => dependency_1.cosmos.nft.v1beta1.Class.fromObject(item));
            }
            if (data.entries != null) {
                message.entries = data.entries.map(item => Entry.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                classes?: ReturnType<typeof dependency_1.cosmos.nft.v1beta1.Class.prototype.toObject>[];
                entries?: ReturnType<typeof Entry.prototype.toObject>[];
            } = {};
            if (this.classes != null) {
                data.classes = this.classes.map((item: dependency_1.cosmos.nft.v1beta1.Class) => item.toObject());
            }
            if (this.entries != null) {
                data.entries = this.entries.map((item: Entry) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.classes.length)
                writer.writeRepeatedMessage(1, this.classes, (item: dependency_1.cosmos.nft.v1beta1.Class) => item.serialize(writer));
            if (this.entries.length)
                writer.writeRepeatedMessage(2, this.entries, (item: Entry) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GenesisState {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GenesisState();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.classes, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_1.cosmos.nft.v1beta1.Class.deserialize(reader), dependency_1.cosmos.nft.v1beta1.Class));
                        break;
                    case 2:
                        reader.readMessage(message.entries, () => pb_1.Message.addToRepeatedWrapperField(message, 2, Entry.deserialize(reader), Entry));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): GenesisState {
            return GenesisState.deserialize(bytes);
        }
    }
    export class Entry extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            owner?: string;
            nfts?: dependency_1.cosmos.nft.v1beta1.NFT[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("owner" in data && data.owner != undefined) {
                    this.owner = data.owner;
                }
                if ("nfts" in data && data.nfts != undefined) {
                    this.nfts = data.nfts;
                }
            }
        }
        get owner() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set owner(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get nfts() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_1.cosmos.nft.v1beta1.NFT, 2) as dependency_1.cosmos.nft.v1beta1.NFT[];
        }
        set nfts(value: dependency_1.cosmos.nft.v1beta1.NFT[]) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
        }
        static fromObject(data: {
            owner?: string;
            nfts?: ReturnType<typeof dependency_1.cosmos.nft.v1beta1.NFT.prototype.toObject>[];
        }): Entry {
            const message = new Entry({});
            if (data.owner != null) {
                message.owner = data.owner;
            }
            if (data.nfts != null) {
                message.nfts = data.nfts.map(item => dependency_1.cosmos.nft.v1beta1.NFT.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                owner?: string;
                nfts?: ReturnType<typeof dependency_1.cosmos.nft.v1beta1.NFT.prototype.toObject>[];
            } = {};
            if (this.owner != null) {
                data.owner = this.owner;
            }
            if (this.nfts != null) {
                data.nfts = this.nfts.map((item: dependency_1.cosmos.nft.v1beta1.NFT) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.owner.length)
                writer.writeString(1, this.owner);
            if (this.nfts.length)
                writer.writeRepeatedMessage(2, this.nfts, (item: dependency_1.cosmos.nft.v1beta1.NFT) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Entry {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Entry();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.owner = reader.readString();
                        break;
                    case 2:
                        reader.readMessage(message.nfts, () => pb_1.Message.addToRepeatedWrapperField(message, 2, dependency_1.cosmos.nft.v1beta1.NFT.deserialize(reader), dependency_1.cosmos.nft.v1beta1.NFT));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Entry {
            return Entry.deserialize(bytes);
        }
    }
}

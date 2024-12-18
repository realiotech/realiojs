// @ts-nocheck
/* eslint-disable */
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 5.28.3
 * source: cosmos/base/store/v1beta1/listening.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../../../tendermint/abci/types";
import * as pb_1 from "google-protobuf";
export namespace cosmos.base.store.v1beta1 {
    export class StoreKVPair extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            store_key?: string;
            delete?: boolean;
            key?: Uint8Array;
            value?: Uint8Array;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("store_key" in data && data.store_key != undefined) {
                    this.store_key = data.store_key;
                }
                if ("delete" in data && data.delete != undefined) {
                    this.delete = data.delete;
                }
                if ("key" in data && data.key != undefined) {
                    this.key = data.key;
                }
                if ("value" in data && data.value != undefined) {
                    this.value = data.value;
                }
            }
        }
        get store_key() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set store_key(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get delete() {
            return pb_1.Message.getFieldWithDefault(this, 2, false) as boolean;
        }
        set delete(value: boolean) {
            pb_1.Message.setField(this, 2, value);
        }
        get key() {
            return pb_1.Message.getFieldWithDefault(this, 3, new Uint8Array(0)) as Uint8Array;
        }
        set key(value: Uint8Array) {
            pb_1.Message.setField(this, 3, value);
        }
        get value() {
            return pb_1.Message.getFieldWithDefault(this, 4, new Uint8Array(0)) as Uint8Array;
        }
        set value(value: Uint8Array) {
            pb_1.Message.setField(this, 4, value);
        }
        static fromObject(data: {
            store_key?: string;
            delete?: boolean;
            key?: Uint8Array;
            value?: Uint8Array;
        }): StoreKVPair {
            const message = new StoreKVPair({});
            if (data.store_key != null) {
                message.store_key = data.store_key;
            }
            if (data.delete != null) {
                message.delete = data.delete;
            }
            if (data.key != null) {
                message.key = data.key;
            }
            if (data.value != null) {
                message.value = data.value;
            }
            return message;
        }
        toObject() {
            const data: {
                store_key?: string;
                delete?: boolean;
                key?: Uint8Array;
                value?: Uint8Array;
            } = {};
            if (this.store_key != null) {
                data.store_key = this.store_key;
            }
            if (this.delete != null) {
                data.delete = this.delete;
            }
            if (this.key != null) {
                data.key = this.key;
            }
            if (this.value != null) {
                data.value = this.value;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.store_key.length)
                writer.writeString(1, this.store_key);
            if (this.delete != false)
                writer.writeBool(2, this.delete);
            if (this.key.length)
                writer.writeBytes(3, this.key);
            if (this.value.length)
                writer.writeBytes(4, this.value);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): StoreKVPair {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new StoreKVPair();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.store_key = reader.readString();
                        break;
                    case 2:
                        message.delete = reader.readBool();
                        break;
                    case 3:
                        message.key = reader.readBytes();
                        break;
                    case 4:
                        message.value = reader.readBytes();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): StoreKVPair {
            return StoreKVPair.deserialize(bytes);
        }
    }
    export class BlockMetadata extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            request_begin_block?: dependency_1.tendermint.abci.RequestBeginBlock;
            response_begin_block?: dependency_1.tendermint.abci.ResponseBeginBlock;
            deliver_txs?: BlockMetadata.DeliverTx[];
            request_end_block?: dependency_1.tendermint.abci.RequestEndBlock;
            response_end_block?: dependency_1.tendermint.abci.ResponseEndBlock;
            response_commit?: dependency_1.tendermint.abci.ResponseCommit;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [3], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("request_begin_block" in data && data.request_begin_block != undefined) {
                    this.request_begin_block = data.request_begin_block;
                }
                if ("response_begin_block" in data && data.response_begin_block != undefined) {
                    this.response_begin_block = data.response_begin_block;
                }
                if ("deliver_txs" in data && data.deliver_txs != undefined) {
                    this.deliver_txs = data.deliver_txs;
                }
                if ("request_end_block" in data && data.request_end_block != undefined) {
                    this.request_end_block = data.request_end_block;
                }
                if ("response_end_block" in data && data.response_end_block != undefined) {
                    this.response_end_block = data.response_end_block;
                }
                if ("response_commit" in data && data.response_commit != undefined) {
                    this.response_commit = data.response_commit;
                }
            }
        }
        get request_begin_block() {
            return pb_1.Message.getWrapperField(this, dependency_1.tendermint.abci.RequestBeginBlock, 1) as dependency_1.tendermint.abci.RequestBeginBlock;
        }
        set request_begin_block(value: dependency_1.tendermint.abci.RequestBeginBlock) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get has_request_begin_block() {
            return pb_1.Message.getField(this, 1) != null;
        }
        get response_begin_block() {
            return pb_1.Message.getWrapperField(this, dependency_1.tendermint.abci.ResponseBeginBlock, 2) as dependency_1.tendermint.abci.ResponseBeginBlock;
        }
        set response_begin_block(value: dependency_1.tendermint.abci.ResponseBeginBlock) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        get has_response_begin_block() {
            return pb_1.Message.getField(this, 2) != null;
        }
        get deliver_txs() {
            return pb_1.Message.getRepeatedWrapperField(this, BlockMetadata.DeliverTx, 3) as BlockMetadata.DeliverTx[];
        }
        set deliver_txs(value: BlockMetadata.DeliverTx[]) {
            pb_1.Message.setRepeatedWrapperField(this, 3, value);
        }
        get request_end_block() {
            return pb_1.Message.getWrapperField(this, dependency_1.tendermint.abci.RequestEndBlock, 4) as dependency_1.tendermint.abci.RequestEndBlock;
        }
        set request_end_block(value: dependency_1.tendermint.abci.RequestEndBlock) {
            pb_1.Message.setWrapperField(this, 4, value);
        }
        get has_request_end_block() {
            return pb_1.Message.getField(this, 4) != null;
        }
        get response_end_block() {
            return pb_1.Message.getWrapperField(this, dependency_1.tendermint.abci.ResponseEndBlock, 5) as dependency_1.tendermint.abci.ResponseEndBlock;
        }
        set response_end_block(value: dependency_1.tendermint.abci.ResponseEndBlock) {
            pb_1.Message.setWrapperField(this, 5, value);
        }
        get has_response_end_block() {
            return pb_1.Message.getField(this, 5) != null;
        }
        get response_commit() {
            return pb_1.Message.getWrapperField(this, dependency_1.tendermint.abci.ResponseCommit, 6) as dependency_1.tendermint.abci.ResponseCommit;
        }
        set response_commit(value: dependency_1.tendermint.abci.ResponseCommit) {
            pb_1.Message.setWrapperField(this, 6, value);
        }
        get has_response_commit() {
            return pb_1.Message.getField(this, 6) != null;
        }
        static fromObject(data: {
            request_begin_block?: ReturnType<typeof dependency_1.tendermint.abci.RequestBeginBlock.prototype.toObject>;
            response_begin_block?: ReturnType<typeof dependency_1.tendermint.abci.ResponseBeginBlock.prototype.toObject>;
            deliver_txs?: ReturnType<typeof BlockMetadata.DeliverTx.prototype.toObject>[];
            request_end_block?: ReturnType<typeof dependency_1.tendermint.abci.RequestEndBlock.prototype.toObject>;
            response_end_block?: ReturnType<typeof dependency_1.tendermint.abci.ResponseEndBlock.prototype.toObject>;
            response_commit?: ReturnType<typeof dependency_1.tendermint.abci.ResponseCommit.prototype.toObject>;
        }): BlockMetadata {
            const message = new BlockMetadata({});
            if (data.request_begin_block != null) {
                message.request_begin_block = dependency_1.tendermint.abci.RequestBeginBlock.fromObject(data.request_begin_block);
            }
            if (data.response_begin_block != null) {
                message.response_begin_block = dependency_1.tendermint.abci.ResponseBeginBlock.fromObject(data.response_begin_block);
            }
            if (data.deliver_txs != null) {
                message.deliver_txs = data.deliver_txs.map(item => BlockMetadata.DeliverTx.fromObject(item));
            }
            if (data.request_end_block != null) {
                message.request_end_block = dependency_1.tendermint.abci.RequestEndBlock.fromObject(data.request_end_block);
            }
            if (data.response_end_block != null) {
                message.response_end_block = dependency_1.tendermint.abci.ResponseEndBlock.fromObject(data.response_end_block);
            }
            if (data.response_commit != null) {
                message.response_commit = dependency_1.tendermint.abci.ResponseCommit.fromObject(data.response_commit);
            }
            return message;
        }
        toObject() {
            const data: {
                request_begin_block?: ReturnType<typeof dependency_1.tendermint.abci.RequestBeginBlock.prototype.toObject>;
                response_begin_block?: ReturnType<typeof dependency_1.tendermint.abci.ResponseBeginBlock.prototype.toObject>;
                deliver_txs?: ReturnType<typeof BlockMetadata.DeliverTx.prototype.toObject>[];
                request_end_block?: ReturnType<typeof dependency_1.tendermint.abci.RequestEndBlock.prototype.toObject>;
                response_end_block?: ReturnType<typeof dependency_1.tendermint.abci.ResponseEndBlock.prototype.toObject>;
                response_commit?: ReturnType<typeof dependency_1.tendermint.abci.ResponseCommit.prototype.toObject>;
            } = {};
            if (this.request_begin_block != null) {
                data.request_begin_block = this.request_begin_block.toObject();
            }
            if (this.response_begin_block != null) {
                data.response_begin_block = this.response_begin_block.toObject();
            }
            if (this.deliver_txs != null) {
                data.deliver_txs = this.deliver_txs.map((item: BlockMetadata.DeliverTx) => item.toObject());
            }
            if (this.request_end_block != null) {
                data.request_end_block = this.request_end_block.toObject();
            }
            if (this.response_end_block != null) {
                data.response_end_block = this.response_end_block.toObject();
            }
            if (this.response_commit != null) {
                data.response_commit = this.response_commit.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_request_begin_block)
                writer.writeMessage(1, this.request_begin_block, () => this.request_begin_block.serialize(writer));
            if (this.has_response_begin_block)
                writer.writeMessage(2, this.response_begin_block, () => this.response_begin_block.serialize(writer));
            if (this.deliver_txs.length)
                writer.writeRepeatedMessage(3, this.deliver_txs, (item: BlockMetadata.DeliverTx) => item.serialize(writer));
            if (this.has_request_end_block)
                writer.writeMessage(4, this.request_end_block, () => this.request_end_block.serialize(writer));
            if (this.has_response_end_block)
                writer.writeMessage(5, this.response_end_block, () => this.response_end_block.serialize(writer));
            if (this.has_response_commit)
                writer.writeMessage(6, this.response_commit, () => this.response_commit.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): BlockMetadata {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new BlockMetadata();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.request_begin_block, () => message.request_begin_block = dependency_1.tendermint.abci.RequestBeginBlock.deserialize(reader));
                        break;
                    case 2:
                        reader.readMessage(message.response_begin_block, () => message.response_begin_block = dependency_1.tendermint.abci.ResponseBeginBlock.deserialize(reader));
                        break;
                    case 3:
                        reader.readMessage(message.deliver_txs, () => pb_1.Message.addToRepeatedWrapperField(message, 3, BlockMetadata.DeliverTx.deserialize(reader), BlockMetadata.DeliverTx));
                        break;
                    case 4:
                        reader.readMessage(message.request_end_block, () => message.request_end_block = dependency_1.tendermint.abci.RequestEndBlock.deserialize(reader));
                        break;
                    case 5:
                        reader.readMessage(message.response_end_block, () => message.response_end_block = dependency_1.tendermint.abci.ResponseEndBlock.deserialize(reader));
                        break;
                    case 6:
                        reader.readMessage(message.response_commit, () => message.response_commit = dependency_1.tendermint.abci.ResponseCommit.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): BlockMetadata {
            return BlockMetadata.deserialize(bytes);
        }
    }
    export namespace BlockMetadata {
        export class DeliverTx extends pb_1.Message {
            #one_of_decls: number[][] = [];
            constructor(data?: any[] | {
                request?: dependency_1.tendermint.abci.RequestDeliverTx;
                response?: dependency_1.tendermint.abci.ResponseDeliverTx;
            }) {
                super();
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("request" in data && data.request != undefined) {
                        this.request = data.request;
                    }
                    if ("response" in data && data.response != undefined) {
                        this.response = data.response;
                    }
                }
            }
            get request() {
                return pb_1.Message.getWrapperField(this, dependency_1.tendermint.abci.RequestDeliverTx, 1) as dependency_1.tendermint.abci.RequestDeliverTx;
            }
            set request(value: dependency_1.tendermint.abci.RequestDeliverTx) {
                pb_1.Message.setWrapperField(this, 1, value);
            }
            get has_request() {
                return pb_1.Message.getField(this, 1) != null;
            }
            get response() {
                return pb_1.Message.getWrapperField(this, dependency_1.tendermint.abci.ResponseDeliverTx, 2) as dependency_1.tendermint.abci.ResponseDeliverTx;
            }
            set response(value: dependency_1.tendermint.abci.ResponseDeliverTx) {
                pb_1.Message.setWrapperField(this, 2, value);
            }
            get has_response() {
                return pb_1.Message.getField(this, 2) != null;
            }
            static fromObject(data: {
                request?: ReturnType<typeof dependency_1.tendermint.abci.RequestDeliverTx.prototype.toObject>;
                response?: ReturnType<typeof dependency_1.tendermint.abci.ResponseDeliverTx.prototype.toObject>;
            }): DeliverTx {
                const message = new DeliverTx({});
                if (data.request != null) {
                    message.request = dependency_1.tendermint.abci.RequestDeliverTx.fromObject(data.request);
                }
                if (data.response != null) {
                    message.response = dependency_1.tendermint.abci.ResponseDeliverTx.fromObject(data.response);
                }
                return message;
            }
            toObject() {
                const data: {
                    request?: ReturnType<typeof dependency_1.tendermint.abci.RequestDeliverTx.prototype.toObject>;
                    response?: ReturnType<typeof dependency_1.tendermint.abci.ResponseDeliverTx.prototype.toObject>;
                } = {};
                if (this.request != null) {
                    data.request = this.request.toObject();
                }
                if (this.response != null) {
                    data.response = this.response.toObject();
                }
                return data;
            }
            serialize(): Uint8Array;
            serialize(w: pb_1.BinaryWriter): void;
            serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
                const writer = w || new pb_1.BinaryWriter();
                if (this.has_request)
                    writer.writeMessage(1, this.request, () => this.request.serialize(writer));
                if (this.has_response)
                    writer.writeMessage(2, this.response, () => this.response.serialize(writer));
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes: Uint8Array | pb_1.BinaryReader): DeliverTx {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new DeliverTx();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            reader.readMessage(message.request, () => message.request = dependency_1.tendermint.abci.RequestDeliverTx.deserialize(reader));
                            break;
                        case 2:
                            reader.readMessage(message.response, () => message.response = dependency_1.tendermint.abci.ResponseDeliverTx.deserialize(reader));
                            break;
                        default: reader.skipField();
                    }
                }
                return message;
            }
            serializeBinary(): Uint8Array {
                return this.serialize();
            }
            static deserializeBinary(bytes: Uint8Array): DeliverTx {
                return DeliverTx.deserialize(bytes);
            }
        }
    }
}

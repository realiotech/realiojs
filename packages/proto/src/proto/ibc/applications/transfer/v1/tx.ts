/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.21.12
 * source: ibc/applications/transfer/v1/tx.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../../../gogoproto/gogo";
import * as dependency_2 from "./../../../../cosmos/base/v1beta1/coin";
import * as dependency_3 from "./../../../core/client/v1/client";
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export namespace ibc.applications.transfer.v1 {
    export class MsgTransfer extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            source_port?: string;
            source_channel?: string;
            token?: dependency_2.cosmos.base.v1beta1.Coin;
            sender?: string;
            receiver?: string;
            timeout_height?: dependency_3.ibc.core.client.v1.Height;
            timeout_timestamp?: number;
            memo?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("source_port" in data && data.source_port != undefined) {
                    this.source_port = data.source_port;
                }
                if ("source_channel" in data && data.source_channel != undefined) {
                    this.source_channel = data.source_channel;
                }
                if ("token" in data && data.token != undefined) {
                    this.token = data.token;
                }
                if ("sender" in data && data.sender != undefined) {
                    this.sender = data.sender;
                }
                if ("receiver" in data && data.receiver != undefined) {
                    this.receiver = data.receiver;
                }
                if ("timeout_height" in data && data.timeout_height != undefined) {
                    this.timeout_height = data.timeout_height;
                }
                if ("timeout_timestamp" in data && data.timeout_timestamp != undefined) {
                    this.timeout_timestamp = data.timeout_timestamp;
                }
                if ("memo" in data && data.memo != undefined) {
                    this.memo = data.memo;
                }
            }
        }
        get source_port() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set source_port(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get source_channel() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set source_channel(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get token() {
            return pb_1.Message.getWrapperField(this, dependency_2.cosmos.base.v1beta1.Coin, 3) as dependency_2.cosmos.base.v1beta1.Coin;
        }
        set token(value: dependency_2.cosmos.base.v1beta1.Coin) {
            pb_1.Message.setWrapperField(this, 3, value);
        }
        get has_token() {
            return pb_1.Message.getField(this, 3) != null;
        }
        get sender() {
            return pb_1.Message.getFieldWithDefault(this, 4, "") as string;
        }
        set sender(value: string) {
            pb_1.Message.setField(this, 4, value);
        }
        get receiver() {
            return pb_1.Message.getFieldWithDefault(this, 5, "") as string;
        }
        set receiver(value: string) {
            pb_1.Message.setField(this, 5, value);
        }
        get timeout_height() {
            return pb_1.Message.getWrapperField(this, dependency_3.ibc.core.client.v1.Height, 6) as dependency_3.ibc.core.client.v1.Height;
        }
        set timeout_height(value: dependency_3.ibc.core.client.v1.Height) {
            pb_1.Message.setWrapperField(this, 6, value);
        }
        get has_timeout_height() {
            return pb_1.Message.getField(this, 6) != null;
        }
        get timeout_timestamp() {
            return pb_1.Message.getFieldWithDefault(this, 7, 0) as number;
        }
        set timeout_timestamp(value: number) {
            pb_1.Message.setField(this, 7, value);
        }
        get memo() {
            return pb_1.Message.getFieldWithDefault(this, 8, "") as string;
        }
        set memo(value: string) {
            pb_1.Message.setField(this, 8, value);
        }
        static fromObject(data: {
            source_port?: string;
            source_channel?: string;
            token?: ReturnType<typeof dependency_2.cosmos.base.v1beta1.Coin.prototype.toObject>;
            sender?: string;
            receiver?: string;
            timeout_height?: ReturnType<typeof dependency_3.ibc.core.client.v1.Height.prototype.toObject>;
            timeout_timestamp?: number;
            memo?: string;
        }): MsgTransfer {
            const message = new MsgTransfer({});
            if (data.source_port != null) {
                message.source_port = data.source_port;
            }
            if (data.source_channel != null) {
                message.source_channel = data.source_channel;
            }
            if (data.token != null) {
                message.token = dependency_2.cosmos.base.v1beta1.Coin.fromObject(data.token);
            }
            if (data.sender != null) {
                message.sender = data.sender;
            }
            if (data.receiver != null) {
                message.receiver = data.receiver;
            }
            if (data.timeout_height != null) {
                message.timeout_height = dependency_3.ibc.core.client.v1.Height.fromObject(data.timeout_height);
            }
            if (data.timeout_timestamp != null) {
                message.timeout_timestamp = data.timeout_timestamp;
            }
            if (data.memo != null) {
                message.memo = data.memo;
            }
            return message;
        }
        toObject() {
            const data: {
                source_port?: string;
                source_channel?: string;
                token?: ReturnType<typeof dependency_2.cosmos.base.v1beta1.Coin.prototype.toObject>;
                sender?: string;
                receiver?: string;
                timeout_height?: ReturnType<typeof dependency_3.ibc.core.client.v1.Height.prototype.toObject>;
                timeout_timestamp?: number;
                memo?: string;
            } = {};
            if (this.source_port != null) {
                data.source_port = this.source_port;
            }
            if (this.source_channel != null) {
                data.source_channel = this.source_channel;
            }
            if (this.token != null) {
                data.token = this.token.toObject();
            }
            if (this.sender != null) {
                data.sender = this.sender;
            }
            if (this.receiver != null) {
                data.receiver = this.receiver;
            }
            if (this.timeout_height != null) {
                data.timeout_height = this.timeout_height.toObject();
            }
            if (this.timeout_timestamp != null) {
                data.timeout_timestamp = this.timeout_timestamp;
            }
            if (this.memo != null) {
                data.memo = this.memo;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.source_port.length)
                writer.writeString(1, this.source_port);
            if (this.source_channel.length)
                writer.writeString(2, this.source_channel);
            if (this.has_token)
                writer.writeMessage(3, this.token, () => this.token.serialize(writer));
            if (this.sender.length)
                writer.writeString(4, this.sender);
            if (this.receiver.length)
                writer.writeString(5, this.receiver);
            if (this.has_timeout_height)
                writer.writeMessage(6, this.timeout_height, () => this.timeout_height.serialize(writer));
            if (this.timeout_timestamp != 0)
                writer.writeUint64(7, this.timeout_timestamp);
            if (this.memo.length)
                writer.writeString(8, this.memo);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgTransfer {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgTransfer();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.source_port = reader.readString();
                        break;
                    case 2:
                        message.source_channel = reader.readString();
                        break;
                    case 3:
                        reader.readMessage(message.token, () => message.token = dependency_2.cosmos.base.v1beta1.Coin.deserialize(reader));
                        break;
                    case 4:
                        message.sender = reader.readString();
                        break;
                    case 5:
                        message.receiver = reader.readString();
                        break;
                    case 6:
                        reader.readMessage(message.timeout_height, () => message.timeout_height = dependency_3.ibc.core.client.v1.Height.deserialize(reader));
                        break;
                    case 7:
                        message.timeout_timestamp = reader.readUint64();
                        break;
                    case 8:
                        message.memo = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): MsgTransfer {
            return MsgTransfer.deserialize(bytes);
        }
    }
    export class MsgTransferResponse extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            sequence?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("sequence" in data && data.sequence != undefined) {
                    this.sequence = data.sequence;
                }
            }
        }
        get sequence() {
            return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
        }
        set sequence(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            sequence?: number;
        }): MsgTransferResponse {
            const message = new MsgTransferResponse({});
            if (data.sequence != null) {
                message.sequence = data.sequence;
            }
            return message;
        }
        toObject() {
            const data: {
                sequence?: number;
            } = {};
            if (this.sequence != null) {
                data.sequence = this.sequence;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.sequence != 0)
                writer.writeUint64(1, this.sequence);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgTransferResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgTransferResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.sequence = reader.readUint64();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): MsgTransferResponse {
            return MsgTransferResponse.deserialize(bytes);
        }
    }
    interface GrpcUnaryServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    }
    interface GrpcStreamServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options?: grpc_1.CallOptions): grpc_1.ClientReadableStream<R>;
        (message: P, options?: grpc_1.CallOptions): grpc_1.ClientReadableStream<R>;
    }
    interface GrpWritableServiceInterface<P, R> {
        (metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
        (metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
        (options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
        (callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
    }
    interface GrpcChunkServiceInterface<P, R> {
        (metadata: grpc_1.Metadata, options?: grpc_1.CallOptions): grpc_1.ClientDuplexStream<P, R>;
        (options?: grpc_1.CallOptions): grpc_1.ClientDuplexStream<P, R>;
    }
    interface GrpcPromiseServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options?: grpc_1.CallOptions): Promise<R>;
        (message: P, options?: grpc_1.CallOptions): Promise<R>;
    }
    export abstract class UnimplementedMsgService {
        static definition = {
            Transfer: {
                path: "/ibc.applications.transfer.v1.Msg/Transfer",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: MsgTransfer) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => MsgTransfer.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: MsgTransferResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => MsgTransferResponse.deserialize(new Uint8Array(bytes))
            }
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract Transfer(call: grpc_1.ServerUnaryCall<MsgTransfer, MsgTransferResponse>, callback: grpc_1.sendUnaryData<MsgTransferResponse>): void;
    }
    export class MsgClient extends grpc_1.makeGenericClientConstructor(UnimplementedMsgService.definition, "Msg", {}) {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>) {
            super(address, credentials, options);
        }
        Transfer: GrpcUnaryServiceInterface<MsgTransfer, MsgTransferResponse> = (message: MsgTransfer, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<MsgTransferResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<MsgTransferResponse>, callback?: grpc_1.requestCallback<MsgTransferResponse>): grpc_1.ClientUnaryCall => {
            return super.Transfer(message, metadata, options, callback);
        };
    }
}

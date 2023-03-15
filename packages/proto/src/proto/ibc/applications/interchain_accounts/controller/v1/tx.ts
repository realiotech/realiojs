/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.21.12
 * source: ibc/applications/interchain_accounts/controller/v1/tx.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../../../../gogoproto/gogo";
import * as dependency_2 from "./../../v1/packet";
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export namespace ibc.applications.interchain_accounts.controller.v1 {
    export class MsgRegisterInterchainAccount extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            owner?: string;
            connection_id?: string;
            version?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("owner" in data && data.owner != undefined) {
                    this.owner = data.owner;
                }
                if ("connection_id" in data && data.connection_id != undefined) {
                    this.connection_id = data.connection_id;
                }
                if ("version" in data && data.version != undefined) {
                    this.version = data.version;
                }
            }
        }
        get owner() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set owner(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get connection_id() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set connection_id(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get version() {
            return pb_1.Message.getFieldWithDefault(this, 3, "") as string;
        }
        set version(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        static fromObject(data: {
            owner?: string;
            connection_id?: string;
            version?: string;
        }): MsgRegisterInterchainAccount {
            const message = new MsgRegisterInterchainAccount({});
            if (data.owner != null) {
                message.owner = data.owner;
            }
            if (data.connection_id != null) {
                message.connection_id = data.connection_id;
            }
            if (data.version != null) {
                message.version = data.version;
            }
            return message;
        }
        toObject() {
            const data: {
                owner?: string;
                connection_id?: string;
                version?: string;
            } = {};
            if (this.owner != null) {
                data.owner = this.owner;
            }
            if (this.connection_id != null) {
                data.connection_id = this.connection_id;
            }
            if (this.version != null) {
                data.version = this.version;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.owner.length)
                writer.writeString(1, this.owner);
            if (this.connection_id.length)
                writer.writeString(2, this.connection_id);
            if (this.version.length)
                writer.writeString(3, this.version);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgRegisterInterchainAccount {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgRegisterInterchainAccount();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.owner = reader.readString();
                        break;
                    case 2:
                        message.connection_id = reader.readString();
                        break;
                    case 3:
                        message.version = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): MsgRegisterInterchainAccount {
            return MsgRegisterInterchainAccount.deserialize(bytes);
        }
    }
    export class MsgRegisterInterchainAccountResponse extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            channel_id?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("channel_id" in data && data.channel_id != undefined) {
                    this.channel_id = data.channel_id;
                }
            }
        }
        get channel_id() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set channel_id(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            channel_id?: string;
        }): MsgRegisterInterchainAccountResponse {
            const message = new MsgRegisterInterchainAccountResponse({});
            if (data.channel_id != null) {
                message.channel_id = data.channel_id;
            }
            return message;
        }
        toObject() {
            const data: {
                channel_id?: string;
            } = {};
            if (this.channel_id != null) {
                data.channel_id = this.channel_id;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.channel_id.length)
                writer.writeString(1, this.channel_id);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgRegisterInterchainAccountResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgRegisterInterchainAccountResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.channel_id = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): MsgRegisterInterchainAccountResponse {
            return MsgRegisterInterchainAccountResponse.deserialize(bytes);
        }
    }
    export class MsgSendTx extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            owner?: string;
            connection_id?: string;
            packet_data?: dependency_2.ibc.applications.interchain_accounts.v1.InterchainAccountPacketData;
            relative_timeout?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("owner" in data && data.owner != undefined) {
                    this.owner = data.owner;
                }
                if ("connection_id" in data && data.connection_id != undefined) {
                    this.connection_id = data.connection_id;
                }
                if ("packet_data" in data && data.packet_data != undefined) {
                    this.packet_data = data.packet_data;
                }
                if ("relative_timeout" in data && data.relative_timeout != undefined) {
                    this.relative_timeout = data.relative_timeout;
                }
            }
        }
        get owner() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set owner(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get connection_id() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set connection_id(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get packet_data() {
            return pb_1.Message.getWrapperField(this, dependency_2.ibc.applications.interchain_accounts.v1.InterchainAccountPacketData, 3) as dependency_2.ibc.applications.interchain_accounts.v1.InterchainAccountPacketData;
        }
        set packet_data(value: dependency_2.ibc.applications.interchain_accounts.v1.InterchainAccountPacketData) {
            pb_1.Message.setWrapperField(this, 3, value);
        }
        get has_packet_data() {
            return pb_1.Message.getField(this, 3) != null;
        }
        get relative_timeout() {
            return pb_1.Message.getFieldWithDefault(this, 4, 0) as number;
        }
        set relative_timeout(value: number) {
            pb_1.Message.setField(this, 4, value);
        }
        static fromObject(data: {
            owner?: string;
            connection_id?: string;
            packet_data?: ReturnType<typeof dependency_2.ibc.applications.interchain_accounts.v1.InterchainAccountPacketData.prototype.toObject>;
            relative_timeout?: number;
        }): MsgSendTx {
            const message = new MsgSendTx({});
            if (data.owner != null) {
                message.owner = data.owner;
            }
            if (data.connection_id != null) {
                message.connection_id = data.connection_id;
            }
            if (data.packet_data != null) {
                message.packet_data = dependency_2.ibc.applications.interchain_accounts.v1.InterchainAccountPacketData.fromObject(data.packet_data);
            }
            if (data.relative_timeout != null) {
                message.relative_timeout = data.relative_timeout;
            }
            return message;
        }
        toObject() {
            const data: {
                owner?: string;
                connection_id?: string;
                packet_data?: ReturnType<typeof dependency_2.ibc.applications.interchain_accounts.v1.InterchainAccountPacketData.prototype.toObject>;
                relative_timeout?: number;
            } = {};
            if (this.owner != null) {
                data.owner = this.owner;
            }
            if (this.connection_id != null) {
                data.connection_id = this.connection_id;
            }
            if (this.packet_data != null) {
                data.packet_data = this.packet_data.toObject();
            }
            if (this.relative_timeout != null) {
                data.relative_timeout = this.relative_timeout;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.owner.length)
                writer.writeString(1, this.owner);
            if (this.connection_id.length)
                writer.writeString(2, this.connection_id);
            if (this.has_packet_data)
                writer.writeMessage(3, this.packet_data, () => this.packet_data.serialize(writer));
            if (this.relative_timeout != 0)
                writer.writeUint64(4, this.relative_timeout);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgSendTx {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgSendTx();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.owner = reader.readString();
                        break;
                    case 2:
                        message.connection_id = reader.readString();
                        break;
                    case 3:
                        reader.readMessage(message.packet_data, () => message.packet_data = dependency_2.ibc.applications.interchain_accounts.v1.InterchainAccountPacketData.deserialize(reader));
                        break;
                    case 4:
                        message.relative_timeout = reader.readUint64();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): MsgSendTx {
            return MsgSendTx.deserialize(bytes);
        }
    }
    export class MsgSendTxResponse extends pb_1.Message {
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
        }): MsgSendTxResponse {
            const message = new MsgSendTxResponse({});
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
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgSendTxResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgSendTxResponse();
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
        static deserializeBinary(bytes: Uint8Array): MsgSendTxResponse {
            return MsgSendTxResponse.deserialize(bytes);
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
            RegisterInterchainAccount: {
                path: "/ibc.applications.interchain_accounts.controller.v1.Msg/RegisterInterchainAccount",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: MsgRegisterInterchainAccount) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => MsgRegisterInterchainAccount.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: MsgRegisterInterchainAccountResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => MsgRegisterInterchainAccountResponse.deserialize(new Uint8Array(bytes))
            },
            SendTx: {
                path: "/ibc.applications.interchain_accounts.controller.v1.Msg/SendTx",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: MsgSendTx) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => MsgSendTx.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: MsgSendTxResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => MsgSendTxResponse.deserialize(new Uint8Array(bytes))
            }
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract RegisterInterchainAccount(call: grpc_1.ServerUnaryCall<MsgRegisterInterchainAccount, MsgRegisterInterchainAccountResponse>, callback: grpc_1.sendUnaryData<MsgRegisterInterchainAccountResponse>): void;
        abstract SendTx(call: grpc_1.ServerUnaryCall<MsgSendTx, MsgSendTxResponse>, callback: grpc_1.sendUnaryData<MsgSendTxResponse>): void;
    }
    export class MsgClient extends grpc_1.makeGenericClientConstructor(UnimplementedMsgService.definition, "Msg", {}) {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>) {
            super(address, credentials, options);
        }
        RegisterInterchainAccount: GrpcUnaryServiceInterface<MsgRegisterInterchainAccount, MsgRegisterInterchainAccountResponse> = (message: MsgRegisterInterchainAccount, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<MsgRegisterInterchainAccountResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<MsgRegisterInterchainAccountResponse>, callback?: grpc_1.requestCallback<MsgRegisterInterchainAccountResponse>): grpc_1.ClientUnaryCall => {
            return super.RegisterInterchainAccount(message, metadata, options, callback);
        };
        SendTx: GrpcUnaryServiceInterface<MsgSendTx, MsgSendTxResponse> = (message: MsgSendTx, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<MsgSendTxResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<MsgSendTxResponse>, callback?: grpc_1.requestCallback<MsgSendTxResponse>): grpc_1.ClientUnaryCall => {
            return super.SendTx(message, metadata, options, callback);
        };
    }
}

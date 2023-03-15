/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.21.12
 * source: cosmos/slashing/v1beta1/tx.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../../gogoproto/gogo";
import * as dependency_2 from "./../../../cosmos_proto/cosmos";
import * as dependency_3 from "./../../msg/v1/msg";
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export namespace cosmos.slashing.v1beta1 {
    export class MsgUnjail extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            validator_addr?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("validator_addr" in data && data.validator_addr != undefined) {
                    this.validator_addr = data.validator_addr;
                }
            }
        }
        get validator_addr() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set validator_addr(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            validator_addr?: string;
        }): MsgUnjail {
            const message = new MsgUnjail({});
            if (data.validator_addr != null) {
                message.validator_addr = data.validator_addr;
            }
            return message;
        }
        toObject() {
            const data: {
                validator_addr?: string;
            } = {};
            if (this.validator_addr != null) {
                data.validator_addr = this.validator_addr;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.validator_addr.length)
                writer.writeString(1, this.validator_addr);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgUnjail {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgUnjail();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.validator_addr = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): MsgUnjail {
            return MsgUnjail.deserialize(bytes);
        }
    }
    export class MsgUnjailResponse extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {}) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") { }
        }
        static fromObject(data: {}): MsgUnjailResponse {
            const message = new MsgUnjailResponse({});
            return message;
        }
        toObject() {
            const data: {} = {};
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgUnjailResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgUnjailResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): MsgUnjailResponse {
            return MsgUnjailResponse.deserialize(bytes);
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
            Unjail: {
                path: "/cosmos.slashing.v1beta1.Msg/Unjail",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: MsgUnjail) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => MsgUnjail.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: MsgUnjailResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => MsgUnjailResponse.deserialize(new Uint8Array(bytes))
            }
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract Unjail(call: grpc_1.ServerUnaryCall<MsgUnjail, MsgUnjailResponse>, callback: grpc_1.sendUnaryData<MsgUnjailResponse>): void;
    }
    export class MsgClient extends grpc_1.makeGenericClientConstructor(UnimplementedMsgService.definition, "Msg", {}) {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>) {
            super(address, credentials, options);
        }
        Unjail: GrpcUnaryServiceInterface<MsgUnjail, MsgUnjailResponse> = (message: MsgUnjail, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<MsgUnjailResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<MsgUnjailResponse>, callback?: grpc_1.requestCallback<MsgUnjailResponse>): grpc_1.ClientUnaryCall => {
            return super.Unjail(message, metadata, options, callback);
        };
    }
}

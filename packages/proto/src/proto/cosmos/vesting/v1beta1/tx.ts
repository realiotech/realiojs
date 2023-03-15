/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.21.12
 * source: cosmos/vesting/v1beta1/tx.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../../gogoproto/gogo";
import * as dependency_2 from "./../../base/v1beta1/coin";
import * as dependency_3 from "./../../../cosmos_proto/cosmos";
import * as dependency_4 from "./vesting";
import * as dependency_5 from "./../../msg/v1/msg";
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export namespace cosmos.vesting.v1beta1 {
    export class MsgCreateVestingAccount extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            from_address?: string;
            to_address?: string;
            amount?: dependency_2.cosmos.base.v1beta1.Coin[];
            end_time?: number;
            delayed?: boolean;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [3], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("from_address" in data && data.from_address != undefined) {
                    this.from_address = data.from_address;
                }
                if ("to_address" in data && data.to_address != undefined) {
                    this.to_address = data.to_address;
                }
                if ("amount" in data && data.amount != undefined) {
                    this.amount = data.amount;
                }
                if ("end_time" in data && data.end_time != undefined) {
                    this.end_time = data.end_time;
                }
                if ("delayed" in data && data.delayed != undefined) {
                    this.delayed = data.delayed;
                }
            }
        }
        get from_address() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set from_address(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get to_address() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set to_address(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get amount() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_2.cosmos.base.v1beta1.Coin, 3) as dependency_2.cosmos.base.v1beta1.Coin[];
        }
        set amount(value: dependency_2.cosmos.base.v1beta1.Coin[]) {
            pb_1.Message.setRepeatedWrapperField(this, 3, value);
        }
        get end_time() {
            return pb_1.Message.getFieldWithDefault(this, 4, 0) as number;
        }
        set end_time(value: number) {
            pb_1.Message.setField(this, 4, value);
        }
        get delayed() {
            return pb_1.Message.getFieldWithDefault(this, 5, false) as boolean;
        }
        set delayed(value: boolean) {
            pb_1.Message.setField(this, 5, value);
        }
        static fromObject(data: {
            from_address?: string;
            to_address?: string;
            amount?: ReturnType<typeof dependency_2.cosmos.base.v1beta1.Coin.prototype.toObject>[];
            end_time?: number;
            delayed?: boolean;
        }): MsgCreateVestingAccount {
            const message = new MsgCreateVestingAccount({});
            if (data.from_address != null) {
                message.from_address = data.from_address;
            }
            if (data.to_address != null) {
                message.to_address = data.to_address;
            }
            if (data.amount != null) {
                message.amount = data.amount.map(item => dependency_2.cosmos.base.v1beta1.Coin.fromObject(item));
            }
            if (data.end_time != null) {
                message.end_time = data.end_time;
            }
            if (data.delayed != null) {
                message.delayed = data.delayed;
            }
            return message;
        }
        toObject() {
            const data: {
                from_address?: string;
                to_address?: string;
                amount?: ReturnType<typeof dependency_2.cosmos.base.v1beta1.Coin.prototype.toObject>[];
                end_time?: number;
                delayed?: boolean;
            } = {};
            if (this.from_address != null) {
                data.from_address = this.from_address;
            }
            if (this.to_address != null) {
                data.to_address = this.to_address;
            }
            if (this.amount != null) {
                data.amount = this.amount.map((item: dependency_2.cosmos.base.v1beta1.Coin) => item.toObject());
            }
            if (this.end_time != null) {
                data.end_time = this.end_time;
            }
            if (this.delayed != null) {
                data.delayed = this.delayed;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.from_address.length)
                writer.writeString(1, this.from_address);
            if (this.to_address.length)
                writer.writeString(2, this.to_address);
            if (this.amount.length)
                writer.writeRepeatedMessage(3, this.amount, (item: dependency_2.cosmos.base.v1beta1.Coin) => item.serialize(writer));
            if (this.end_time != 0)
                writer.writeInt64(4, this.end_time);
            if (this.delayed != false)
                writer.writeBool(5, this.delayed);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgCreateVestingAccount {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgCreateVestingAccount();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.from_address = reader.readString();
                        break;
                    case 2:
                        message.to_address = reader.readString();
                        break;
                    case 3:
                        reader.readMessage(message.amount, () => pb_1.Message.addToRepeatedWrapperField(message, 3, dependency_2.cosmos.base.v1beta1.Coin.deserialize(reader), dependency_2.cosmos.base.v1beta1.Coin));
                        break;
                    case 4:
                        message.end_time = reader.readInt64();
                        break;
                    case 5:
                        message.delayed = reader.readBool();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): MsgCreateVestingAccount {
            return MsgCreateVestingAccount.deserialize(bytes);
        }
    }
    export class MsgCreateVestingAccountResponse extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {}) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") { }
        }
        static fromObject(data: {}): MsgCreateVestingAccountResponse {
            const message = new MsgCreateVestingAccountResponse({});
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
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgCreateVestingAccountResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgCreateVestingAccountResponse();
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
        static deserializeBinary(bytes: Uint8Array): MsgCreateVestingAccountResponse {
            return MsgCreateVestingAccountResponse.deserialize(bytes);
        }
    }
    export class MsgCreatePermanentLockedAccount extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            from_address?: string;
            to_address?: string;
            amount?: dependency_2.cosmos.base.v1beta1.Coin[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [3], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("from_address" in data && data.from_address != undefined) {
                    this.from_address = data.from_address;
                }
                if ("to_address" in data && data.to_address != undefined) {
                    this.to_address = data.to_address;
                }
                if ("amount" in data && data.amount != undefined) {
                    this.amount = data.amount;
                }
            }
        }
        get from_address() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set from_address(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get to_address() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set to_address(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get amount() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_2.cosmos.base.v1beta1.Coin, 3) as dependency_2.cosmos.base.v1beta1.Coin[];
        }
        set amount(value: dependency_2.cosmos.base.v1beta1.Coin[]) {
            pb_1.Message.setRepeatedWrapperField(this, 3, value);
        }
        static fromObject(data: {
            from_address?: string;
            to_address?: string;
            amount?: ReturnType<typeof dependency_2.cosmos.base.v1beta1.Coin.prototype.toObject>[];
        }): MsgCreatePermanentLockedAccount {
            const message = new MsgCreatePermanentLockedAccount({});
            if (data.from_address != null) {
                message.from_address = data.from_address;
            }
            if (data.to_address != null) {
                message.to_address = data.to_address;
            }
            if (data.amount != null) {
                message.amount = data.amount.map(item => dependency_2.cosmos.base.v1beta1.Coin.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                from_address?: string;
                to_address?: string;
                amount?: ReturnType<typeof dependency_2.cosmos.base.v1beta1.Coin.prototype.toObject>[];
            } = {};
            if (this.from_address != null) {
                data.from_address = this.from_address;
            }
            if (this.to_address != null) {
                data.to_address = this.to_address;
            }
            if (this.amount != null) {
                data.amount = this.amount.map((item: dependency_2.cosmos.base.v1beta1.Coin) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.from_address.length)
                writer.writeString(1, this.from_address);
            if (this.to_address.length)
                writer.writeString(2, this.to_address);
            if (this.amount.length)
                writer.writeRepeatedMessage(3, this.amount, (item: dependency_2.cosmos.base.v1beta1.Coin) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgCreatePermanentLockedAccount {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgCreatePermanentLockedAccount();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.from_address = reader.readString();
                        break;
                    case 2:
                        message.to_address = reader.readString();
                        break;
                    case 3:
                        reader.readMessage(message.amount, () => pb_1.Message.addToRepeatedWrapperField(message, 3, dependency_2.cosmos.base.v1beta1.Coin.deserialize(reader), dependency_2.cosmos.base.v1beta1.Coin));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): MsgCreatePermanentLockedAccount {
            return MsgCreatePermanentLockedAccount.deserialize(bytes);
        }
    }
    export class MsgCreatePermanentLockedAccountResponse extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {}) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") { }
        }
        static fromObject(data: {}): MsgCreatePermanentLockedAccountResponse {
            const message = new MsgCreatePermanentLockedAccountResponse({});
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
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgCreatePermanentLockedAccountResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgCreatePermanentLockedAccountResponse();
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
        static deserializeBinary(bytes: Uint8Array): MsgCreatePermanentLockedAccountResponse {
            return MsgCreatePermanentLockedAccountResponse.deserialize(bytes);
        }
    }
    export class MsgCreatePeriodicVestingAccount extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            from_address?: string;
            to_address?: string;
            start_time?: number;
            vesting_periods?: dependency_4.cosmos.vesting.v1beta1.Period[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [4], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("from_address" in data && data.from_address != undefined) {
                    this.from_address = data.from_address;
                }
                if ("to_address" in data && data.to_address != undefined) {
                    this.to_address = data.to_address;
                }
                if ("start_time" in data && data.start_time != undefined) {
                    this.start_time = data.start_time;
                }
                if ("vesting_periods" in data && data.vesting_periods != undefined) {
                    this.vesting_periods = data.vesting_periods;
                }
            }
        }
        get from_address() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set from_address(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get to_address() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set to_address(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get start_time() {
            return pb_1.Message.getFieldWithDefault(this, 3, 0) as number;
        }
        set start_time(value: number) {
            pb_1.Message.setField(this, 3, value);
        }
        get vesting_periods() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_4.cosmos.vesting.v1beta1.Period, 4) as dependency_4.cosmos.vesting.v1beta1.Period[];
        }
        set vesting_periods(value: dependency_4.cosmos.vesting.v1beta1.Period[]) {
            pb_1.Message.setRepeatedWrapperField(this, 4, value);
        }
        static fromObject(data: {
            from_address?: string;
            to_address?: string;
            start_time?: number;
            vesting_periods?: ReturnType<typeof dependency_4.cosmos.vesting.v1beta1.Period.prototype.toObject>[];
        }): MsgCreatePeriodicVestingAccount {
            const message = new MsgCreatePeriodicVestingAccount({});
            if (data.from_address != null) {
                message.from_address = data.from_address;
            }
            if (data.to_address != null) {
                message.to_address = data.to_address;
            }
            if (data.start_time != null) {
                message.start_time = data.start_time;
            }
            if (data.vesting_periods != null) {
                message.vesting_periods = data.vesting_periods.map(item => dependency_4.cosmos.vesting.v1beta1.Period.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                from_address?: string;
                to_address?: string;
                start_time?: number;
                vesting_periods?: ReturnType<typeof dependency_4.cosmos.vesting.v1beta1.Period.prototype.toObject>[];
            } = {};
            if (this.from_address != null) {
                data.from_address = this.from_address;
            }
            if (this.to_address != null) {
                data.to_address = this.to_address;
            }
            if (this.start_time != null) {
                data.start_time = this.start_time;
            }
            if (this.vesting_periods != null) {
                data.vesting_periods = this.vesting_periods.map((item: dependency_4.cosmos.vesting.v1beta1.Period) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.from_address.length)
                writer.writeString(1, this.from_address);
            if (this.to_address.length)
                writer.writeString(2, this.to_address);
            if (this.start_time != 0)
                writer.writeInt64(3, this.start_time);
            if (this.vesting_periods.length)
                writer.writeRepeatedMessage(4, this.vesting_periods, (item: dependency_4.cosmos.vesting.v1beta1.Period) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgCreatePeriodicVestingAccount {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgCreatePeriodicVestingAccount();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.from_address = reader.readString();
                        break;
                    case 2:
                        message.to_address = reader.readString();
                        break;
                    case 3:
                        message.start_time = reader.readInt64();
                        break;
                    case 4:
                        reader.readMessage(message.vesting_periods, () => pb_1.Message.addToRepeatedWrapperField(message, 4, dependency_4.cosmos.vesting.v1beta1.Period.deserialize(reader), dependency_4.cosmos.vesting.v1beta1.Period));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): MsgCreatePeriodicVestingAccount {
            return MsgCreatePeriodicVestingAccount.deserialize(bytes);
        }
    }
    export class MsgCreatePeriodicVestingAccountResponse extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {}) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") { }
        }
        static fromObject(data: {}): MsgCreatePeriodicVestingAccountResponse {
            const message = new MsgCreatePeriodicVestingAccountResponse({});
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
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgCreatePeriodicVestingAccountResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgCreatePeriodicVestingAccountResponse();
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
        static deserializeBinary(bytes: Uint8Array): MsgCreatePeriodicVestingAccountResponse {
            return MsgCreatePeriodicVestingAccountResponse.deserialize(bytes);
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
            CreateVestingAccount: {
                path: "/cosmos.vesting.v1beta1.Msg/CreateVestingAccount",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: MsgCreateVestingAccount) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => MsgCreateVestingAccount.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: MsgCreateVestingAccountResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => MsgCreateVestingAccountResponse.deserialize(new Uint8Array(bytes))
            },
            CreatePermanentLockedAccount: {
                path: "/cosmos.vesting.v1beta1.Msg/CreatePermanentLockedAccount",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: MsgCreatePermanentLockedAccount) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => MsgCreatePermanentLockedAccount.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: MsgCreatePermanentLockedAccountResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => MsgCreatePermanentLockedAccountResponse.deserialize(new Uint8Array(bytes))
            },
            CreatePeriodicVestingAccount: {
                path: "/cosmos.vesting.v1beta1.Msg/CreatePeriodicVestingAccount",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: MsgCreatePeriodicVestingAccount) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => MsgCreatePeriodicVestingAccount.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: MsgCreatePeriodicVestingAccountResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => MsgCreatePeriodicVestingAccountResponse.deserialize(new Uint8Array(bytes))
            }
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract CreateVestingAccount(call: grpc_1.ServerUnaryCall<MsgCreateVestingAccount, MsgCreateVestingAccountResponse>, callback: grpc_1.sendUnaryData<MsgCreateVestingAccountResponse>): void;
        abstract CreatePermanentLockedAccount(call: grpc_1.ServerUnaryCall<MsgCreatePermanentLockedAccount, MsgCreatePermanentLockedAccountResponse>, callback: grpc_1.sendUnaryData<MsgCreatePermanentLockedAccountResponse>): void;
        abstract CreatePeriodicVestingAccount(call: grpc_1.ServerUnaryCall<MsgCreatePeriodicVestingAccount, MsgCreatePeriodicVestingAccountResponse>, callback: grpc_1.sendUnaryData<MsgCreatePeriodicVestingAccountResponse>): void;
    }
    export class MsgClient extends grpc_1.makeGenericClientConstructor(UnimplementedMsgService.definition, "Msg", {}) {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>) {
            super(address, credentials, options);
        }
        CreateVestingAccount: GrpcUnaryServiceInterface<MsgCreateVestingAccount, MsgCreateVestingAccountResponse> = (message: MsgCreateVestingAccount, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<MsgCreateVestingAccountResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<MsgCreateVestingAccountResponse>, callback?: grpc_1.requestCallback<MsgCreateVestingAccountResponse>): grpc_1.ClientUnaryCall => {
            return super.CreateVestingAccount(message, metadata, options, callback);
        };
        CreatePermanentLockedAccount: GrpcUnaryServiceInterface<MsgCreatePermanentLockedAccount, MsgCreatePermanentLockedAccountResponse> = (message: MsgCreatePermanentLockedAccount, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<MsgCreatePermanentLockedAccountResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<MsgCreatePermanentLockedAccountResponse>, callback?: grpc_1.requestCallback<MsgCreatePermanentLockedAccountResponse>): grpc_1.ClientUnaryCall => {
            return super.CreatePermanentLockedAccount(message, metadata, options, callback);
        };
        CreatePeriodicVestingAccount: GrpcUnaryServiceInterface<MsgCreatePeriodicVestingAccount, MsgCreatePeriodicVestingAccountResponse> = (message: MsgCreatePeriodicVestingAccount, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<MsgCreatePeriodicVestingAccountResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<MsgCreatePeriodicVestingAccountResponse>, callback?: grpc_1.requestCallback<MsgCreatePeriodicVestingAccountResponse>): grpc_1.ClientUnaryCall => {
            return super.CreatePeriodicVestingAccount(message, metadata, options, callback);
        };
    }
}

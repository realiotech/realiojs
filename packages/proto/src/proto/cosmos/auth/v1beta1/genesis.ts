// @ts-nocheck
/* eslint-disable */
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.21.12
 * source: cosmos/auth/v1beta1/genesis.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../../google/protobuf/any";
import * as dependency_3 from "./auth";
import * as pb_1 from "google-protobuf";
export namespace cosmos.auth.v1beta1 {
    export class GenesisState extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            params?: dependency_3.cosmos.auth.v1beta1.Params;
            accounts?: dependency_1.google.protobuf.Any[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("params" in data && data.params != undefined) {
                    this.params = data.params;
                }
                if ("accounts" in data && data.accounts != undefined) {
                    this.accounts = data.accounts;
                }
            }
        }
        get params() {
            return pb_1.Message.getWrapperField(this, dependency_3.cosmos.auth.v1beta1.Params, 1) as dependency_3.cosmos.auth.v1beta1.Params;
        }
        set params(value: dependency_3.cosmos.auth.v1beta1.Params) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get has_params() {
            return pb_1.Message.getField(this, 1) != null;
        }
        get accounts() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_1.google.protobuf.Any, 2) as dependency_1.google.protobuf.Any[];
        }
        set accounts(value: dependency_1.google.protobuf.Any[]) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
        }
        static fromObject(data: {
            params?: ReturnType<typeof dependency_3.cosmos.auth.v1beta1.Params.prototype.toObject>;
            accounts?: ReturnType<typeof dependency_1.google.protobuf.Any.prototype.toObject>[];
        }): GenesisState {
            const message = new GenesisState({});
            if (data.params != null) {
                message.params = dependency_3.cosmos.auth.v1beta1.Params.fromObject(data.params);
            }
            if (data.accounts != null) {
                message.accounts = data.accounts.map(item => dependency_1.google.protobuf.Any.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                params?: ReturnType<typeof dependency_3.cosmos.auth.v1beta1.Params.prototype.toObject>;
                accounts?: ReturnType<typeof dependency_1.google.protobuf.Any.prototype.toObject>[];
            } = {};
            if (this.params != null) {
                data.params = this.params.toObject();
            }
            if (this.accounts != null) {
                data.accounts = this.accounts.map((item: dependency_1.google.protobuf.Any) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_params)
                writer.writeMessage(1, this.params, () => this.params.serialize(writer));
            if (this.accounts.length)
                writer.writeRepeatedMessage(2, this.accounts, (item: dependency_1.google.protobuf.Any) => item.serialize(writer));
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
                        reader.readMessage(message.params, () => message.params = dependency_3.cosmos.auth.v1beta1.Params.deserialize(reader));
                        break;
                    case 2:
                        reader.readMessage(message.accounts, () => pb_1.Message.addToRepeatedWrapperField(message, 2, dependency_1.google.protobuf.Any.deserialize(reader), dependency_1.google.protobuf.Any));
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
}

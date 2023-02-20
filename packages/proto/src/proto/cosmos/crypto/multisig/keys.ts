// @ts-nocheck
/* eslint-disable */
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.21.12
 * source: cosmos/crypto/multisig/keys.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_2 from "./../../../google/protobuf/any";
import * as pb_1 from "google-protobuf";
export namespace cosmos.crypto.multisig {
    export class LegacyAminoPubKey extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            threshold?: number;
            public_keys?: dependency_2.google.protobuf.Any[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("threshold" in data && data.threshold != undefined) {
                    this.threshold = data.threshold;
                }
                if ("public_keys" in data && data.public_keys != undefined) {
                    this.public_keys = data.public_keys;
                }
            }
        }
        get threshold() {
            return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
        }
        set threshold(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        get public_keys() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_2.google.protobuf.Any, 2) as dependency_2.google.protobuf.Any[];
        }
        set public_keys(value: dependency_2.google.protobuf.Any[]) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
        }
        static fromObject(data: {
            threshold?: number;
            public_keys?: ReturnType<typeof dependency_2.google.protobuf.Any.prototype.toObject>[];
        }): LegacyAminoPubKey {
            const message = new LegacyAminoPubKey({});
            if (data.threshold != null) {
                message.threshold = data.threshold;
            }
            if (data.public_keys != null) {
                message.public_keys = data.public_keys.map(item => dependency_2.google.protobuf.Any.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                threshold?: number;
                public_keys?: ReturnType<typeof dependency_2.google.protobuf.Any.prototype.toObject>[];
            } = {};
            if (this.threshold != null) {
                data.threshold = this.threshold;
            }
            if (this.public_keys != null) {
                data.public_keys = this.public_keys.map((item: dependency_2.google.protobuf.Any) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.threshold != 0)
                writer.writeUint32(1, this.threshold);
            if (this.public_keys.length)
                writer.writeRepeatedMessage(2, this.public_keys, (item: dependency_2.google.protobuf.Any) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): LegacyAminoPubKey {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new LegacyAminoPubKey();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.threshold = reader.readUint32();
                        break;
                    case 2:
                        reader.readMessage(message.public_keys, () => pb_1.Message.addToRepeatedWrapperField(message, 2, dependency_2.google.protobuf.Any.deserialize(reader), dependency_2.google.protobuf.Any));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): LegacyAminoPubKey {
            return LegacyAminoPubKey.deserialize(bytes);
        }
    }
}

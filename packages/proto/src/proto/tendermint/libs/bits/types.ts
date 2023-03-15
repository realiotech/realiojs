/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.21.12
 * source: tendermint/libs/bits/types.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export namespace tendermint.libs.bits {
    export class BitArray extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            bits?: number;
            elems?: number[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("bits" in data && data.bits != undefined) {
                    this.bits = data.bits;
                }
                if ("elems" in data && data.elems != undefined) {
                    this.elems = data.elems;
                }
            }
        }
        get bits() {
            return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
        }
        set bits(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        get elems() {
            return pb_1.Message.getFieldWithDefault(this, 2, []) as number[];
        }
        set elems(value: number[]) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            bits?: number;
            elems?: number[];
        }): BitArray {
            const message = new BitArray({});
            if (data.bits != null) {
                message.bits = data.bits;
            }
            if (data.elems != null) {
                message.elems = data.elems;
            }
            return message;
        }
        toObject() {
            const data: {
                bits?: number;
                elems?: number[];
            } = {};
            if (this.bits != null) {
                data.bits = this.bits;
            }
            if (this.elems != null) {
                data.elems = this.elems;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.bits != 0)
                writer.writeInt64(1, this.bits);
            if (this.elems.length)
                writer.writePackedUint64(2, this.elems);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): BitArray {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new BitArray();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.bits = reader.readInt64();
                        break;
                    case 2:
                        message.elems = reader.readPackedUint64();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): BitArray {
            return BitArray.deserialize(bytes);
        }
    }
}

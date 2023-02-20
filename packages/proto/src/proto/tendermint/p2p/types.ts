// @ts-nocheck
/* eslint-disable */
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.21.12
 * source: tendermint/p2p/types.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export namespace tendermint.p2p {
    export class NetAddress extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            id?: string;
            ip?: string;
            port?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("id" in data && data.id != undefined) {
                    this.id = data.id;
                }
                if ("ip" in data && data.ip != undefined) {
                    this.ip = data.ip;
                }
                if ("port" in data && data.port != undefined) {
                    this.port = data.port;
                }
            }
        }
        get id() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set id(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get ip() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set ip(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get port() {
            return pb_1.Message.getFieldWithDefault(this, 3, 0) as number;
        }
        set port(value: number) {
            pb_1.Message.setField(this, 3, value);
        }
        static fromObject(data: {
            id?: string;
            ip?: string;
            port?: number;
        }): NetAddress {
            const message = new NetAddress({});
            if (data.id != null) {
                message.id = data.id;
            }
            if (data.ip != null) {
                message.ip = data.ip;
            }
            if (data.port != null) {
                message.port = data.port;
            }
            return message;
        }
        toObject() {
            const data: {
                id?: string;
                ip?: string;
                port?: number;
            } = {};
            if (this.id != null) {
                data.id = this.id;
            }
            if (this.ip != null) {
                data.ip = this.ip;
            }
            if (this.port != null) {
                data.port = this.port;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.id.length)
                writer.writeString(1, this.id);
            if (this.ip.length)
                writer.writeString(2, this.ip);
            if (this.port != 0)
                writer.writeUint32(3, this.port);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): NetAddress {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new NetAddress();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.id = reader.readString();
                        break;
                    case 2:
                        message.ip = reader.readString();
                        break;
                    case 3:
                        message.port = reader.readUint32();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): NetAddress {
            return NetAddress.deserialize(bytes);
        }
    }
    export class ProtocolVersion extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            p2p?: number;
            block?: number;
            app?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("p2p" in data && data.p2p != undefined) {
                    this.p2p = data.p2p;
                }
                if ("block" in data && data.block != undefined) {
                    this.block = data.block;
                }
                if ("app" in data && data.app != undefined) {
                    this.app = data.app;
                }
            }
        }
        get p2p() {
            return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
        }
        set p2p(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        get block() {
            return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
        }
        set block(value: number) {
            pb_1.Message.setField(this, 2, value);
        }
        get app() {
            return pb_1.Message.getFieldWithDefault(this, 3, 0) as number;
        }
        set app(value: number) {
            pb_1.Message.setField(this, 3, value);
        }
        static fromObject(data: {
            p2p?: number;
            block?: number;
            app?: number;
        }): ProtocolVersion {
            const message = new ProtocolVersion({});
            if (data.p2p != null) {
                message.p2p = data.p2p;
            }
            if (data.block != null) {
                message.block = data.block;
            }
            if (data.app != null) {
                message.app = data.app;
            }
            return message;
        }
        toObject() {
            const data: {
                p2p?: number;
                block?: number;
                app?: number;
            } = {};
            if (this.p2p != null) {
                data.p2p = this.p2p;
            }
            if (this.block != null) {
                data.block = this.block;
            }
            if (this.app != null) {
                data.app = this.app;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.p2p != 0)
                writer.writeUint64(1, this.p2p);
            if (this.block != 0)
                writer.writeUint64(2, this.block);
            if (this.app != 0)
                writer.writeUint64(3, this.app);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ProtocolVersion {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ProtocolVersion();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.p2p = reader.readUint64();
                        break;
                    case 2:
                        message.block = reader.readUint64();
                        break;
                    case 3:
                        message.app = reader.readUint64();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): ProtocolVersion {
            return ProtocolVersion.deserialize(bytes);
        }
    }
    export class DefaultNodeInfo extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            protocol_version?: ProtocolVersion;
            default_node_id?: string;
            listen_addr?: string;
            network?: string;
            version?: string;
            channels?: Uint8Array;
            moniker?: string;
            other?: DefaultNodeInfoOther;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("protocol_version" in data && data.protocol_version != undefined) {
                    this.protocol_version = data.protocol_version;
                }
                if ("default_node_id" in data && data.default_node_id != undefined) {
                    this.default_node_id = data.default_node_id;
                }
                if ("listen_addr" in data && data.listen_addr != undefined) {
                    this.listen_addr = data.listen_addr;
                }
                if ("network" in data && data.network != undefined) {
                    this.network = data.network;
                }
                if ("version" in data && data.version != undefined) {
                    this.version = data.version;
                }
                if ("channels" in data && data.channels != undefined) {
                    this.channels = data.channels;
                }
                if ("moniker" in data && data.moniker != undefined) {
                    this.moniker = data.moniker;
                }
                if ("other" in data && data.other != undefined) {
                    this.other = data.other;
                }
            }
        }
        get protocol_version() {
            return pb_1.Message.getWrapperField(this, ProtocolVersion, 1) as ProtocolVersion;
        }
        set protocol_version(value: ProtocolVersion) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get has_protocol_version() {
            return pb_1.Message.getField(this, 1) != null;
        }
        get default_node_id() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set default_node_id(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get listen_addr() {
            return pb_1.Message.getFieldWithDefault(this, 3, "") as string;
        }
        set listen_addr(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        get network() {
            return pb_1.Message.getFieldWithDefault(this, 4, "") as string;
        }
        set network(value: string) {
            pb_1.Message.setField(this, 4, value);
        }
        get version() {
            return pb_1.Message.getFieldWithDefault(this, 5, "") as string;
        }
        set version(value: string) {
            pb_1.Message.setField(this, 5, value);
        }
        get channels() {
            return pb_1.Message.getFieldWithDefault(this, 6, new Uint8Array()) as Uint8Array;
        }
        set channels(value: Uint8Array) {
            pb_1.Message.setField(this, 6, value);
        }
        get moniker() {
            return pb_1.Message.getFieldWithDefault(this, 7, "") as string;
        }
        set moniker(value: string) {
            pb_1.Message.setField(this, 7, value);
        }
        get other() {
            return pb_1.Message.getWrapperField(this, DefaultNodeInfoOther, 8) as DefaultNodeInfoOther;
        }
        set other(value: DefaultNodeInfoOther) {
            pb_1.Message.setWrapperField(this, 8, value);
        }
        get has_other() {
            return pb_1.Message.getField(this, 8) != null;
        }
        static fromObject(data: {
            protocol_version?: ReturnType<typeof ProtocolVersion.prototype.toObject>;
            default_node_id?: string;
            listen_addr?: string;
            network?: string;
            version?: string;
            channels?: Uint8Array;
            moniker?: string;
            other?: ReturnType<typeof DefaultNodeInfoOther.prototype.toObject>;
        }): DefaultNodeInfo {
            const message = new DefaultNodeInfo({});
            if (data.protocol_version != null) {
                message.protocol_version = ProtocolVersion.fromObject(data.protocol_version);
            }
            if (data.default_node_id != null) {
                message.default_node_id = data.default_node_id;
            }
            if (data.listen_addr != null) {
                message.listen_addr = data.listen_addr;
            }
            if (data.network != null) {
                message.network = data.network;
            }
            if (data.version != null) {
                message.version = data.version;
            }
            if (data.channels != null) {
                message.channels = data.channels;
            }
            if (data.moniker != null) {
                message.moniker = data.moniker;
            }
            if (data.other != null) {
                message.other = DefaultNodeInfoOther.fromObject(data.other);
            }
            return message;
        }
        toObject() {
            const data: {
                protocol_version?: ReturnType<typeof ProtocolVersion.prototype.toObject>;
                default_node_id?: string;
                listen_addr?: string;
                network?: string;
                version?: string;
                channels?: Uint8Array;
                moniker?: string;
                other?: ReturnType<typeof DefaultNodeInfoOther.prototype.toObject>;
            } = {};
            if (this.protocol_version != null) {
                data.protocol_version = this.protocol_version.toObject();
            }
            if (this.default_node_id != null) {
                data.default_node_id = this.default_node_id;
            }
            if (this.listen_addr != null) {
                data.listen_addr = this.listen_addr;
            }
            if (this.network != null) {
                data.network = this.network;
            }
            if (this.version != null) {
                data.version = this.version;
            }
            if (this.channels != null) {
                data.channels = this.channels;
            }
            if (this.moniker != null) {
                data.moniker = this.moniker;
            }
            if (this.other != null) {
                data.other = this.other.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_protocol_version)
                writer.writeMessage(1, this.protocol_version, () => this.protocol_version.serialize(writer));
            if (this.default_node_id.length)
                writer.writeString(2, this.default_node_id);
            if (this.listen_addr.length)
                writer.writeString(3, this.listen_addr);
            if (this.network.length)
                writer.writeString(4, this.network);
            if (this.version.length)
                writer.writeString(5, this.version);
            if (this.channels.length)
                writer.writeBytes(6, this.channels);
            if (this.moniker.length)
                writer.writeString(7, this.moniker);
            if (this.has_other)
                writer.writeMessage(8, this.other, () => this.other.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): DefaultNodeInfo {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new DefaultNodeInfo();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.protocol_version, () => message.protocol_version = ProtocolVersion.deserialize(reader));
                        break;
                    case 2:
                        message.default_node_id = reader.readString();
                        break;
                    case 3:
                        message.listen_addr = reader.readString();
                        break;
                    case 4:
                        message.network = reader.readString();
                        break;
                    case 5:
                        message.version = reader.readString();
                        break;
                    case 6:
                        message.channels = reader.readBytes();
                        break;
                    case 7:
                        message.moniker = reader.readString();
                        break;
                    case 8:
                        reader.readMessage(message.other, () => message.other = DefaultNodeInfoOther.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): DefaultNodeInfo {
            return DefaultNodeInfo.deserialize(bytes);
        }
    }
    export class DefaultNodeInfoOther extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            tx_index?: string;
            rpc_address?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("tx_index" in data && data.tx_index != undefined) {
                    this.tx_index = data.tx_index;
                }
                if ("rpc_address" in data && data.rpc_address != undefined) {
                    this.rpc_address = data.rpc_address;
                }
            }
        }
        get tx_index() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set tx_index(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get rpc_address() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set rpc_address(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            tx_index?: string;
            rpc_address?: string;
        }): DefaultNodeInfoOther {
            const message = new DefaultNodeInfoOther({});
            if (data.tx_index != null) {
                message.tx_index = data.tx_index;
            }
            if (data.rpc_address != null) {
                message.rpc_address = data.rpc_address;
            }
            return message;
        }
        toObject() {
            const data: {
                tx_index?: string;
                rpc_address?: string;
            } = {};
            if (this.tx_index != null) {
                data.tx_index = this.tx_index;
            }
            if (this.rpc_address != null) {
                data.rpc_address = this.rpc_address;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.tx_index.length)
                writer.writeString(1, this.tx_index);
            if (this.rpc_address.length)
                writer.writeString(2, this.rpc_address);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): DefaultNodeInfoOther {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new DefaultNodeInfoOther();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.tx_index = reader.readString();
                        break;
                    case 2:
                        message.rpc_address = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): DefaultNodeInfoOther {
            return DefaultNodeInfoOther.deserialize(bytes);
        }
    }
}

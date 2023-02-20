// @ts-nocheck
/* eslint-disable */
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.21.12
 * source: ibc/applications/fee/v1/genesis.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_2 from "./fee";
import * as dependency_3 from "./../../../core/channel/v1/channel";
import * as pb_1 from "google-protobuf";
export namespace ibc.applications.fee.v1 {
    export class GenesisState extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            identified_fees?: dependency_2.ibc.applications.fee.v1.IdentifiedPacketFees[];
            fee_enabled_channels?: FeeEnabledChannel[];
            registered_payees?: RegisteredPayee[];
            registered_counterparty_payees?: RegisteredCounterpartyPayee[];
            forward_relayers?: ForwardRelayerAddress[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1, 2, 3, 4, 5], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("identified_fees" in data && data.identified_fees != undefined) {
                    this.identified_fees = data.identified_fees;
                }
                if ("fee_enabled_channels" in data && data.fee_enabled_channels != undefined) {
                    this.fee_enabled_channels = data.fee_enabled_channels;
                }
                if ("registered_payees" in data && data.registered_payees != undefined) {
                    this.registered_payees = data.registered_payees;
                }
                if ("registered_counterparty_payees" in data && data.registered_counterparty_payees != undefined) {
                    this.registered_counterparty_payees = data.registered_counterparty_payees;
                }
                if ("forward_relayers" in data && data.forward_relayers != undefined) {
                    this.forward_relayers = data.forward_relayers;
                }
            }
        }
        get identified_fees() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_2.ibc.applications.fee.v1.IdentifiedPacketFees, 1) as dependency_2.ibc.applications.fee.v1.IdentifiedPacketFees[];
        }
        set identified_fees(value: dependency_2.ibc.applications.fee.v1.IdentifiedPacketFees[]) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
        }
        get fee_enabled_channels() {
            return pb_1.Message.getRepeatedWrapperField(this, FeeEnabledChannel, 2) as FeeEnabledChannel[];
        }
        set fee_enabled_channels(value: FeeEnabledChannel[]) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
        }
        get registered_payees() {
            return pb_1.Message.getRepeatedWrapperField(this, RegisteredPayee, 3) as RegisteredPayee[];
        }
        set registered_payees(value: RegisteredPayee[]) {
            pb_1.Message.setRepeatedWrapperField(this, 3, value);
        }
        get registered_counterparty_payees() {
            return pb_1.Message.getRepeatedWrapperField(this, RegisteredCounterpartyPayee, 4) as RegisteredCounterpartyPayee[];
        }
        set registered_counterparty_payees(value: RegisteredCounterpartyPayee[]) {
            pb_1.Message.setRepeatedWrapperField(this, 4, value);
        }
        get forward_relayers() {
            return pb_1.Message.getRepeatedWrapperField(this, ForwardRelayerAddress, 5) as ForwardRelayerAddress[];
        }
        set forward_relayers(value: ForwardRelayerAddress[]) {
            pb_1.Message.setRepeatedWrapperField(this, 5, value);
        }
        static fromObject(data: {
            identified_fees?: ReturnType<typeof dependency_2.ibc.applications.fee.v1.IdentifiedPacketFees.prototype.toObject>[];
            fee_enabled_channels?: ReturnType<typeof FeeEnabledChannel.prototype.toObject>[];
            registered_payees?: ReturnType<typeof RegisteredPayee.prototype.toObject>[];
            registered_counterparty_payees?: ReturnType<typeof RegisteredCounterpartyPayee.prototype.toObject>[];
            forward_relayers?: ReturnType<typeof ForwardRelayerAddress.prototype.toObject>[];
        }): GenesisState {
            const message = new GenesisState({});
            if (data.identified_fees != null) {
                message.identified_fees = data.identified_fees.map(item => dependency_2.ibc.applications.fee.v1.IdentifiedPacketFees.fromObject(item));
            }
            if (data.fee_enabled_channels != null) {
                message.fee_enabled_channels = data.fee_enabled_channels.map(item => FeeEnabledChannel.fromObject(item));
            }
            if (data.registered_payees != null) {
                message.registered_payees = data.registered_payees.map(item => RegisteredPayee.fromObject(item));
            }
            if (data.registered_counterparty_payees != null) {
                message.registered_counterparty_payees = data.registered_counterparty_payees.map(item => RegisteredCounterpartyPayee.fromObject(item));
            }
            if (data.forward_relayers != null) {
                message.forward_relayers = data.forward_relayers.map(item => ForwardRelayerAddress.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                identified_fees?: ReturnType<typeof dependency_2.ibc.applications.fee.v1.IdentifiedPacketFees.prototype.toObject>[];
                fee_enabled_channels?: ReturnType<typeof FeeEnabledChannel.prototype.toObject>[];
                registered_payees?: ReturnType<typeof RegisteredPayee.prototype.toObject>[];
                registered_counterparty_payees?: ReturnType<typeof RegisteredCounterpartyPayee.prototype.toObject>[];
                forward_relayers?: ReturnType<typeof ForwardRelayerAddress.prototype.toObject>[];
            } = {};
            if (this.identified_fees != null) {
                data.identified_fees = this.identified_fees.map((item: dependency_2.ibc.applications.fee.v1.IdentifiedPacketFees) => item.toObject());
            }
            if (this.fee_enabled_channels != null) {
                data.fee_enabled_channels = this.fee_enabled_channels.map((item: FeeEnabledChannel) => item.toObject());
            }
            if (this.registered_payees != null) {
                data.registered_payees = this.registered_payees.map((item: RegisteredPayee) => item.toObject());
            }
            if (this.registered_counterparty_payees != null) {
                data.registered_counterparty_payees = this.registered_counterparty_payees.map((item: RegisteredCounterpartyPayee) => item.toObject());
            }
            if (this.forward_relayers != null) {
                data.forward_relayers = this.forward_relayers.map((item: ForwardRelayerAddress) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.identified_fees.length)
                writer.writeRepeatedMessage(1, this.identified_fees, (item: dependency_2.ibc.applications.fee.v1.IdentifiedPacketFees) => item.serialize(writer));
            if (this.fee_enabled_channels.length)
                writer.writeRepeatedMessage(2, this.fee_enabled_channels, (item: FeeEnabledChannel) => item.serialize(writer));
            if (this.registered_payees.length)
                writer.writeRepeatedMessage(3, this.registered_payees, (item: RegisteredPayee) => item.serialize(writer));
            if (this.registered_counterparty_payees.length)
                writer.writeRepeatedMessage(4, this.registered_counterparty_payees, (item: RegisteredCounterpartyPayee) => item.serialize(writer));
            if (this.forward_relayers.length)
                writer.writeRepeatedMessage(5, this.forward_relayers, (item: ForwardRelayerAddress) => item.serialize(writer));
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
                        reader.readMessage(message.identified_fees, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_2.ibc.applications.fee.v1.IdentifiedPacketFees.deserialize(reader), dependency_2.ibc.applications.fee.v1.IdentifiedPacketFees));
                        break;
                    case 2:
                        reader.readMessage(message.fee_enabled_channels, () => pb_1.Message.addToRepeatedWrapperField(message, 2, FeeEnabledChannel.deserialize(reader), FeeEnabledChannel));
                        break;
                    case 3:
                        reader.readMessage(message.registered_payees, () => pb_1.Message.addToRepeatedWrapperField(message, 3, RegisteredPayee.deserialize(reader), RegisteredPayee));
                        break;
                    case 4:
                        reader.readMessage(message.registered_counterparty_payees, () => pb_1.Message.addToRepeatedWrapperField(message, 4, RegisteredCounterpartyPayee.deserialize(reader), RegisteredCounterpartyPayee));
                        break;
                    case 5:
                        reader.readMessage(message.forward_relayers, () => pb_1.Message.addToRepeatedWrapperField(message, 5, ForwardRelayerAddress.deserialize(reader), ForwardRelayerAddress));
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
    export class FeeEnabledChannel extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            port_id?: string;
            channel_id?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("port_id" in data && data.port_id != undefined) {
                    this.port_id = data.port_id;
                }
                if ("channel_id" in data && data.channel_id != undefined) {
                    this.channel_id = data.channel_id;
                }
            }
        }
        get port_id() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set port_id(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get channel_id() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set channel_id(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            port_id?: string;
            channel_id?: string;
        }): FeeEnabledChannel {
            const message = new FeeEnabledChannel({});
            if (data.port_id != null) {
                message.port_id = data.port_id;
            }
            if (data.channel_id != null) {
                message.channel_id = data.channel_id;
            }
            return message;
        }
        toObject() {
            const data: {
                port_id?: string;
                channel_id?: string;
            } = {};
            if (this.port_id != null) {
                data.port_id = this.port_id;
            }
            if (this.channel_id != null) {
                data.channel_id = this.channel_id;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.port_id.length)
                writer.writeString(1, this.port_id);
            if (this.channel_id.length)
                writer.writeString(2, this.channel_id);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): FeeEnabledChannel {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new FeeEnabledChannel();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.port_id = reader.readString();
                        break;
                    case 2:
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
        static deserializeBinary(bytes: Uint8Array): FeeEnabledChannel {
            return FeeEnabledChannel.deserialize(bytes);
        }
    }
    export class RegisteredPayee extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            channel_id?: string;
            relayer?: string;
            payee?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("channel_id" in data && data.channel_id != undefined) {
                    this.channel_id = data.channel_id;
                }
                if ("relayer" in data && data.relayer != undefined) {
                    this.relayer = data.relayer;
                }
                if ("payee" in data && data.payee != undefined) {
                    this.payee = data.payee;
                }
            }
        }
        get channel_id() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set channel_id(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get relayer() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set relayer(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get payee() {
            return pb_1.Message.getFieldWithDefault(this, 3, "") as string;
        }
        set payee(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        static fromObject(data: {
            channel_id?: string;
            relayer?: string;
            payee?: string;
        }): RegisteredPayee {
            const message = new RegisteredPayee({});
            if (data.channel_id != null) {
                message.channel_id = data.channel_id;
            }
            if (data.relayer != null) {
                message.relayer = data.relayer;
            }
            if (data.payee != null) {
                message.payee = data.payee;
            }
            return message;
        }
        toObject() {
            const data: {
                channel_id?: string;
                relayer?: string;
                payee?: string;
            } = {};
            if (this.channel_id != null) {
                data.channel_id = this.channel_id;
            }
            if (this.relayer != null) {
                data.relayer = this.relayer;
            }
            if (this.payee != null) {
                data.payee = this.payee;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.channel_id.length)
                writer.writeString(1, this.channel_id);
            if (this.relayer.length)
                writer.writeString(2, this.relayer);
            if (this.payee.length)
                writer.writeString(3, this.payee);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): RegisteredPayee {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new RegisteredPayee();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.channel_id = reader.readString();
                        break;
                    case 2:
                        message.relayer = reader.readString();
                        break;
                    case 3:
                        message.payee = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): RegisteredPayee {
            return RegisteredPayee.deserialize(bytes);
        }
    }
    export class RegisteredCounterpartyPayee extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            channel_id?: string;
            relayer?: string;
            counterparty_payee?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("channel_id" in data && data.channel_id != undefined) {
                    this.channel_id = data.channel_id;
                }
                if ("relayer" in data && data.relayer != undefined) {
                    this.relayer = data.relayer;
                }
                if ("counterparty_payee" in data && data.counterparty_payee != undefined) {
                    this.counterparty_payee = data.counterparty_payee;
                }
            }
        }
        get channel_id() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set channel_id(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get relayer() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set relayer(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get counterparty_payee() {
            return pb_1.Message.getFieldWithDefault(this, 3, "") as string;
        }
        set counterparty_payee(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        static fromObject(data: {
            channel_id?: string;
            relayer?: string;
            counterparty_payee?: string;
        }): RegisteredCounterpartyPayee {
            const message = new RegisteredCounterpartyPayee({});
            if (data.channel_id != null) {
                message.channel_id = data.channel_id;
            }
            if (data.relayer != null) {
                message.relayer = data.relayer;
            }
            if (data.counterparty_payee != null) {
                message.counterparty_payee = data.counterparty_payee;
            }
            return message;
        }
        toObject() {
            const data: {
                channel_id?: string;
                relayer?: string;
                counterparty_payee?: string;
            } = {};
            if (this.channel_id != null) {
                data.channel_id = this.channel_id;
            }
            if (this.relayer != null) {
                data.relayer = this.relayer;
            }
            if (this.counterparty_payee != null) {
                data.counterparty_payee = this.counterparty_payee;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.channel_id.length)
                writer.writeString(1, this.channel_id);
            if (this.relayer.length)
                writer.writeString(2, this.relayer);
            if (this.counterparty_payee.length)
                writer.writeString(3, this.counterparty_payee);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): RegisteredCounterpartyPayee {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new RegisteredCounterpartyPayee();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.channel_id = reader.readString();
                        break;
                    case 2:
                        message.relayer = reader.readString();
                        break;
                    case 3:
                        message.counterparty_payee = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): RegisteredCounterpartyPayee {
            return RegisteredCounterpartyPayee.deserialize(bytes);
        }
    }
    export class ForwardRelayerAddress extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            address?: string;
            packet_id?: dependency_3.ibc.core.channel.v1.PacketId;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("address" in data && data.address != undefined) {
                    this.address = data.address;
                }
                if ("packet_id" in data && data.packet_id != undefined) {
                    this.packet_id = data.packet_id;
                }
            }
        }
        get address() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set address(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get packet_id() {
            return pb_1.Message.getWrapperField(this, dependency_3.ibc.core.channel.v1.PacketId, 2) as dependency_3.ibc.core.channel.v1.PacketId;
        }
        set packet_id(value: dependency_3.ibc.core.channel.v1.PacketId) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        get has_packet_id() {
            return pb_1.Message.getField(this, 2) != null;
        }
        static fromObject(data: {
            address?: string;
            packet_id?: ReturnType<typeof dependency_3.ibc.core.channel.v1.PacketId.prototype.toObject>;
        }): ForwardRelayerAddress {
            const message = new ForwardRelayerAddress({});
            if (data.address != null) {
                message.address = data.address;
            }
            if (data.packet_id != null) {
                message.packet_id = dependency_3.ibc.core.channel.v1.PacketId.fromObject(data.packet_id);
            }
            return message;
        }
        toObject() {
            const data: {
                address?: string;
                packet_id?: ReturnType<typeof dependency_3.ibc.core.channel.v1.PacketId.prototype.toObject>;
            } = {};
            if (this.address != null) {
                data.address = this.address;
            }
            if (this.packet_id != null) {
                data.packet_id = this.packet_id.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.address.length)
                writer.writeString(1, this.address);
            if (this.has_packet_id)
                writer.writeMessage(2, this.packet_id, () => this.packet_id.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ForwardRelayerAddress {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ForwardRelayerAddress();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.address = reader.readString();
                        break;
                    case 2:
                        reader.readMessage(message.packet_id, () => message.packet_id = dependency_3.ibc.core.channel.v1.PacketId.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): ForwardRelayerAddress {
            return ForwardRelayerAddress.deserialize(bytes);
        }
    }
}

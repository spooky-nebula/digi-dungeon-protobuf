/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.12.4
 * source: map/index.proto
 * git: https://github.com/thesayyn/protoc-gen-ts
 * buymeacoffee: https://www.buymeacoffee.com/thesayyn
 *  */
import * as dependency_1 from "./../util/index";
import * as pb_1 from "google-protobuf";
export class ObjectEntity extends pb_1.Message {
    constructor(data?: any[] | {
        id?: number;
        cloudModelLink?: string;
        cloudTextureLink?: string;
        position?: dependency_1.Vector3;
        scale?: dependency_1.Vector3;
        rotation?: dependency_1.Vector3;
        castShadows?: boolean;
        receiveShadows?: boolean;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("id" in data && data.id != undefined) {
                this.id = data.id;
            }
            if ("cloudModelLink" in data && data.cloudModelLink != undefined) {
                this.cloudModelLink = data.cloudModelLink;
            }
            if ("cloudTextureLink" in data && data.cloudTextureLink != undefined) {
                this.cloudTextureLink = data.cloudTextureLink;
            }
            if ("position" in data && data.position != undefined) {
                this.position = data.position;
            }
            if ("scale" in data && data.scale != undefined) {
                this.scale = data.scale;
            }
            if ("rotation" in data && data.rotation != undefined) {
                this.rotation = data.rotation;
            }
            if ("castShadows" in data && data.castShadows != undefined) {
                this.castShadows = data.castShadows;
            }
            if ("receiveShadows" in data && data.receiveShadows != undefined) {
                this.receiveShadows = data.receiveShadows;
            }
        }
    }
    get id() {
        return pb_1.Message.getField(this, 1) as number;
    }
    set id(value: number) {
        pb_1.Message.setField(this, 1, value);
    }
    get cloudModelLink() {
        return pb_1.Message.getField(this, 2) as string;
    }
    set cloudModelLink(value: string) {
        pb_1.Message.setField(this, 2, value);
    }
    get cloudTextureLink() {
        return pb_1.Message.getField(this, 3) as string;
    }
    set cloudTextureLink(value: string) {
        pb_1.Message.setField(this, 3, value);
    }
    get position() {
        return pb_1.Message.getWrapperField(this, dependency_1.Vector3, 4) as dependency_1.Vector3;
    }
    set position(value: dependency_1.Vector3) {
        pb_1.Message.setWrapperField(this, 4, value);
    }
    get scale() {
        return pb_1.Message.getWrapperField(this, dependency_1.Vector3, 5) as dependency_1.Vector3;
    }
    set scale(value: dependency_1.Vector3) {
        pb_1.Message.setWrapperField(this, 5, value);
    }
    get rotation() {
        return pb_1.Message.getWrapperField(this, dependency_1.Vector3, 6) as dependency_1.Vector3;
    }
    set rotation(value: dependency_1.Vector3) {
        pb_1.Message.setWrapperField(this, 6, value);
    }
    get castShadows() {
        return pb_1.Message.getField(this, 7) as boolean;
    }
    set castShadows(value: boolean) {
        pb_1.Message.setField(this, 7, value);
    }
    get receiveShadows() {
        return pb_1.Message.getField(this, 8) as boolean;
    }
    set receiveShadows(value: boolean) {
        pb_1.Message.setField(this, 8, value);
    }
    toObject() {
        const data: {
            id?: number;
            cloudModelLink?: string;
            cloudTextureLink?: string;
            position?: ReturnType<typeof dependency_1.Vector3.prototype.toObject>;
            scale?: ReturnType<typeof dependency_1.Vector3.prototype.toObject>;
            rotation?: ReturnType<typeof dependency_1.Vector3.prototype.toObject>;
            castShadows?: boolean;
            receiveShadows?: boolean;
        } = {};
        if (this.id != null) {
            data.id = this.id;
        }
        if (this.cloudModelLink != null) {
            data.cloudModelLink = this.cloudModelLink;
        }
        if (this.cloudTextureLink != null) {
            data.cloudTextureLink = this.cloudTextureLink;
        }
        if (this.position != null) {
            data.position = this.position.toObject();
        }
        if (this.scale != null) {
            data.scale = this.scale.toObject();
        }
        if (this.rotation != null) {
            data.rotation = this.rotation.toObject();
        }
        if (this.castShadows != null) {
            data.castShadows = this.castShadows;
        }
        if (this.receiveShadows != null) {
            data.receiveShadows = this.receiveShadows;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.id !== undefined)
            writer.writeUint32(1, this.id);
        if (typeof this.cloudModelLink === "string" && this.cloudModelLink.length)
            writer.writeString(2, this.cloudModelLink);
        if (typeof this.cloudTextureLink === "string" && this.cloudTextureLink.length)
            writer.writeString(3, this.cloudTextureLink);
        if (this.position !== undefined)
            writer.writeMessage(4, this.position, () => this.position.serialize(writer));
        if (this.scale !== undefined)
            writer.writeMessage(5, this.scale, () => this.scale.serialize(writer));
        if (this.rotation !== undefined)
            writer.writeMessage(6, this.rotation, () => this.rotation.serialize(writer));
        if (this.castShadows !== undefined)
            writer.writeBool(7, this.castShadows);
        if (this.receiveShadows !== undefined)
            writer.writeBool(8, this.receiveShadows);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ObjectEntity {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ObjectEntity();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.id = reader.readUint32();
                    break;
                case 2:
                    message.cloudModelLink = reader.readString();
                    break;
                case 3:
                    message.cloudTextureLink = reader.readString();
                    break;
                case 4:
                    reader.readMessage(message.position, () => message.position = dependency_1.Vector3.deserialize(reader));
                    break;
                case 5:
                    reader.readMessage(message.scale, () => message.scale = dependency_1.Vector3.deserialize(reader));
                    break;
                case 6:
                    reader.readMessage(message.rotation, () => message.rotation = dependency_1.Vector3.deserialize(reader));
                    break;
                case 7:
                    message.castShadows = reader.readBool();
                    break;
                case 8:
                    message.receiveShadows = reader.readBool();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): ObjectEntity {
        return ObjectEntity.deserialize(bytes);
    }
}
export class Hex extends pb_1.Message {
    constructor(data?: any[] | {
        postion?: dependency_1.Vector2;
        height?: number;
        movecost?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("postion" in data && data.postion != undefined) {
                this.postion = data.postion;
            }
            if ("height" in data && data.height != undefined) {
                this.height = data.height;
            }
            if ("movecost" in data && data.movecost != undefined) {
                this.movecost = data.movecost;
            }
        }
    }
    get postion() {
        return pb_1.Message.getWrapperField(this, dependency_1.Vector2, 1) as dependency_1.Vector2;
    }
    set postion(value: dependency_1.Vector2) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get height() {
        return pb_1.Message.getField(this, 2) as number;
    }
    set height(value: number) {
        pb_1.Message.setField(this, 2, value);
    }
    get movecost() {
        return pb_1.Message.getField(this, 3) as number;
    }
    set movecost(value: number) {
        pb_1.Message.setField(this, 3, value);
    }
    toObject() {
        const data: {
            postion?: ReturnType<typeof dependency_1.Vector2.prototype.toObject>;
            height?: number;
            movecost?: number;
        } = {};
        if (this.postion != null) {
            data.postion = this.postion.toObject();
        }
        if (this.height != null) {
            data.height = this.height;
        }
        if (this.movecost != null) {
            data.movecost = this.movecost;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.postion !== undefined)
            writer.writeMessage(1, this.postion, () => this.postion.serialize(writer));
        if (this.height !== undefined)
            writer.writeSint32(2, this.height);
        if (this.movecost !== undefined)
            writer.writeInt32(3, this.movecost);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Hex {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Hex();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.postion, () => message.postion = dependency_1.Vector2.deserialize(reader));
                    break;
                case 2:
                    message.height = reader.readSint32();
                    break;
                case 3:
                    message.movecost = reader.readInt32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): Hex {
        return Hex.deserialize(bytes);
    }
}
export class HexGrid extends pb_1.Message {
    constructor(data?: any[] | {
        hex?: Hex[];
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], []);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("hex" in data && data.hex != undefined) {
                this.hex = data.hex;
            }
        }
    }
    get hex() {
        return pb_1.Message.getRepeatedWrapperField(this, Hex, 1) as Hex[];
    }
    set hex(value: Hex[]) {
        pb_1.Message.setRepeatedWrapperField(this, 1, value);
    }
    toObject() {
        const data: {
            hex?: ReturnType<typeof Hex.prototype.toObject>[];
        } = {};
        if (this.hex != null) {
            data.hex = this.hex.map((item: Hex) => item.toObject());
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.hex !== undefined)
            writer.writeRepeatedMessage(1, this.hex, (item: Hex) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): HexGrid {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new HexGrid();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.hex, () => pb_1.Message.addToRepeatedWrapperField(message, 1, Hex.deserialize(reader), Hex));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): HexGrid {
        return HexGrid.deserialize(bytes);
    }
}
export class Board extends pb_1.Message {
    constructor(data?: any[] | {
        grid?: HexGrid;
        entityList?: number;
        objectList?: ObjectEntity;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("grid" in data && data.grid != undefined) {
                this.grid = data.grid;
            }
            if ("entityList" in data && data.entityList != undefined) {
                this.entityList = data.entityList;
            }
            if ("objectList" in data && data.objectList != undefined) {
                this.objectList = data.objectList;
            }
        }
    }
    get grid() {
        return pb_1.Message.getWrapperField(this, HexGrid, 1) as HexGrid;
    }
    set grid(value: HexGrid) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get entityList() {
        return pb_1.Message.getField(this, 2) as number;
    }
    set entityList(value: number) {
        pb_1.Message.setField(this, 2, value);
    }
    get objectList() {
        return pb_1.Message.getWrapperField(this, ObjectEntity, 3) as ObjectEntity;
    }
    set objectList(value: ObjectEntity) {
        pb_1.Message.setWrapperField(this, 3, value);
    }
    toObject() {
        const data: {
            grid?: ReturnType<typeof HexGrid.prototype.toObject>;
            entityList?: number;
            objectList?: ReturnType<typeof ObjectEntity.prototype.toObject>;
        } = {};
        if (this.grid != null) {
            data.grid = this.grid.toObject();
        }
        if (this.entityList != null) {
            data.entityList = this.entityList;
        }
        if (this.objectList != null) {
            data.objectList = this.objectList.toObject();
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.grid !== undefined)
            writer.writeMessage(1, this.grid, () => this.grid.serialize(writer));
        if (this.entityList !== undefined)
            writer.writeUint32(2, this.entityList);
        if (this.objectList !== undefined)
            writer.writeMessage(3, this.objectList, () => this.objectList.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Board {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Board();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.grid, () => message.grid = HexGrid.deserialize(reader));
                    break;
                case 2:
                    message.entityList = reader.readUint32();
                    break;
                case 3:
                    reader.readMessage(message.objectList, () => message.objectList = ObjectEntity.deserialize(reader));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): Board {
        return Board.deserialize(bytes);
    }
}

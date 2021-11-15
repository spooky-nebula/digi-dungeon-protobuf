import * as protobuf from 'protobufjs';
import * as proto from './proto/';

type PackedSocketData = {
  type: string;
  body: Object | Buffer;
};

class ProtoBufCringe {
  static root: protobuf.Root | undefined;

  static get_root(): Promise<protobuf.Root> {
    return new Promise((resolve, reject) => {
      let root = ProtoBufCringe.root;
      if (root == undefined) {
        protobuf
          .load(proto.index)
          .then((root) => {
            ProtoBufCringe.root = root;
            console.log('[ProtoBufCringe] Loaded protobuf root');
            console.log(root);
            resolve(root);
          })
          .catch(reject);
      } else {
        resolve(root);
      }
    });
  }

  static get_message(type: string): Promise<protobuf.Type> {
    return new Promise((resolve, reject) => {
      ProtoBufCringe.get_root()
        .then((root) => {
          resolve(root.lookupType(type));
        })
        .catch(reject);
    });
  }

  static encode_request(
    body: Object,
    type: string
  ): Promise<Uint8Array | Buffer> {
    return new Promise((resolve, reject) => {
      ProtoBufCringe.get_message(type)
        .then((type) => {
          let err = type.verify(body);
          if (err) reject(err);
          let pack = type.encode(body).finish();
          resolve(pack);
        })
        .catch(reject);
    });
  }

  static decode_request(
    buffer: Uint8Array | Buffer,
    type: string
  ): Promise<Object> {
    return new Promise((resolve, reject) => {
      ProtoBufCringe.get_message(type)
        .then((type) => {
          let pack = type.decode(buffer);
          resolve(pack);
        })
        .catch(reject);
    });
  }

  static decode_request_typed<T>(
    buffer: Uint8Array | Buffer,
    type: string
  ): Promise<T> {
    return new Promise((resolve, reject) => {
      ProtoBufCringe.decode_request(buffer, type)
        .then((depack) => {
          resolve(depack as T); // This won't break anything lol
        })
        .catch(reject);
    });
  }

  static unpackData<T>(data: PackedSocketData): Promise<T> {
    return new Promise((resolve, reject) => {
      if (Buffer.isBuffer(data.body)) {
        let buffer = data.body;
        ProtoBufCringe.decode_request_typed<T>(buffer, data.type)
          .then((unpacked) => {
            resolve(unpacked);
          })
          .catch((err) => {
            // If the decode failed, it could be that the data is in JSON format
            resolve(data.body as T);
          });
      } else {
        resolve(data.body as T);
      }
    });
  }
}

export default ProtoBufCringe;
export { ProtoBufCringe, PackedSocketData };

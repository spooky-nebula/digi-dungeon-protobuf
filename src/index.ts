import * as protobuf from 'protobufjs';
import path from 'path';

export default class ProtoBufEncoder {
  static protoRoot: protobuf.Root;

  static init() {
    protobuf.load(path.join(__dirname, 'index.proto')).then((value) => {
      this.protoRoot = value;
    });
  }

  static encodeResponse(lookupType: string, message: any): Uint8Array {
    // Lookup buffer type
    let responseProto = this.protoRoot.lookupType(lookupType);
    // Check errors lol
    let err = responseProto.verify(message);
    if (err) console.log(err);
    // Create the message payload
    let payload = responseProto.create(message);
    // Encode the buffer
    let buffer = responseProto.encode(payload).finish();
    return buffer;
  }
  static decodeResponse<T>(lookupType: string, message: Uint8Array): T {
    // Lookup buffer type
    let requestProto = this.protoRoot.lookupType(lookupType);
    // Decode the buffer
    let object = requestProto.decode(message);
    return object as unknown as T;
  }
}

// Testing
if (typeof require !== 'undefined' && require.main === module) {
  ProtoBufEncoder.init();

  setTimeout(() => {
    let buffer = ProtoBufEncoder.encodeResponse('dd.auth.UserLogoutData', {
      token: 'test'
    });

    let decoded = ProtoBufEncoder.decodeResponse(
      'dd.auth.UserLogoutData',
      buffer
    ) as { token: string };

    if (decoded.token != 'test') {
      console.log('Test was not successful');

      process.exit(1);
    }
    console.log('Test was successful');
    process.exit(0);
  }, 100);
}

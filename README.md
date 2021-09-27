# Introduction

This library is used in the official client and server for Digi-Dungeon to
reduce network bandwidth between clients and server.

If you're looking at this you've probably realized that the data sent around is
in `Uint8Array`s instead of the regular JSON you might be used to seeing in
JavaScript. The server encodes the messages in this buffer and then the clients
have to decode thebuffer into JSON objects or whatever data they mean to send
around.

# How to

To use this library in your own client (typescript example), you need to
`import * as protobuf from 'protobufjs';` then use the following code as a
guide for your own implementation

```ts
encodeResponse(lookupType: string, message: any) {
  // Lookup buffer type
  let responseProto = this.protoRoot.lookupType(lookupType);
  // Check errors lol
  let err = responseProto.verify(message);
  if (err) console.log('Error lol');
  // Create the message payload
  let payload = responseProto.create(message);
  // Encode the buffer
  let buffer = responseProto.encode(payload).finish();
  return buffer;
}
```

Instead you can also include the included utility `ProtoBufEncoder` class
for a simple implementaton of `ProtoBufEncoder.encodeResponse` and
`ProtoBufEncoder.decodeResponse` methods just like the above.

The `lookupType` is a string and in this library it will be always start with
the `dd` as its namespace package identifier. All the message structures can
then be accessed with the following table:

| Message Name | Digi-Dungeon API reference | Notes             |
| ------------ | -------------------------- | ----------------- |
| `dd.shard`   | `ddapi.Shard`              |
| `dd.map`     | `'ddapi.Map`               |
| `dd.auth`    | `'ddapi.Auth`              |
| `dd.event`   | `'ddapi.Event`             |
| `dd.util`    | `'ddapi.Util`              |
| `dd.sheet`   | `'ddapi.Sheet`             | _@notImplemented_ |

Then whatever data structure you want to encode in has the same name as the API
reference.

_This **readme** and **library** will be expanded with all data structures
soon™️_

_\*This Protocol Buffer library for Digi-Dungeon only supports hexgrids based on
the axial coordinate system (`Vector2`)._

# Introduction

This library is used in the official client and server for Digi-Dungeon to
reduce network bandwidth between clients and server.

If you're looking at this you've probably realized that the data sent around is
in `Uint8Array`s instead of the regular JSON you might be used to seeing in
JavaScript. The server encodes the messages in this buffer and then the clients
have to decode thebuffer into JSON objects or whatever data they mean to send
around.

# How to (using the original proto files)

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

The `lookupType` is a string and in this library it will be always start with
the `dd` as its namespace package identifier. All the message structures can
then be accessed with the following table:

| Message Name | Digi-Dungeon API reference | Notes             |
| ------------ | -------------------------- | ----------------- |
| `dd.shard`   | `ddapi.Shard`              |
| `dd.map`     | `ddapi.Map`                |
| `dd.auth`    | `ddapi.Auth`               |
| `dd.event`   | `ddapi.Event`              |
| `dd.util`    | `ddapi.Util`               |
| `dd.sheet`   | `ddapi.Sheet`              | _@notImplemented_ |

Then whatever data structure you want to encode in has the same name as the API
reference.

# How to (using the module)

Use the higly advanced `ProtoBufCringe` class included to lookup the message
types without having to write that whole scpiel up there. Something along the
lines of this:

```ts
// send it lol
import ProtoBufCringe from 'digi-dungeon-protobuf';

let authloginrequest = { username: 'username', password: 'password' };
ProtoBufCringe.encode_request(authloginrequest, 'dd.auth.UserLoginData').then(
  (buffer) => {
    // your code that sends this buffer to the server
    // to be noted that the server like the data you send to look like this:
    let data_to_send = { data: buffer };
  }
);

// recieve it also
import ProtoBufCringe from 'digi-dungeon-protobuf';
// You recieve the `buffer` from the server in a little buffer pouch
let buffer = you_recieved_this_from_the_server;
ProtoBufCringe.decode_request_typed<AuthResponse>(
  buffer,
  'dd.auth.AuthResponse'
).then((response) => {
  // response is the decoded object
});
```

If you are a javascript boy instead of Typescript you can use:

```js
import ProtoBufCringe from 'digi-dungeon-protobuf';
// You recieve the `buffer` from the server in a little buffer pouch
let buffer = you_recieved_this_from_the_server;
ProtoBufCringe.decode_request(buffer, 'dd.auth.AuthResponse').then(
  (response) => {
    // response is the decoded object
  }
);
```

# Extra crumbs in the cookie jar

_This **readme** and **library** will be expanded with all data structures
soon™️_

_\*This Protocol Buffer library for Digi-Dungeon only supports hexgrids based on
the axial coordinate system (`Vector2`)._

# If you want to build this

Don't please, I can't automate this for some reason, maybe I'm an idiot or
something but if you really don't have anything better to do here's what I did:

1. Used `protoc` with the typescript addon to compile the `.proto` files to
   typescript.
2. Fixed the imports in the generated `index.ts` so that they would export with
   the right namespace names since it just generates everything as some
   variation of `dependency_#`.
3. Finally used the `npm run build` to run tsc.

import ProtoBufCringe from '.';

function test() {
  type TypeData = { username: string; password: string };
  let original_data: TypeData = { username: 'username', password: 'password' };
  console.log('Original Data', original_data);
  let message_type = 'dd.auth.UserLoginData';
  ProtoBufCringe.encode_request(original_data, message_type).then((pack) => {
    console.log('Encoded Data', pack);

    ProtoBufCringe.decode_request_typed<TypeData>(pack, message_type).then(
      (unpack) => {
        console.log('Decoded Data', unpack);
        if (
          original_data.username == unpack.username &&
          original_data.password == unpack.password
        ) {
          console.log(
            'Test successful, should work 1% of codebase tested good luck.'
          );
          process.exit(0);
        } else {
          console.log('Test unsuccessful, 1% of codebase tested good luck.');
          process.exit(1);
        }
      }
    );
  });
}

if (typeof require !== 'undefined' && require.main === module) {
  test();
}

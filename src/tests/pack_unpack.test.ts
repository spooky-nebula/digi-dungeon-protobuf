import ProtoBufCringe from '..';

export function pack_unpack_test(): Promise<TestResult> {
  return new Promise((resolve) => {
    type TypeData = { username: string; password: string };
    let original_data: TypeData = {
      username: 'username',
      password: 'password'
    };
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
            resolve({ success: true });
          } else {
            resolve({
              success: false,
              message:
                '\npack_unpack_test\n Packing and Unpacking data test was unsuccessful'
            });
          }
        }
      );
    });
  });
}

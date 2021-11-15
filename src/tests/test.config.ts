import { pack_unpack_test } from './pack_unpack.test';

const config = {
  tests: [] as TestFunction[],
  promise_tests: [pack_unpack_test] as TestPromise[]
};

export default config;

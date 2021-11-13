// TODO: MAKE MY OWN PROTO LOADER THAT CHANGES IMPORTS IN THE PROTO FILES TO THE WEBPACK NAMES
import * as index from './main.proto';
import * as map from './map.proto';
import * as auth from './auth.proto';
import * as event from './event.proto';
import * as shard from './shard.proto';
import * as party from './party.proto';
import * as util from './util.proto';

export default index;
export { index, map, auth, event, shard, party, util };

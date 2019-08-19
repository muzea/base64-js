import test from 'ava';
import { encode, decode } from '../src/index';

const check = '滑稽测试';
const result = '5ruR56i95rWL6K-V';

test('url', t => {
  t.is(encode(check, false), result);
  t.is(decode(result), check);
});

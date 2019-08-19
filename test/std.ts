import test from 'ava';
import { encode, decode } from '../src/index';

const check = 'Hello, 世界';
const result = 'SGVsbG8sIOS4lueVjA==';

test('std', t => {
  t.is(encode(check), result);
  t.is(decode(result), check);
});

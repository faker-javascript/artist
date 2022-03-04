import test from 'ava';
import artist from './index.js';

test('artist name return type to be string', t => {
    t.is(typeof artist().name(), 'string');
});

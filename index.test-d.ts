import {expectType} from 'tsd';
import artist from './index.js';

expectType<string>(artist({locale: 'en_US'}).name());
expectType<string>(artist().name());
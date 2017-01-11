
'use strict';


'use strict';

import Vue from 'vue';
import {formatDate} from '../deps/util';

Vue.filter('format', (value) => {
    return formatDate(value);
})

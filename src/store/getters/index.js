
'use strict';

import _ from 'lodash';

const getters = {
    notCur : state => {
        return _.uniqBy(state.userList.filter((user) => user.name != curid), 'name')
    }
}

export default getters;
'use strict';

import { FIND_YOUR_JOB } from './../../constants/find_your_job.constant';

export default {

    /**
     * @param {String} selectName
     * @param {String} optionValue
     * @return {Object}
     */
    buildRequestConfig: (selectName, optionValue) => {
        let config = {
            selectName,
            optionValue
        };

        switch(selectName) {
            case FIND_YOUR_JOB.SELECT_NAMES.DESCRIPTION:
                return Object.assign({}, config, {
                    parser: FIND_YOUR_JOB.UI_PARSERS.DESCRIPTION,
                    getUrl: FIND_YOUR_JOB.URL.GET_DESCRIPTION
                });
            case FIND_YOUR_JOB.SELECT_NAMES.LOCATION:
                return Object.assign({}, config, {
                    parser: FIND_YOUR_JOB.UI_PARSERS.DESCRIPTION,
                    getUrl: FIND_YOUR_JOB.URL.GET_LOCATION
                });
            case FIND_YOUR_JOB.SELECT_NAMES.FULL_TIME:
                return Object.assign({}, config, {
                    parser: FIND_YOUR_JOB.UI_PARSERS.DESCRIPTION,
                    getUrl: FIND_YOUR_JOB.URL.GET_FULL_TIME
                });
        }
    }
}

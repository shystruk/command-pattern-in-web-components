'use strict';

export const FIND_YOUR_JOB = {
    SELECT_NAMES: {
        DESCRIPTION: 'description-select',
        LOCATION: 'location-select',
        FULL_TIME: 'full-time-select'
    },

    UI_PARSERS: {
        DESCRIPTION: 'renderDescriptionJobs'
    },

    URL: {
        BASE_URL: 'jobs/',

        DEFAULT_PAGE_INDEX: 0,
        PAGE_INCREMENT: 1,
        AMOUNT_OF_JOBS_PER_REQUEST: 50,

        /**
         * @param {String} description
         * @param {Number} pageIndex
         * @return {String}
         */
        GET_DESCRIPTION: (description = '', pageIndex = FIND_YOUR_JOB.URL.DEFAULT_PAGE_INDEX) => {
            return `${FIND_YOUR_JOB.URL.BASE_URL}description=${description}&page=${pageIndex}`;
        },

        /**
         * @param {String} location
         * @param {Number} pageIndex
         * @return {String}
         */
        GET_LOCATION: (location = '', pageIndex = FIND_YOUR_JOB.URL.DEFAULT_PAGE_INDEX) => {
            return `${FIND_YOUR_JOB.URL.BASE_URL}location=${location}&page=${pageIndex}`;
        },

        /**
         * @param {String} fullTime
         * @param {Number} pageIndex
         * @return {String}
         */
        GET_FULL_TIME: (fullTime = '', pageIndex = FIND_YOUR_JOB.URL.DEFAULT_PAGE_INDEX) => {
            return `${FIND_YOUR_JOB.URL.BASE_URL}full_time=${fullTime}&page=${pageIndex}`;
        }
    }
};

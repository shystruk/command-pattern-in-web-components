'use strict';

import utils from './../web-components/Find_Your_Job/find_your_jobs.utils';
import { FIND_YOUR_JOB } from './../constants/find_your_job.constant';

export default {
    pageIndex: FIND_YOUR_JOB.URL.DEFAULT_PAGE_INDEX,
    lastSelectName: '',
    lastOptionValue: '',

    /**
     * @param {Object} config
     * @return {Promise}
     */
    executeGetJobs: function (config) {
        if (this.lastSelectName !== config.selectName || config.optionValue !== this.lastOptionValue) {
            this.pageIndex = FIND_YOUR_JOB.URL.DEFAULT_PAGE_INDEX;
        }

        this.lastSelectName = config.selectName;
        this.lastOptionValue = config.optionValue;

        return fetch(config.getUrl(config.optionValue, this.pageIndex))
            .then(jobs => jobs.json())
            .then(this._handleJobsResponse.bind(this, config.parser));
    },

    getMoreJobs: function () {
        return this.executeGetJobs(utils.buildRequestConfig(this.lastSelectName, this.lastOptionValue));
    },

    /**
     * @param {String} parser
     * @param {Array} jobs
     * @private
     *
     * @returns {Object}
     */
    _handleJobsResponse: function (parser, jobs) {
        this._changeStartIndex(jobs);

        return {
            jobs,
            parser,
            showMore: this._isNeedToShowMore(jobs)
        };
    },

    /**
     * @param {Array} jobs
     * @private
     */
    _changeStartIndex: function (jobs) {
        if (jobs.length >= FIND_YOUR_JOB.URL.AMOUNT_OF_JOBS_PER_REQUEST) {
            this.pageIndex += FIND_YOUR_JOB.URL.PAGE_INCREMENT;
        } else {
            this.pageIndex = FIND_YOUR_JOB.URL.DEFAULT_PAGE_INDEX;
        }
    },

    /**
    * @param {Array} jobs
    * @return {Boolean}
    * @private
    */
    _isNeedToShowMore: function (jobs) {
        return jobs.length >= FIND_YOUR_JOB.URL.AMOUNT_OF_JOBS_PER_REQUEST;
    }
}

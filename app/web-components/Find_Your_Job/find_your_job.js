'use strict';

import template from './find_your_job.template';
import utils from './find_your_jobs.utils';
import resource from './../../resources/find_your_job.resource';
import { FIND_YOUR_JOB } from './../../constants/find_your_job.constant';

class Find_Your_Job extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.resource = Object.create(resource);

        this.$moreJobsElement = this.shadowRoot.querySelector('.more-jobs');
        this.$jobsListElement = this.shadowRoot.querySelector('.jobs-list');
        this.$loaderElement = this.shadowRoot.querySelector('.loader');

        this.selectorsOnChangeListener();
        this.moreJobsClickListener();
    }

    selectorsOnChangeListener() {
        let self = this;
        let selectElements = [
            this.shadowRoot.querySelector(`.${FIND_YOUR_JOB.SELECT_NAMES.DESCRIPTION}`),
            this.shadowRoot.querySelector(`.${FIND_YOUR_JOB.SELECT_NAMES.LOCATION}`),
            this.shadowRoot.querySelector(`.${FIND_YOUR_JOB.SELECT_NAMES.FULL_TIME}`)
        ];

        for (let element of selectElements) {
            element.onchange = this.handleSelectorOnChange.bind(self);
        }
    }

    moreJobsClickListener() {
        let self = this;

        this.$moreJobsElement.onclick = function () {
            self.showLoader(true);

            self.resource
                .getMoreJobs()
                .then(response => {
                    self.hideShowMoreButton(response.showMore);
                    self.showLoader(false);
                    self[response.parser](response.jobs);
                });
        };
    }

    handleSelectorOnChange(event) {
        let target = event.target;

        this.showLoader(true);
        this.$jobsListElement.innerHTML = '';

        this.resource
            .executeGetJobs(utils.buildRequestConfig(target.className, target.value))
            .then(response => {
                this.hideShowMoreButton(response.showMore);
                this.showLoader(false);
                this[response.parser](response.jobs);
            });
    }

    /**
     * @param {Array} jobs
     */
    renderDescriptionJobs(jobs) {
        let jobsFragment = document.createDocumentFragment();

        for (let [index, job] of jobs.entries()) {
            let li = document.createElement('li');
            li.innerHTML = `
                <div class="job-title">${job.title}</div>
                <div>
                    <span class="job-location">${job.location}</span> - <span class="job-type"><strong>${job.type}</strong></span>
                </div>
            `;

            jobsFragment.appendChild(li);
        }

        this.$jobsListElement.appendChild(jobsFragment);
    }

    /**
     * @param {Boolean} show
     */
    hideShowMoreButton(show) {
        this.$moreJobsElement.style.display = show ? 'block' : 'none';
    }

    /**
     * @param {Boolean} show
     */
    showLoader(show) {
        this.$loaderElement.style.display = show ? 'block' : 'none';
    }
}

customElements.define('find-your-job', Find_Your_Job);

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

        this.$moreJobsElement = this.shadowRoot.querySelector('.more-jobs');
        this.$jobsListElement = this.shadowRoot.querySelector('.jobs-list');
        this.$loaderElement = this.shadowRoot.querySelector('.loader');

        this.selectorsOnChangeListener(this.shadowRoot);
        this.moreJobsClickListener(this.$moreJobsElement);
    }

    selectorsOnChangeListener(shadowRoot) {
        let selectElements = [
            shadowRoot.querySelector(`.${FIND_YOUR_JOB.SELECT_NAMES.DESCRIPTION}`),
            shadowRoot.querySelector(`.${FIND_YOUR_JOB.SELECT_NAMES.LOCATION}`),
            shadowRoot.querySelector(`.${FIND_YOUR_JOB.SELECT_NAMES.FULL_TIME}`)
        ];

        for (let element of selectElements) {
            element.onchange = this.handleSelectorOnChange.bind(this, this);
        }
    }

    moreJobsClickListener(moreJobsElement) {
        let self = this;

        moreJobsElement.onclick = function () {
            Find_Your_Job.showLoader(true, self);

            resource.getMoreJobs().then(response => {
                Find_Your_Job.hideShowMoreButton(response.showMore, self);
                Find_Your_Job.showLoader(false, self);
                self[response.parser](response.jobs);
            });
        };
    }

    handleSelectorOnChange(context, event) {
        let target = event.target;
        let reRender = true;

        Find_Your_Job.showLoader(true, context);

        resource
            .executeGetJobs(utils.buildRequestConfig(target.className, target.value))
            .then(response => {
                Find_Your_Job.hideShowMoreButton(response.showMore, context);
                Find_Your_Job.showLoader(false, context);
                context[response.parser](response.jobs, reRender);
            });
    }

    renderDescriptionJobs(jobs, reRender = false) {
        let jobsFragment = document.createDocumentFragment();

        if (reRender) {
            this.$jobsListElement.innerHTML = '';
        }

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

    static hideShowMoreButton (showMore, context) {
        context.$moreJobsElement.style.display = showMore ? 'block' : 'none';
    }

    static showLoader(show, context) {
        context.$loaderElement.style.display = show ? 'block' : 'none';
    }
}

customElements.define('find-your-job', Find_Your_Job);

'use strict';

const template = document.createElement('template');

template.innerHTML = `
        <style>
            .find-your-job {
                margin: 50px auto 0;
                width: 400px;
            }
            .find-your-job .selectors {
                display: flex;  
                justify-content: space-between;
            }
            .find-your-job .more-jobs {
                margin: 30px auto 50px;
                display: none;
            }
            .find-your-job .jobs-list {
                margin: 30px 0 0;
                padding: 0;
                list-style-type: none;
            }
            .find-your-job .jobs-list li {
                padding-bottom: 10px;
                border-bottom: 1px solid #bbb;
                margin-bottom: 14px;
                font-size: 18px;
            }
            .find-your-job .jobs-list .job-title {
                color: blue;
                cursor: pointer;
            }
            .find-your-job .jobs-list .job-title:hover {
                text-decoration: underline;
            }
            .find-your-job .jobs-list .job-location {
                font-size: 16px;
            }
            .find-your-job .loader {
                margin: 20px auto 20px;
                display: none;
            }
        </style>
        
        <div class="find-your-job">
            <div class="selectors">
                 <select class="description-select">
                <option selected>Description</option>
                <option value="javascript">JavaScript</option>
                <option value="ruby">Ruby</option>
                <option value="python">Python</option>
                <option value="java">Java</option>
                </select>
                <select class="location-select">
                    <option selected>Location</option>
                    <option value="San Francisco">San Francisco</option>
                    <option value="New York">New York, NY</option>
                    <option value="Madrid">Madrid</option>
                    <option value="Abu Dhabi">Abu Dhabi</option>
                </select>
                <select class="full-time-select">
                    <option selected>Full Time Only</option>
                    <option value="true">Yes</option>
                    <option value="">No</option>
                </select>
            </div>
           
            <ul class="jobs-list"></ul>
            
            <img class="loader" src="./images/loader.gif"/>
            
            <button class="more-jobs" type="button">More</button>
        </div>
    `;

export default template;

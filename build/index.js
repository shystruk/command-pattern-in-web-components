/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var FIND_YOUR_JOB = exports.FIND_YOUR_JOB = {
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
        GET_DESCRIPTION: function GET_DESCRIPTION() {
            var description = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            var pageIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : FIND_YOUR_JOB.URL.DEFAULT_PAGE_INDEX;

            return FIND_YOUR_JOB.URL.BASE_URL + 'description=' + description + '&page=' + pageIndex;
        },

        /**
         * @param {String} location
         * @param {Number} pageIndex
         * @return {String}
         */
        GET_LOCATION: function GET_LOCATION() {
            var location = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            var pageIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : FIND_YOUR_JOB.URL.DEFAULT_PAGE_INDEX;

            return FIND_YOUR_JOB.URL.BASE_URL + 'location=' + location + '&page=' + pageIndex;
        },

        /**
         * @param {String} fullTime
         * @param {Number} pageIndex
         * @return {String}
         */
        GET_FULL_TIME: function GET_FULL_TIME() {
            var fullTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            var pageIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : FIND_YOUR_JOB.URL.DEFAULT_PAGE_INDEX;

            return FIND_YOUR_JOB.URL.BASE_URL + 'full_time=' + fullTime + '&page=' + pageIndex;
        }
    }
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _find_your_job = __webpack_require__(2);

var _find_your_job2 = _interopRequireDefault(_find_your_job);

var _find_your_jobs = __webpack_require__(3);

var _find_your_jobs2 = _interopRequireDefault(_find_your_jobs);

var _find_your_job3 = __webpack_require__(4);

var _find_your_job4 = _interopRequireDefault(_find_your_job3);

var _find_your_job5 = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _CustomElement() {
    return Reflect.construct(HTMLElement, [], this.__proto__.constructor);
}

;
Object.setPrototypeOf(_CustomElement.prototype, HTMLElement.prototype);
Object.setPrototypeOf(_CustomElement, HTMLElement);

var Find_Your_Job = function (_CustomElement2) {
    _inherits(Find_Your_Job, _CustomElement2);

    function Find_Your_Job() {
        _classCallCheck(this, Find_Your_Job);

        var _this = _possibleConstructorReturn(this, (Find_Your_Job.__proto__ || Object.getPrototypeOf(Find_Your_Job)).call(this));

        _this.attachShadow({ mode: 'open' });
        _this.shadowRoot.appendChild(_find_your_job2.default.content.cloneNode(true));

        _this.$moreJobsElement = _this.shadowRoot.querySelector('.more-jobs');
        _this.$jobsListElement = _this.shadowRoot.querySelector('.jobs-list');
        _this.$loaderElement = _this.shadowRoot.querySelector('.loader');

        _this.selectorsOnChangeListener(_this.shadowRoot);
        _this.moreJobsClickListener(_this.$moreJobsElement);
        return _this;
    }

    _createClass(Find_Your_Job, [{
        key: 'selectorsOnChangeListener',
        value: function selectorsOnChangeListener(shadowRoot) {
            var selectElements = [shadowRoot.querySelector('.' + _find_your_job5.FIND_YOUR_JOB.SELECT_NAMES.DESCRIPTION), shadowRoot.querySelector('.' + _find_your_job5.FIND_YOUR_JOB.SELECT_NAMES.LOCATION), shadowRoot.querySelector('.' + _find_your_job5.FIND_YOUR_JOB.SELECT_NAMES.FULL_TIME)];

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = selectElements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var element = _step.value;

                    element.onchange = this.handleSelectorOnChange.bind(this, this);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }, {
        key: 'moreJobsClickListener',
        value: function moreJobsClickListener(moreJobsElement) {
            var self = this;

            moreJobsElement.onclick = function () {
                Find_Your_Job.showLoader(true, self);

                _find_your_job4.default.getMoreJobs().then(function (response) {
                    Find_Your_Job.hideShowMoreButton(response.showMore, self);
                    Find_Your_Job.showLoader(false, self);
                    self[response.parser](response.jobs);
                });
            };
        }
    }, {
        key: 'handleSelectorOnChange',
        value: function handleSelectorOnChange(context, event) {
            var target = event.target;
            var reRender = true;

            Find_Your_Job.showLoader(true, context);

            _find_your_job4.default.executeGetJobs(_find_your_jobs2.default.buildRequestConfig(target.className, target.value)).then(function (response) {
                Find_Your_Job.hideShowMoreButton(response.showMore, context);
                Find_Your_Job.showLoader(false, context);
                context[response.parser](response.jobs, reRender);
            });
        }
    }, {
        key: 'renderDescriptionJobs',
        value: function renderDescriptionJobs(jobs) {
            var reRender = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            var jobsFragment = document.createDocumentFragment();

            if (reRender) {
                this.$jobsListElement.innerHTML = '';
            }

            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = jobs.entries()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var _step2$value = _slicedToArray(_step2.value, 2),
                        index = _step2$value[0],
                        job = _step2$value[1];

                    var li = document.createElement('li');
                    li.innerHTML = '\n                <div class="job-title">' + job.title + '</div>\n                <div>\n                    <span class="job-location">' + job.location + '</span> - <span class="job-type"><strong>' + job.type + '</strong></span>\n                </div>\n            ';

                    jobsFragment.appendChild(li);
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            this.$jobsListElement.appendChild(jobsFragment);
        }
    }], [{
        key: 'hideShowMoreButton',
        value: function hideShowMoreButton(showMore, context) {
            context.$moreJobsElement.style.display = showMore ? 'block' : 'none';
        }
    }, {
        key: 'showLoader',
        value: function showLoader(show, context) {
            context.$loaderElement.style.display = show ? 'block' : 'none';
        }
    }]);

    return Find_Your_Job;
}(_CustomElement);

customElements.define('find-your-job', Find_Your_Job);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var template = document.createElement('template');

template.innerHTML = '\n        <style>\n            .find-your-job {\n                margin: 50px auto 0;\n                width: 400px;\n            }\n            .find-your-job .selectors {\n                display: flex;  \n                justify-content: space-between;\n            }\n            .find-your-job .more-jobs {\n                margin: 30px auto 50px;\n                display: none;\n            }\n            .find-your-job .jobs-list {\n                margin: 30px 0 0;\n                padding: 0;\n                list-style-type: none;\n            }\n            .find-your-job .jobs-list li {\n                padding-bottom: 10px;\n                border-bottom: 1px solid #bbb;\n                margin-bottom: 14px;\n                font-size: 18px;\n            }\n            .find-your-job .jobs-list .job-title {\n                color: blue;\n                cursor: pointer;\n            }\n            .find-your-job .jobs-list .job-title:hover {\n                text-decoration: underline;\n            }\n            .find-your-job .jobs-list .job-location {\n                font-size: 16px;\n            }\n            .find-your-job .loader {\n                margin: 20px auto 20px;\n                display: none;\n            }\n        </style>\n        \n        <div class="find-your-job">\n            <div class="selectors">\n                 <select class="description-select">\n                <option selected>Description</option>\n                <option value="javascript">JavaScript</option>\n                <option value="ruby">Ruby</option>\n                <option value="python">Python</option>\n                <option value="java">Java</option>\n                </select>\n                <select class="location-select">\n                    <option selected>Location</option>\n                    <option value="San Francisco">San Francisco</option>\n                    <option value="New York">New York, NY</option>\n                    <option value="Madrid">Madrid</option>\n                    <option value="Abu Dhabi">Abu Dhabi</option>\n                </select>\n                <select class="full-time-select">\n                    <option selected>Full Time Only</option>\n                    <option value="true">Yes</option>\n                    <option value="">No</option>\n                </select>\n            </div>\n           \n            <ul class="jobs-list"></ul>\n            \n            <img class="loader" src="./images/loader.gif"/>\n            \n            <button class="more-jobs" type="button">More</button>\n        </div>\n    ';

exports.default = template;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _find_your_job = __webpack_require__(0);

exports.default = {

    /**
     * @param {String} selectName
     * @param {String} optionValue
     * @return {Object}
     */
    buildRequestConfig: function buildRequestConfig(selectName, optionValue) {
        var config = {
            selectName: selectName,
            optionValue: optionValue
        };

        switch (selectName) {
            case _find_your_job.FIND_YOUR_JOB.SELECT_NAMES.DESCRIPTION:
                return Object.assign({}, config, {
                    parser: _find_your_job.FIND_YOUR_JOB.UI_PARSERS.DESCRIPTION,
                    getUrl: _find_your_job.FIND_YOUR_JOB.URL.GET_DESCRIPTION
                });
            case _find_your_job.FIND_YOUR_JOB.SELECT_NAMES.LOCATION:
                return Object.assign({}, config, {
                    parser: _find_your_job.FIND_YOUR_JOB.UI_PARSERS.DESCRIPTION,
                    getUrl: _find_your_job.FIND_YOUR_JOB.URL.GET_LOCATION
                });
            case _find_your_job.FIND_YOUR_JOB.SELECT_NAMES.FULL_TIME:
                return Object.assign({}, config, {
                    parser: _find_your_job.FIND_YOUR_JOB.UI_PARSERS.DESCRIPTION,
                    getUrl: _find_your_job.FIND_YOUR_JOB.URL.GET_FULL_TIME
                });
        }
    }
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _find_your_jobs = __webpack_require__(3);

var _find_your_jobs2 = _interopRequireDefault(_find_your_jobs);

var _find_your_job = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    pageIndex: _find_your_job.FIND_YOUR_JOB.URL.DEFAULT_PAGE_INDEX,
    lastSelectName: '',
    lastOptionValue: '',

    /**
     * @param {Object} config
     * @return {Promise}
     */
    executeGetJobs: function executeGetJobs(config) {
        if (this.lastSelectName !== config.selectName || config.optionValue !== this.lastOptionValue) {
            this.pageIndex = _find_your_job.FIND_YOUR_JOB.URL.DEFAULT_PAGE_INDEX;
        }

        this.lastSelectName = config.selectName;
        this.lastOptionValue = config.optionValue;

        return fetch(config.getUrl(config.optionValue, this.pageIndex)).then(function (jobs) {
            return jobs.json();
        }).then(this._handleJobsResponse.bind(this, config.parser));
    },

    getMoreJobs: function getMoreJobs() {
        return this.executeGetJobs(_find_your_jobs2.default.buildRequestConfig(this.lastSelectName, this.lastOptionValue));
    },

    /**
     * @param {String} parser
     * @param {Array} jobs
     * @private
     *
     * @returns {Object}
     */
    _handleJobsResponse: function _handleJobsResponse(parser, jobs) {
        this._changeStartIndex(jobs);

        return {
            jobs: jobs,
            parser: parser,
            showMore: this._isNeedToShowMore(jobs)
        };
    },

    /**
     * @param {Array} jobs
     * @private
     */
    _changeStartIndex: function _changeStartIndex(jobs) {
        if (jobs.length >= _find_your_job.FIND_YOUR_JOB.URL.AMOUNT_OF_JOBS_PER_REQUEST) {
            this.pageIndex += _find_your_job.FIND_YOUR_JOB.URL.PAGE_INCREMENT;
        } else {
            this.pageIndex = _find_your_job.FIND_YOUR_JOB.URL.DEFAULT_PAGE_INDEX;
        }
    },

    /**
    * @param {Array} jobs
    * @return {Boolean}
    * @private
    */
    _isNeedToShowMore: function _isNeedToShowMore(jobs) {
        return jobs.length >= _find_your_job.FIND_YOUR_JOB.URL.AMOUNT_OF_JOBS_PER_REQUEST;
    }
};

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map
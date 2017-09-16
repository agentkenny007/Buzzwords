import angular from 'angular';
import 'chart.js';
import 'angular-chart.js';
import _ from 'lodash';
import $ from 'jquery';


import CampaignsController from './controllers/campaigns.controller';
import CreateController    from './controllers/create.controller';
import {SortAnalysis}      from './campaign.service/analysis.sort_service.js';
import {ChartService}      from './campaign.service/chartGenerator.service.js';
import {PostAnalysis}      from './campaign.service/post.analysis.service.js';
import {graphElement}      from './directives/graph.directive.js';

angular
    .module('app.campaigns', ['chart.js'])
    .controller('CampaignsController', CampaignsController)
    .controller('CreateController', CreateController)
    .service('SortAnalysis', SortAnalysis)
    .service('ChartService', ChartService)
    .service('PostAnalysis', PostAnalysis)
    .directive('graphElement', graphElement);

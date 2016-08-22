import angular from 'angular';
import 'chart.js';
import 'angular-chart.js';
import _ from 'lodash';


import CampaignsController from './controllers/campaigns.controller';
import CreateController    from './controllers/create.controller';
import {SortAnalysis}      from './campaign.service/analysis.sort_service.js'

angular
    .module('app.campaigns', ['chart.js'])
    .controller('CampaignsController', CampaignsController)
    .controller('CreateController', CreateController)
    .service('SortAnalysis', SortAnalysis);

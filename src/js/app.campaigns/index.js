import angular from 'angular';
import 'chart.js';
import 'angular-chart.js';


import CampaignsController from './controllers/campaigns.controller';
import CreateController from './controllers/create.controller';

angular
    .module('app.campaigns', ['chart.js'])
    .controller('CampaignsController', CampaignsController)
    .controller('CreateController', CreateController);

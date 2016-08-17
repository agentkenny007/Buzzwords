import angular from 'angular';

import CampaignsController from './controllers/campaigns.controller';
import CreateController from './controllers/create.controller';

angular
    .module('app.campaigns', [])
    .controller('CampaignsController', CampaignsController)
    .controller('CreateController', CreateController);

import angular from 'angular';
import 'angular-ui-router';
import 'angular-cookies';

import HomeController from './controllers/home.controller';
import LayoutController from './controllers/layout.controller';

import config from './utilities/config';
import run from './utilities/run';
import SERVER from './utilities/server.constant';

angular
    .module('app.core', ['ui.router', 'ngCookies'])
    .config(config)
    .run(run)
    .constant('SERVER', SERVER)
    .controller('HomeController', HomeController)
    .controller('LayoutController', LayoutController);

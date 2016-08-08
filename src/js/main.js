import angular from 'angular';
import 'angular-cookies';
import 'angular-ui-router';

import config from './config';
import SERVER from './server.constant';
import LoginController from './controllers/login.controller';
import RegisterController from './controllers/register.controller';
import ProfileController from './controllers/profile.controller';

angular
    .module('app', ['ui.router', 'ngCookies'])
    .config(config)
    .constant('SERVER', SERVER)
    .controller('RegisterController', RegisterController)
    .controller('ProfileController', ProfileController)
    .controller('LoginController', LoginController);

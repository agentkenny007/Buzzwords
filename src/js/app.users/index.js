import angular from 'angular';

import LoginController from './controllers/login.controller';
import RegisterController from './controllers/register.controller';
import ProfileController from './controllers/profile.controller';
import ProfileSettingsController from './controllers/profile.settings.controller';

import UserService from './services/user.service';

angular
    .module('app.users', [])
    .controller('LoginController', LoginController)
    .controller('ProfileController', ProfileController)
    .controller('ProfileSettingsController', ProfileSettingsController)
    .controller('RegisterController', RegisterController)
    .service('UserService', UserService);

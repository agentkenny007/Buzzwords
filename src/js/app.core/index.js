import angular from 'angular';
import 'angular-ui-router';
import 'angular-cookies';
import base64 from "angular-base64"

import HomeController from './controllers/home.controller';
import LayoutController from './controllers/layout.controller';

import config from './utilities/config';
import run from './utilities/run';
import SERVER from './utilities/server.constant';
import {TweetService} from './services/twitter.services'

angular
    .module('app.core', ['ui.router', 'ngCookies','base64'])
    .config(config)
    .run(run)
    .constant('SERVER', SERVER)
    .controller('HomeController', HomeController)
    .controller('LayoutController', LayoutController)
    .service('TweetService', TweetService);

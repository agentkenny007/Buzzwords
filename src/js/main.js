import angular from 'angular';

import './app.campaigns';
import './app.core';
import './app.users';

angular.module('app', ['app.campaigns', 'app.core', 'app.users']);

import angular from 'angular';
import angularMeteor from 'angular-meteor';
import huleElements from '../imports/components/hule/elements';

angular.module('hule', [
  angularMeteor,
  huleElements.name
]);

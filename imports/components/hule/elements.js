import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './elements.html';

class HuleCtrl {
  constructor() {
    this.elements = [
      {name: 'air'},
      {name: 'earth'},
      {name: 'fire'},
      {name: 'water'},
    ];
  }
}

export default angular.module('huleElements', [
  angularMeteor
]).component('huleElementsComp', {
  templateUrl: 'imports/components/hule/elements.html',
  controller: HuleCtrl
});

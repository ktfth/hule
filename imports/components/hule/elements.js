import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './elements.html';
import { Elements } from '../../api/elements.js';

class HuleCtrl {
  constructor($scope) {
    $scope.viewModel(this);

    this.helpers({
      elements() {
        return Elements.find({}, {
          sort: {
            createdAt: -1
          }
        });
      }
    });
  }

  addElement(newElement) {
    Elements.insert({
      name: newElement,
      createdAt: new Date()
    })

    this.newElement = '';
  }

  setChecked(element) {
    Elements.update(element._id, {
      $set: {
        checked: !task.checked
      }
    })
  }

  removeElement(element) {
    Elements.remove(element._id)
  }
}

export default angular.module('huleElements', [
  angularMeteor
]).component('huleElementsComp', {
  templateUrl: 'imports/components/hule/elements.html',
  controller: ['$scope', HuleCtrl]
});

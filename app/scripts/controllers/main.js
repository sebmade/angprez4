'use strict';

angular.module('angprez4App')
  .controller('MainCtrl', function ($scope, $document, $http) {
    $scope.slideIndex = 0;

    $scope.now = new Date();

    $http.get("/data/slides.json").success(function(data) {
      $scope.slides = data;
    }).error(function(data) {

    });

    $scope.nextSlide = function () {
      $scope.slideIndex++;
    };
    $scope.previousSlide = function() {
      $scope.slideIndex--;
    };

    $scope.currentSlide = function () {
      return $scope.slides[$scope.slideIndex].content;
    };

    $document.keydown(function(event) {
      if (event.keyCode == 37) {
        $scope.$apply(function() {
          $scope.previousSlide();
        });
      } else if (event.keyCode == 39) {
        $scope.$apply(function() {
          $scope.nextSlide();
        });
      }
    });

    $scope.gotoSlide = function(s) {
      $scope.slideIndex = $scope.slides.indexOf(s);
    };

    $scope.addSlide = function(t, c) {
      $scope.slides.push({
        title : t,
        content : c
      });
    };
    
  });

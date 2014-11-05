'use strict';

describe('myApp.article module', function() {

  beforeEach(module('myApp.article'));

  describe('view1 controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view1Ctrl = $controller('ArticleCtrl');
      expect(view1Ctrl).toBeDefined();
    }));

  });
});
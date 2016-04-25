/**
 * Created by charlie on 10/7/15.
 */

describe('Test Directives Suite', function() {
    'use strict';
    var scope;
    var $compile;
    var mainController;
    var $templateCache;

    // Load the myApp module, which contains the directive
    beforeEach(module('elfApp'));

    beforeEach(function() {
        jasmine.getFixtures().fixturesPath = 'base/spec/fixtures/';
        loadFixtures('car.html');
    });

    beforeEach(inject(function(_$compile_, _$rootScope_, _$templateCache_, _$controller_) {
        scope = _$rootScope_.$new();
        $compile = _$compile_;
        $templateCache = _$templateCache_;
        // instantiate the controller stand-alone, without the directive
        mainController = _$controller_('MainController', {
            $scope: scope
        });
    }));

    it('expects true to be true', function() {
        expect(true).toBe(true);
    });

    it('replace angular expression with scope data', function() {
        // Get element from fixture
        var el = document.getElementById('cart');
        $templateCache.put('car', el);
        var element = $compile('<car></car>')(scope);
        scope.$digest();
        //console.log(element.html());
        expect(element.text()).toContain('Cart Scope Data');
    });

});

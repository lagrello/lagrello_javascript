/**
 * Lagrello API
 * API specification for Lagrello, a simple to use authentication service
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@lagrello.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.LagrelloApi);
  }
}(this, function(expect, LagrelloApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new LagrelloApi.UsersApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('UsersApi', function() {
    describe('usersCreate', function() {
      it('should call usersCreate successfully', function(done) {
        //uncomment below and update the code to test usersCreate
        //instance.usersCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('usersDelete', function() {
      it('should call usersDelete successfully', function(done) {
        //uncomment below and update the code to test usersDelete
        //instance.usersDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('usersGet', function() {
      it('should call usersGet successfully', function(done) {
        //uncomment below and update the code to test usersGet
        //instance.usersGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('usersUpdate', function() {
      it('should call usersUpdate successfully', function(done) {
        //uncomment below and update the code to test usersUpdate
        //instance.usersUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
// pull in assert.isTrue() and the rest
var assert = require('chai').assert;
var request = require('supertest');
var uuid = require('node-uuid');

var host_url = 'http://localhost:8080'
var container_url = host_url + '/annotations/';

describe('MUSTs', function() {
  describe('4. Annotation Containers', function() {
    it.skip('An Annotation Server MUST provide one or more Containers');
    it('MUST end in a "/" character', function(done) {
      assert.isTrue(container_url[container_url.length-1] === '/');
      done();
    });
  });

  describe('4.1 Container Retrieval', function() {
    container = request(container_url);
    it('MUST support GET, HEAD, and OPTIONs methods', function(done) {
      container
        .get('')
        .expect('Allow', /GET/)
        .expect('Allow', /HEAD/)
        .expect('Allow', /OPTIONS/)
        .expect(200, done);
    });
  });
});

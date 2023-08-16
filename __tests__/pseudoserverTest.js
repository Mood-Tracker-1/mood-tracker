const { mock } = require('node:test');
const app = require('../server/pseudoserver'); // import component/function we want to test
const request = require('supertest');

// mock request
  // object that has a body property
    // the body property should be an object with K:V pairs
  // the request should be stringified

// describe blocks
describe('Testing pseudoserver endpoints', () => {
  // create mock request
  const mockReq = {
    body: 'this is the body'
  }
  
  // parses request body
  it('Server parses request.body', () => {
    return request(app)
      .get('/parseRequestBody')
      .send(mockReq)
      .then(res => {
        expect(res.body).toEqual(mockReq)
        expect(res.statusCode).toEqual(200)
      })
  })

  // unknown page request should render 404
  it('Renders a 404 when there is an unknown endpoint', () => {
    return request(app)
      .post('/endpointThatDoesntExist')
      .then(res => {
        expect(res.statusCode).toBe(404);
      })
  });

  // throws default error
  describe('Request to check for error object', () => {
    // sends a status of 400
    it('Receives a status code of 400', () => {
      return request(app)
        .get('/error')
        .expect('Content-Type', 'text/html; charset=utf-8')
        .then(res => {
          expect(res.statusCode).toBe(400);
        })
    });
    it('Receives an error message', () => {
      return request(app)
        .get('/error')
        .expect('Content-Type', 'text/html; charset=utf-8')
        .then(res => {
          expect(res.body).toBe('error')
        })
    })
  })
  
  describe('Request to check "/" endpoint is good', () => {
    // status should be 200
    it ('Check for status 200', () => {
      return request(app)
        .get('/')
        .then(res => {
          expect(res.statusCode).toBe(200)
        })
    })

    // request to '/' is good
    it ('Check if string index.html sent', () => {
      return request(app)
        .get('/')
        .expect('content-type', 'text/html; charset=utf-8')
    })
  })
})
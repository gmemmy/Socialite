/* eslint-disable no-undef */
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

const { expect } = chai;
chai.use(chaiHttp);

describe('GET home/', () => {
  it('should succesffuly say "Welcome to Socialite"', (done) => {
    chai.request(app)
      .get('/home')
      .end((err, res) => {
        if (err) done();
        const { body } = res;
        expect(body).to.be.an('object');
        expect(body).to.haveOwnProperty('status');
        expect(body).to.haveOwnProperty('message');
        expect(body.status).to.be.equal(200);
        done();
      });
  });
});

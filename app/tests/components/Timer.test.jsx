var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe("Timer", () => {
  it('Should exist', () => {
    expect(Timer).toExist();
  });

  it('Should start timer when started', (done) => {
    var timer = TestUtils.renderIntoDocument(<Timer/>);

    expect(timer.state.count).toBe(0);
    expect(timer.state.timerStatus).toBe('stopped');

    timer.handleStatusChange("started");

    setTimeout(() => {
      expect(timer.state.count).toBe(1);
      expect(timer.state.timerStatus).toBe('started');

      done();
    }, 1005);
  });

  it('Should pause timer when paused', (done) => {
    var timer = TestUtils.renderIntoDocument(<Timer/>);

    timer.setState({count: 10});
    timer.handleStatusChange("started");
    timer.handleStatusChange("paused");

    setTimeout(() => {
      expect(timer.state.count).toBe(10);
      expect(timer.state.timerStatus).toBe('paused');
      done();
    }, 1005);
  });

  it('Should clear count on stopped', (done) => {
    var timer = TestUtils.renderIntoDocument(<Timer/>);

    timer.setState({count: 10});
    timer.handleStatusChange("started");
    timer.handleStatusChange("stopped");

    setTimeout(() => {
      expect(timer.state.count).toBe(0);
      expect(timer.state.timerStatus).toBe('stopped');
      done();
    }, 1005);
  });
});

var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'Jen';
    var text = 'Some message';
    var message = generateMessage(from, text);

    //expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, text});
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = "Jo";
    var lat = 15;
    var lon = 20;
    var url = 'https://www.google.com/maps?q=15,20';
    var message = generateLocationMessage(from, lat, lon);

    expect(message).toInclude({from, url});
  });
});

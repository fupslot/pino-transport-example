const crypto = require('crypto');
const faker = require('faker');

const randomString = (args) => args[Math.floor(Math.random() * (args.length - 0) + 0)]
const tickLog = () => {
  setTimeout(() => {
    console.error({
      id: crypto.randomBytes(10).toString('hex'),
      level: randomString(['info', 'warn', 'error', 'general']),
      email: faker.internet.email(),
      timestamp: Date.now(),
    });

    tickLog()
  }, 500)
};

tickLog();
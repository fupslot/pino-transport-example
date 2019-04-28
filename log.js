const crypto = require('crypto');

const randomString = (args) => args[Math.floor(Math.random() * (args.length - 0) + 0)]
const tickLog = () => {
  setTimeout(() => {
    console.log(JSON.stringify({
      id: crypto.randomBytes(10).toString('hex'),
      timestamp: Date.now(),
      level: randomString(['info', 'warn', 'error', 'general'])
    }))

    tickLog()
  }, 500)
};

tickLog();
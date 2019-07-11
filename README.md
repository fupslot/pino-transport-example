## Stream Logs
`node log.js | ./node_modules/.bin/pino-mq -c pino-mq.json`

## Consume Logs
`node listen_logs.js pino-mq-info`


# Using pm2
## Stream Logs
`pm2 start log.js -i 2 --merge-logs`

## Consume Logs
`pm2 logs --json | node index.js`
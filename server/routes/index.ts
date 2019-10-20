export {}

const router = require('express').Router()

const member = require('./member')

router.use('/members', member)

router.get('/health-check', (req: any, res: any) => {
  res.status(200).json({
    healthy: true
  })
})

module.exports = router

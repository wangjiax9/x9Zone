const cluster = require('cluster')
const os = require('os')
const koa = require('koa')
const path = require('path')

const app = new koa()
const Router = require('koa-router')
const router = new Router()
const serve = require('koa-static')

const numCPUs = os.cpus().length

router.get(/\/*/gi, (ctx, next) => {
	console.log(ctx.response)
})
const main = serve(path.join(__dirname))
console.log('numCPUs', numCPUs)
app.use(main)
app.use(router.routes())

app.listen(7777);
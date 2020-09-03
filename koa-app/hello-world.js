const Koa = require("koa");
const app = new Koa();

app.use(async (ctx) => {
  ctx.body = "Hello World from koa app";
});

port = 8080;
hostname = "127.0.0.1";
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

const Koa = require("koa");
const router = require("@koa/router")();
var request = require("superagent");
const app = new Koa();

router.get("/price", async (ctx, next) => {
  await request
    .get("https://api.coindesk.com/v1/bpi/currentprice.json")
    .then((res) => {
      const price = JSON.parse(res.body).bpi.USD.rate;
      console.log(price);
      ctx.body = {
        btc: price,
        timestamp: Date.now(),
      };
    })
    .catch((err) => {
      console.log(err);
    });
});

port = 3000;
hostname = "127.0.0.1";
app.use(router.routes());
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

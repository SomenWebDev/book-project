const app = require("./app");
require("dotenv").config();
const port = process.env.PORT || 3000;

app.listen(3000, () => {
  console.log(`Example app listening on port ${port}`);
});

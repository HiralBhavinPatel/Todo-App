const app = require("./app");
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server listening at port - ${port}`);
});

console.log("Author : Hiral Patel");

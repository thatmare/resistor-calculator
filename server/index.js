import app from "./app.js";
import { connect } from "./db.js";

app.listen(5000, () => {
  console.log("Server started on port 5000");
});

connect();

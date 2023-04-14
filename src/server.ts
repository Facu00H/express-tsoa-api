import { app } from "./app";
import connectDb from "./mongo/dbConnection";

const port = process.env.PORT || 3000;

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

connectDb()
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.log(error.message));

import mongoose from "mongoose";
import app from "./app";
import config from "./app/config/config";

async function main() {
  try {
    await mongoose.connect(config.datbaseUrl as string);

    app.listen(config.port, () => {
      console.log(`Example app listening on process.env.PORT ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();

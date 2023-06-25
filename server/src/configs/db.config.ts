require('dotenv').config();
const mongoose = require('mongoose');

const { DB_PATH } = process.env;

const dbConnect = async () => {
  try {
    const connect = await mongoose.connect(DB_PATH, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
    });

    console.log(`Database connected: ${connect.connection.host}`);
  } catch (error: any) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default dbConnect;

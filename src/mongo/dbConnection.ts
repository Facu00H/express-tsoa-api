import mongoose, { ConnectOptions } from 'mongoose';

interface MongoOptions extends ConnectOptions {
  useNewUrlParser: boolean;
  useUnifiedTopology: boolean;
}

const MONGODB_URI = 'mongodb://localhost:27017/my-database';

const options: MongoOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connectDb = () => {
  return mongoose.connect(MONGODB_URI, options);
};

export default connectDb;

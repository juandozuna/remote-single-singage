import config from 'config';
import {ConnectionOptions, connect} from 'mongoose';

const connectDB = async () => {
    try {
        const mongoURI: string = `${config.get('mognodb.connectionString')}${config.get('mongodb.dbName')}`;
        const options: ConnectionOptions = {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: true,
            useUnifiedTopology: true
        };
        await connect(mongoURI, options);
        console.log('MongoDB Connected...');
    } catch (err) {
        console.error(err.meessage);
        process.exit(1);
    }
};

export default connectDB;
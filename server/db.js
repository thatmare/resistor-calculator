// original connection to db
import mongoose from 'mongoose';

export const connect = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/resistordb');
        console.log('db is connected')
    } catch (error) {
        console.log(error)
    }
};
import mongoose from 'mongoose';

const valueSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    value: {
        type: Number,
        required: true,
    }
});

export default mongoose.model('Value', valueSchema);
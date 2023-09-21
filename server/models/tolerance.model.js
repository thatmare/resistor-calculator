import mongoose from 'mongoose';

const toleranceSchema = new mongoose.Schema({
    color: {
        type: String,
        required: true,
    },
    value: {
        type: Number,
        required: true,
    }
});

export default mongoose.model('Tolerance', toleranceSchema);
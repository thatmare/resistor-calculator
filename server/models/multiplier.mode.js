import mongoose from 'mongoose';

const multiplierSchema = mongoose.Schema({
    color: {
        type: String,
        required: true,
    },
    value: {
        type: Number,
        required: true,
    }
});

export default mongoose.model('Multiplier', multiplierSchema);
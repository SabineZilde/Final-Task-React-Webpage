import mongoose from 'mongoose';

const commentSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        default: true,
    },
    comment: {
        type: String,
        default: true,
    }
});

const comment = mongoose.model('Comments', commentSchema);

export default comment;

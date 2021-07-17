import mongoose from 'mongoose';

//defining a structure how our data entity will look
const taskSchema = mongoose.Schema({
    title: {
        type: String, 
        required: true,
    },
    isCompleted: {
        type: Boolean,
        default: false,
    },
    labels: {
        type: Array,
        default: [], // empty array aka no labels
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

//create a module
const task = mongoose.model('Tasks', taskSchema);

export default task;
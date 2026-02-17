import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
    title: String,
    description: String,
    status: {
        type: String,
        enum: ["pending", "in progress", "completed"],
        default: "pending"
    },
    dueDate: Date,
    createdBy: {   // ✅ magac sax ah
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

}, { timestamps: true });


export default mongoose.model("Task", TaskSchema);

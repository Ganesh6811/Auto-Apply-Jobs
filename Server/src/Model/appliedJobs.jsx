import mongoose from "mongoose";

const appliedJobsSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },

    role: {
        type: String,
        required: true,
    },

    companyName: {
        type: String,
        required: true,
    },

    package: {
        type: Number,
        required: true,
    }

}, { timestamps: true });


const appliedJobsModel = mongoose.model("AppliedJobs", appliedJobsSchema);

export default appliedJobsModel;
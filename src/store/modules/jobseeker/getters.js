export default {
    jobSeeker(state, rootGetters) {
        const jobSeekerId = rootGetters.userId;
        // const token = rootGetters.token;
        return state.jobSeekers.filter(req => req.jobSeekerId === jobSeekerId);
    },
}
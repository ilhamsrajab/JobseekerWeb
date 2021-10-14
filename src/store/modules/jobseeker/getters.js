export default {
    jobSeeker(state, rootGetters) {
        const jobSeekerId = rootGetters.id;
        return state.jobSeeker.filter(req => req.jobSeekerId === jobSeekerId);
    },
}
export default {
    async fetchJobSeeker(context, _) {
        const jobSeekerID = context.rootGetters.id;
        const token = context.rootGetters.token;
        const response = await fetch(
          `http://127.0.0.1:8000/api/get_job_seeker_data_diri`,
          {
            headers: {
                'Authorization': 'Bearer ' + token
            }
          }
        );
        const responseData = await response.json();
    
        if (!response.ok) {
          const error = new Error(responseData.message || 'Failed to fetch!');
          throw error;
        }
    
        const jobs = [];
    
        for (const key in responseData) {
          const jobs = {
            id: key,
            jobSeekerId: jobSeekerID,
            nama: responseData[key].nama,
            nik: responseData[key].nik,
          };
          jobs.push(jobs);
        }
    
        context.commit('setJobSeeker', jobs);
      }
}
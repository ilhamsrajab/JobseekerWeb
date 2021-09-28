export default {
    async login(context, payload) {
      const response = await fetch('http://127.0.0.1:8000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
        })
      });

      const responseData = await response.json();

      if (!response.ok) {
        console.log(responseData);
        const error = new Error(responseData.message || 'Failed to authenticate. Check your login data.');
        throw error;
      }

      console.log(responseData);
      context.commit('setUser', {
        token: responseData.idToken,
      });
    },

    async register(context, payload) {
      const response = await fetch('http://127.0.0.1:8000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          username: payload.username,
          email: payload.email,
          password: payload.password,
          password_confirmation: payload.password_confirmation,
          role: payload.role,
        //   returnSecureToken: true
        }),
      });
  
      const responseData = await response.json();
  
      if (!response.ok) {
        console.log(responseData);
        const error = new Error(responseData.message || 'Failed to authenticate.');
        throw error;
      }
  
      console.log(responseData);
      context.commit('setUser', {
        token: responseData.token,
        // userId: responseData.localId,
        // tokenExpiration: responseData.expiresIn
      });
    },

    logout(context) {
      context.commit('setUser', {
        token: null
      });
    }
  };
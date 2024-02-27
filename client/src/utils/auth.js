import decode from 'jwt-decode';

class Authenticate {

     getProfile() { return decode(this.getToken()); }
     getToken() { return localStorage.getItem('id_token'); }
     loggedIn() {          
          const token = this.getToken();
          return (!!token && !this.isTokenExpired(token)); // handwaiving here
     }
     
     isTokenExpired(token) {
          try {
               const decoded = decode(token);
               if (decoded.exp < Date.now() / 1000) {
                    localStorage.removeItem('id_token');
                    return true;
                  } else return false;
          } catch (err) {
               return false;
          }
     }

     login(idToken) {
          localStorage.setItem('id_token', idToken); //Store token to localStorage
          window.location.assign('/'); // Reload/reset application state
     }

     logout() {          
          localStorage.removeItem('id_token'); //Clear token/profile from localStorage
          window.location.assign('/'); // Reload/reset application state
     }     
}

export default new Authenticate();
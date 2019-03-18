/* export default class Api {
//'https://www.googleapis.com/youtube/v3/commentThreads?part=id%2Csnippet&videoId=9bZkp7q19f0&key=AIzaSyCN8Z0e1u_dSFhNen05muGFYIzh-gsezQU'
    _API = 'https://swapi.co/api';
  
    async getResource(value) {
        //videos?id=9bZkp7q19f0 {a1 video}
      const res = await fetch(`https://www.googleapis.com/youtube/v3/${value}&key=AIzaSyCN8Z0e1u_dSFhNen05muGFYIzh-gsezQU`);
  
      if (!res.ok) {
        throw new Error(`Error` +
          `, received ${res.status}`)
      }
      return await res.json();
    }
  
  
  }
  */
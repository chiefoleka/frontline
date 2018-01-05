import axios from "axios";

const BASEURL = 'http://localhost:1337/';

export default {
  user: {
    login: credentails => 
      axios.post(`${BASEURL}api/v1/auth/user`, credentails).then(res => res.data.user)
  }
}
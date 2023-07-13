// export const baseurl = "https://node-poc.mobiloitte.org/"; // staging
// export const baseurl = "http://182.72.203.247:1948/"; // staging
export const baseurl = "http://ec2-54-234-138-40.compute-1.amazonaws.com:1948/"; // staging

let base = `${baseurl}api/v1`;
let user = `${base}/user`;

const Apiconfigs = {
  register: `${user}/register`,
  login: `${user}/login`,
  forgotPassword: `${user}/forgotPassword`,
  verifyOTP: `${user}/verifyOTP`,
  resetPassword: `${user}/resetPassword`,
  allUserList: `${user}/allUserList`,
  getQRCode: `${user}/getQRCode`,
};

export default Apiconfigs;

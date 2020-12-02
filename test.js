const regex = /(?<User>[\w\d][a-zA-Z0-9._-]*[\w\d])@(?<Domain>[\w\d][a-zA-Z0-9._-]*[\w\d]).(?<FirstLevel>[a-z0-9]{2,10})/;
const str = `desorbaix.formation@free.fr
`;
let m;

if ((m = regex.exec(str)) !== null) {
  
}
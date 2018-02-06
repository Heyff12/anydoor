const path = require('path');

const mineTypes = {
  'css': 'text/css',
  'gif': 'image/gif',
  'html': 'text/html',
  'ico': 'image/x-icon',
  'jpeg': 'image/jpeg',
  'jpg': 'image/jpg',
  'png': 'image/png',
  'svg': 'image/svg+xml',
  'tiff': 'image/tiff',
  'js': 'text/javscript',
  'json': 'application/json',
  'pdf': 'application/pdf',
  'swf': 'application/x-shockwave-flash',
  'txt': 'text/plain',
  'wav': 'audio/x-wav',
  'wma': 'audio/x-ms-wma',
  'wmv': 'video/x-ms-wmv',
  'xml': 'text/xml'
};


module.exports = (filePath) => {
  let ext = path.extname(filePath).split('.').pop().toLowerCase();
  if(!ext){
    ext = filePath;
  }
  return mineTypes[ext] || mineTypes['txt'];
};

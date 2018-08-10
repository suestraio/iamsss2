var AWS = require('aws-sdk');
AWS.config.region = 'us-east-2';

var s3 = new AWS.S3();
var params = {Bucket: 'videos.suestra.io', Key: 'acloudguru/acloudguru-servicios1.mp4', Expires: 300};
s3.getSignedUrl('getObject', params, function (err, url) {
  console.log("The URL is", url);
});
'use strict';
var AWS = require('aws-sdk');

var ses = new AWS.SES({
   region: 'us-east-1'
});



module.exports.hello = (event, context, callback) =>{
  // print out the event information on the console (so that we can see it in the CloudWatch logs)
 // console.log(`The following happend in the DynamoDB database table "users":\n${JSON.stringify(event.Records[0].dynamodb, null, 2)}`);
console.log('hello this work');
var eParams = {
        Destination: {
            ToAddresses: ["rkmmahaseth@gmail.com"]
        },
        Message: {
            Body: {
                Text: {
                    Data: JSON.stringify(event.Records[0].dynamodb, null, 2)
                }
            },
            Subject: {
                Data: "Ses Test Email"
            }
        },
        Source: "'aws tutorial' <"+"rkmmahaseth@gmail.com"+">"
    };

    var email = ses.sendEmail(eParams, function(err, data){
            if(err) console.log(err);
            else {
                console.log("===EMAIL SENT===");
                console.log(data);
            }
        });


  callback(null, { event });
};
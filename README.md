# whatsapp-group-invite-sender
This is a Node.js script that uses the whatsapp-web.js package to send WhatsApp alerts to a list of contacts. The script can be run from the terminal using the command node watsapp.js.

# Prerequisites
Before running the script, you need to make sure that you have the following:

Node.js installed on your system.
An active WhatsApp account on your phone.
A WhatsApp Web session that is logged in and authenticated.
Installation
To install the required packages, run the following command in your terminal:

npm install qrcode-terminal whatsapp-web.js

# Usage
To use the script, you need to provide the following inputs:

message: The message you want to send to the contacts.
numbers: An array of phone numbers in the format "+91XXXXXXXXXX".
update_status: A boolean flag indicating whether you want to update the message status or not.
You can send the WhatsApp messages in batches of 11 contacts at a time. To get the contacts in the required format, you can copy the mobile numbers from an Excel sheet and paste them in the script.

Once you have provided the required inputs, run the script using the following command:
node watsapp.js


The script will generate a QR code that you need to scan using your WhatsApp account to authenticate the session. Once the session is authenticated, the script will send the message to the specified contacts.

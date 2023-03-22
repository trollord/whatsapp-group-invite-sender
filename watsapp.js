const qrcode = require("qrcode-terminal");
const { Client, LocalAuth, MessageMedia } = require("whatsapp-web.js");

const client = new Client({
    authStrategy: new LocalAuth(),
});
client.initialize();
client.on("qr", (qr) => {
    qrcode.generate(qr, { small: true });
});
client.on("authenticated", () => {
    console.log("AUTHENTICATED");
});
function sendWhatsappAlert(message, numbers, update_status) {
    if (update_status == true) {
        client.on("ready", async () => {
            const number = numbers;
            // Your message.
            const text = message;
            const chatId = number.substring(1) + "@c.us";
            // Sending message.
            await client.sendMessage(chatId, text);
        });
    }

    return "emd";
}

// you can send the whatsapp messages in the batches of 11 contacts at a time
// to get the contacts in this json format, just copy the mobile numbers from the excel sheet and paste it in chatgpt to get this format
const conatct = [

    // "+919999999999",
    // "+918888888888",

]
const link = "enter the whatsapp link here"
const message = `Please join the WhatsApp group for the interviews if you haven't been added yet. Here's the link to join: ${link}`;
for (let i = 0; i < conatct.length; i++) {
    sendWhatsappAlert(message, conatct[i], true);
}

// to run this file, just type node watsapp.js in the terminal




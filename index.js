const id = document.getElementById("inputIdInst")
const apiToken = document.getElementById("inputApiInst")
const responseArea = document.getElementById("responseArea")

const messageInput = document.getElementById("messageInput");
const phoneNumberInput = document.getElementById("phoneNumberInput");

const filePhoneInput = document.getElementById("filePhoneInput");
const urlInput = document.getElementById("urlInput");

const getUrl = (nameMethod) => {
    const idInstance = id.value;
    const apiTokenInstance = apiToken.value;

    return `https://7201.api.green-api.com/waInstance${idInstance}/${nameMethod}/${apiTokenInstance}`
}


const getSettings = async () => {
    responseArea.value = "";
    const nameMethod = "getSettings"

    const url = getUrl(nameMethod)

    const response = await fetch(url);
    const data = await response.json();

    responseArea.value = JSON.stringify(data, null, 2);
}

const getStateInstance = async () => {
    responseArea.value = "";
    const nameMethod = "getStateInstance"

    const url = getUrl(nameMethod)

    const response = await fetch(url);
    const data = await response.json();

    responseArea.value = JSON.stringify(data, null, 2);
}

const sendMessage = async () => {
    responseArea.value = "";
    const phone = phoneNumberInput.value;
    const message = messageInput.value;

    const body = {
        chatId: `${phone}@c.us`,
        message: `${message}`,
    }

    const nameMethod = "sendMessage"

    const url = getUrl(nameMethod)

    const response = await fetch(url,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    });

    const data = await response.json();

    responseArea.value = JSON.stringify(data, null, 2);

    messageInput.value = "";
}

const sendFileByUrl = async () => {
    responseArea.value = "";
    const phone = filePhoneInput.value;
    const urlFile = urlInput.value;

    const fileName = urlFile.split("/").pop();
    const name = fileName.split(".").pop();

    const body = {
        chatId: `${phone}@c.us`,
        urlFile: urlFile,
        fileName: name
    }

    const nameMethod = "sendFileByUrl"

    const url = getUrl(nameMethod)

    const response = await fetch(url,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    });

    const data = await response.json();

    responseArea.value = JSON.stringify(data, null, 2);

    urlInput.value = "";
}
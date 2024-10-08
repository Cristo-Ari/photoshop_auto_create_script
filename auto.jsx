function getRandomString(length) {
    var characterSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var randomString = "";
    for (var currentCharacterIndex = 0; currentCharacterIndex < length; currentCharacterIndex++) {
        randomString += characterSet.charAt(Math.floor(Math.random() * characterSet.length));
    }
    return randomString;
}

function getCurrentFormattedDateTime() {
    var currentDateTime = new Date();
    var currentDay = currentDateTime.getDate();
    var currentMonthIndex = currentDateTime.getMonth();
    var currentMonthNames = ["January", "February", "March", "April", "May", "June", 
                             "July", "August", "September", "October", "November", "December"];
    var currentMonthName = currentMonthNames[currentMonthIndex];

    var formattedDateTimeString = currentDay + "-" + currentMonthName + "-" + getRandomString(5);
    return formattedDateTimeString;
}

function createNewPhotoshopDocument() {
    var canvasWidthPixels = 1920;
    var canvasHeightPixels = 1080;
    var canvasResolutionDPI = 300;
    var colorModeRGB = NewDocumentMode.RGB;
    var formattedDocumentName = getCurrentFormattedDateTime();
    var newDocument = app.documents.add(
        canvasWidthPixels,
        canvasHeightPixels,
        canvasResolutionDPI,
        formattedDocumentName,
        colorModeRGB
    );
    app.activeDocument = newDocument;
    try {
        var newDocumentFilePath = new File("D:\\Projects\\MyPhotoshopProjects\\" + formattedDocumentName + ".psd");
        app.activeDocument.saveAs(newDocumentFilePath, new PhotoshopSaveOptions(), true, Extension.LOWERCASE); // Сохраняем документ
    } catch (error) {
        alert("Saving error - : " + error.message); // Обработка ошибок
    }
}

createNewPhotoshopDocument();

/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import qr from 'qr-image';
import inquirer from 'inquirer';
import fs from 'fs';

inquirer.prompt([{   
    type: 'type',
    name: 'url',
    message: 'Type in url:'

}]).then((answers) =>{
    var url = answers.url;
    var qr_png = qr.image(url);
    qr_png.pipe(fs.createWriteStream("url_QR.png"));
    fs.writeFile("userInput.txt",url, (err) =>{
    if (err) throw err;
    console.log("The file has been saved!");
} );

}).catch((error) =>{
    console.log("In the catch.")
    console.log(error)

});

// console.log(in


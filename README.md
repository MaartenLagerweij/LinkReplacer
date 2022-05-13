# LinkReplacer
## What is this tools for?
This LinkReplacer tool is used for replacing a large amount of different links. This can be used for content files that include a big amount of internal links in HTML, but that need to be replaced. 
Instead of manually changing these links, it's possible to include a .csv file with the old links that will be searched for in the content en the new links that need to replace the original links. 
## How to use the tool? 
Paste the HTML content in the left text area input field. There is no limit to the amount of words. 
After pasting the content, you can upload your .csv file. The file upload button only works with a .csv file. You first need to create the .csv file. 
### How to create the .csv file? 
Creating the .csv file is an easy step. You can do this with excel or Google Spreadsheets. Paste all your url's that you want to be found in column A of the file. Then next to each url in column B you paste/insert all the links that you want that link from column A replaced with. Next, download or save the file as a .csv file. This file you can use to upload in the LinkReplacer tool. 
### Converting and copying the data
After uploading the content with links and the .csv file you can click the Convert button. In case there are no links found in the textarea, or there is no .csv file, there will be an error message.
If both are there, the output content with be inserted on the right side. Also a button with copy the HTML output to the clipboard will show up. You can use this button to copy the outputted information to your clipboard and paste it back to any editor or other tool you are using.
## How does the tool work? 
When both content and .csv file are included and the Convert button is used, then the submitFunction() will run. In this function the content will be saved in the str and all the url's that can be found will be saved in the urls variable. 
Next, if the selectedFile is true, then the fileReader will convert the data in the csv file. The url's will first be splitted into an array dataArray, where still the original url and the url to replace will be on the same index spot. With the .forEach function each index in the dataArray will be splitted and stored in the object dataObject. 
Lastly the function calls the function replaceURLS(urls,str) with the urls and str content. That function replaces all the url's in str. and outputs it to the output div. 
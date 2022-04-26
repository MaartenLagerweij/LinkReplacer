let selectedFile,data;
const dataObject = {}

document.getElementById('excel-input').addEventListener('change', (event)=> {
    selectedFile = event.target.files[0];
})

function submitFunction(){
    
    if(!selectedFile) return document.getElementById('csv-message').classList.remove('display-none-button')
    if(selectedFile) {
        document.getElementById('csv-message').classList.add('display-none-button')
        document.getElementById('copyToClipboard').classList.remove('display-none-button')
    }

    let str = document.getElementById('text-input').value
    if(!/(?<=href=").+?(?=")/.test(str)) return document.getElementById('no-links-message').classList.remove('display-none-button')
    const urls = str.match(/(?<=href=").+?(?=")/g)
    document.getElementById('no-links-message').classList.add('display-none-button')

    if(selectedFile){
        let fileReader = new FileReader();
        fileReader.readAsBinaryString(selectedFile);
        fileReader.onload = (event)=> {
            data = event.target.result
            dataArray = data.split(/\r?\n/);
            dataArray.forEach(element => {
                let originalURL = element.match(/.+?(?=,)/)[0]
                let replaceURL = element.replace(originalURL+',"',"").replace(/"$/,'')
                //This will save everything from column A in the .csv as a property and column B as the value:
                dataObject[originalURL] = replaceURL
            })
            //Call the function replaceURLS when the previous function is done
            replaceURLS(urls,str)
        }
    }
}

function replaceURLS(urls,str){
    urls.forEach(url=> {
        //This will replace every url that was matched in str, replace it with the corresponding url from the dataObject
        if(dataObject[url])str = str.replaceAll(url,dataObject[url]) 
    })
    document.getElementById('output').innerHTML = str
}

function copyToClipboard(){
    var outputVal = document.getElementById('output');
    navigator.clipboard.writeText(outputVal.innerHTML);
}


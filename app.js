let selectedFile,data;
const dataObject = {}

document.getElementById('excel-input').addEventListener('change', (event)=> {
    selectedFile = event.target.files[0];
})

document.getElementById('excel-button').addEventListener('click', ()=> {
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
        }
    }
})



function myFunction(){
    const str = document.getElementById('text-input').value
    document.getElementById('output').innerHTML = str
    
    

}

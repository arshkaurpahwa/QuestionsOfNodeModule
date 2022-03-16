// given an array arr=[audio,video,image,software,documents,applications,other]
//make folder for each element in the given array and inside each folder make 4 files of that type

/*audio folder bnao ,video folder ,image .............
a hr ek me 4 file bnado*/
let fs=require("fs");
let path=require("path");

let arr=['Audio','Video','Software','Documents','Applications','Others'];

let nameArr=['abc','efg','xyz','def'];

let organisePath=path.join(__dirname,"Organise");
let extensionArr =['.mp3','.mp4','.exe','.pdf','.apk','.rar'];

if(!fs.existsSync(organisePath))
{
    fs.mkdirSync(organisePath)
}
for(let i=0;i<arr.length;i++)
{
    let folderPath= path.join(organisePath,arr[i]);
    if(!fs.existsSync(folderPath))
    {
    fs.mkdirSync(folderPath);
    }

    for(let j=0;j<nameArr.length;j++)
    {
        let fileName=nameArr[j]+extensionArr[i];
        let fileKaPath = path.join(folderPath,fileName);
        fs.writeFileSync(fileKaPath,"");
    }
}


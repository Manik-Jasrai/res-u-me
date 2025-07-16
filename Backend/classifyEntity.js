
const classifyEntity = async (keywords) => {

    //classifying each word with categories
    const response = await fetch("https://8000-01k0a71nvspnswnbcathnbea0v.cloudspaces.litng.ai/predict",
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "text": keywords })
        });
    const raw_data = await response.json();
    const outputString = raw_data['output'];

    const validJsonString = outputString.replace(/'/g, '"').replace(/\b(\w+):/g, '"$1":');
    const data = JSON.parse(validJsonString);

    const categories = {
        "Designation": "",
        "Skills": "",
        "Degree": "",
        "Companies worked at": ""
    };

    const mergedData = [];

    //solving the problem of word breaking
    for(let i =0;i<data.length -1;i++) {
        const currentObj = data[i];
        const nextObj = data[i+1];

        if (currentObj.end === nextObj.start) {
            const newWord = currentObj.word.concat(nextObj.word);
            const mergedObj = {...currentObj,word : newWord};
            mergedData.push(mergedObj);
            i++;
        } else {
            mergedData.push(currentObj);
        }
    }
    if (data.length > 0) {
        mergedData.push(data[data.length - 1]);
    }

    //sorting the data into categories
    mergedData.forEach(obj => {
        const category = obj.entity_group;
        if (categories.hasOwnProperty(category)) {
            const words = obj.word.replace(/#/g,'');
            categories[category] = categories[category].concat(words," ");
            
        }
    });

    //combining all categories into a string
    let classifiedData = "";
    Object.values(categories).forEach(category => {
        classifiedData = classifiedData.concat(category," ");
    })

    console.log(classifiedData);
    return classifiedData;
}

module.exports = classifyEntity;

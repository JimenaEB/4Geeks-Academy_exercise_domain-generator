const PRONOUMS = ['the', 'our', 'just'];
const NOUNS = ['doit', 'malcom', 'breatcode', 'italia'];
const EXTENSIONS = ['com', 'it', 'de'];

window.onload = () => {
    getDomain();
};

function getDomain() {
    let domain = [];
    for(const pronoum of PRONOUMS) {
        for(const noun of NOUNS) {
            for(const extension of EXTENSIONS) {
                let addExtension = checkExtension(pronoum.concat(noun), extension);
                let firstPart = pronoum.concat(noun);

                if(addExtension) {
                    let createIndexList = [...firstPart];
                    createIndexList.splice(firstPart.length - extension.length, 0, '.')
                    domain.push(createIndexList.join(''));
                } else {
                    domain.push(firstPart.concat('.', extension));
                }
            }
        }
    }
    console.log(domain);
}

function checkExtension(domain, extension) { 
    return domain.includes(extension, domain.length - extension.length);
}
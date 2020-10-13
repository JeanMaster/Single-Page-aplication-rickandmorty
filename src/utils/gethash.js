const getHash = () => 
    location.hash.slice(1).toLocaleLowerCase().split("/")[1]  || "/" //de  ["", 1 , ""] solo devuelve el 1\

    export default getHash
/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/



//1. this is a variable to hold my NFTs. Its going tobe an array

const myNFTS = [];


//2. this is the NFT object holding the NFT's properties 
function mintNFT(id, _name, eyeColor, shirtType, _swags){
    let degenNFT = {
        'id': id,
        'name': _name,
        'eye_color': eyeColor,
        'shirt_type': shirtType,
        'bling': _swags
    }; 

    myNFTS.push(degenNFT);    
};

//3 listNFTs()
function listNFTs(){
    
    for( let i=0; i<myNFTS.length; i++){
        console.log(myNFTS[i]);
        console.log("\n");

        console.log("ID:" + (i + 1));
        console.log("Name:" + myNFTS[i].name);
        console.log("Eye Color: " + myNFTS[i].eye_color);
        console.log("Shirt Type: " + myNFTS[i].shirt_type);
        console.log("Swags: " + myNFTS[i].bling);
    }
}


//4 getTotalSupply();
function getTotalSupply(){
    console.log("The Total Supply is: " + myNFTS.length);
}

mintNFT(1, "JOEY", "brown", "sleeves", "gold chain");
mintNFT(2, "Brandsy", "yellow", "shorts", "metal chain");
mintNFT(3, "shotgun", "blue", "gun", "archaic");
mintNFT(4, "sage", "ink", "pen", "silver");
mintNFT(5, "Vibranium", "deep purple", "rare", "metal");


listNFTs();
console.log("\n");
getTotalSupply();

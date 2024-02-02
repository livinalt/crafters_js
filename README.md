# NFT Minting System

## Overview

This program demonstrates a basic NFT (Non-Fungible Token) minting system. It includes functionality to create, list, and retrieve information about NFTs.


### 1. Variable for NFTs

- A variable named `myNFTS` is created as an array to hold the NFTs.

```javascript
const myNFTS = [];
```

### 2. Object for NFT Metadata

- The `mintNFT` function is defined to create an NFT object with specified metadata properties (id, name, eye color, shirt type, and swags). The created NFT is then stored in the `myNFTS` array.

```javascript
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
```

### 3. List NFTs

- The `listNFTs` function is implemented to print all NFT metadata to the console.

```javascript
function listNFTs(){
    for( let i=0; i<myNFTS.length; i++){
        console.log("ID:" + (i + 1));
        console.log("Name:" + myNFTS[i].name);
        console.log("Eye Color: " + myNFTS[i].eye_color);
        console.log("Shirt Type: " + myNFTS[i].shirt_type);
        console.log("Swags: " + myNFTS[i].bling);
        console.log("\n");
    }
}
```

### 4. Total Supply

- The `getTotalSupply` function is defined to return the total number of created NFTs.

```javascript
function getTotalSupply(){
    console.log("The Total Supply is: " + myNFTS.length);
}
```

## Example Usage

- Sample NFTs are minted using the `mintNFT` function, and then the `listNFTs` and `getTotalSupply` functions are called to showcase the functionality.

```javascript
mintNFT(1, "JOEY", "brown", "sleeves", "gold chain");
mintNFT(2, "Brandsy", "yellow", "shorts", "metal chain");
mintNFT(3, "shotgun", "blue", "gun", "archaic");
mintNFT(4, "sage", "ink", "pen", "silver");
mintNFT(5, "Vibranium", "deep purple", "rare", "metal");

listNFTs();
console.log("\n");
getTotalSupply();
```

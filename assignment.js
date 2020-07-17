function feetToMile(feet) {
	// body... 
	const value = 5280;
	let isMile = feet/value;
	return isMile;

}

let isMile = feetToMile(1000);
console.log(isMile);


// Wood Calculator

function woodCalculator(chair, table, bed){

	// Number of Woods needed for each furniture
	const forChair = 1;
	const forTable = 3;
	const forBed = 5;

	// Total wood needed for each furniture 
	let woodForChair = chair*forChair; 
	let woodForTable = table*forTable; 
	let woodForBed = bed*forBed;

	//Total amount of Woods
	let totalWood = (woodForChair + woodForTable + woodForBed);

	return totalWood;  
}

//Total Outcome
let outcome = woodCalculator(5,5,5);
console.log("Woods needed:",outcome);


// Brick Calculator

function brickCalculator(numOfFloors){

	// number of bricks per feet
	const bricksPerFeet = 1000;

	if( numOfFloors <= 10 ){
		return (15*bricksPerFeet +' bricks');
	}
	if( 11 <= numOfFloors <= 20 ){
		return (12*bricksPerFeet +' bricks');
	}
	if( numOfFloors > 20 ){
		return (10*bricksPerFeet +' bricks');
	}

}

let numOfBicks = brickCalculator(11);
console.log(numOfBicks);


// Tiny Friend

function tinyFriend(friends){
	let friendsName = friends[0];
	for (let i = 0; i < friends.length; i++) {
		if (friends.length < friendsName){
			friendsName = friends[i];
		}
		
	}

	return friendsName;
}

let isTiny = tinyFriend(['lol','Akarimy','Rahi', 'shafie']);
console.log(isTiny);
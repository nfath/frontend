const helloWorlds = (number) => {
    console.log("Q: Is " + number + " a number?" + " A: " + !isNaN(number) );

    if (isNaN(number)){
        console.log("Goodbye World!");
        return;
    }

    for(var i=0; i<number; i++){
        console.log("Hello World!");
    }
}

// helloWorlds(5);
// helloWorlds("Nader");

helloWorlds(true);
helloWorlds("Hello");
helloWorlds(null);
helloWorlds(undefined);

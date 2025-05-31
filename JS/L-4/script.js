console.log("Loops in JS");

// Basic For Loops
for(let i =0;i<=30;i++)
{
    console.log(i+" ");
}

// For-In Loop (Works to prin the key value pairs of the object).

let obj = {
    name:"Preetham Dundigalla",
    Role:"Student",
    College:"VIT-AP",
    Placement:"Yes"
}
for (const key in obj) {
    let res = obj[key];
    console.log(key,res);
}
    

// For-OF Loops (Itrerates through each character)

for (const character of "Preetham") {
    console.log(character+" ");
}

// While Loop

let num = 10;
while(num>0)
{
    console.log("Pretham Dundigalla");
    num--;
}
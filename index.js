// Your code here
const EmployeeRecord = ["Gray", "Worm", "Security", 1];
const property = ["firstName", "familyName", "title", "payPerHour","timeInEvents","timeOutEvents"];

let obj = new Object();


function createEmployeeRecord(propdata){

for(let i=0; i < propdata.length; i++){

obj[property[i]] = propdata[i];

};
obj.timeInEvents = [];
obj.timeOutEvents = [];
return obj;

};



function createEmployeeRecords(twoRows){

 let employeeRds2 = [];
  //console.log(property.length);
 //////////////////////////////////////////////////// for loop create 2D array with Key values
 
for(let i=0; i < twoRows.length; i++){
   
    let objone = new Object();

    for(let a=0; a < property.length; a++){
       
     //add the elements to the array
     objone[property[a]] = twoRows[i][a];
     
    };
    employeeRds2.push(objone);

 };  

 //console.log(employeeRds2); 
return employeeRds2;

};


function createTimeInEvent(NArray,timeinvalue){

//console.log(NArray);
if(NArray.timeInEvents=== undefined){
   
    NArray.timeInEvents = [];
    //console.log("it is undefined");
 }else{/*console.log("its not undefined")*/}; 

 let dateTimeInParts = timeinvalue.toString().split( " " ); 
let tdate;
let thour;
//console.log(NArray);
tdate = dateTimeInParts[ 0 ]; // "2021-08-31"
thour= parseInt(dateTimeInParts[ 1 ]); //1400

    const timeInEvent = {
        type: 'TimeIn',
        time: timeinvalue,
        date: tdate,
        hour: thour        
      };
      
    NArray.timeInEvents.push(timeInEvent); 
return NArray;
};

function createTimeOutEvent(NArray2,timeoutvalue){
    if(NArray2.timeOutEvents=== undefined){
   
        NArray2.timeOutEvents = [];
        //console.log("it is undefined");
     }else{/*console.log("its not undefined")*/}; 

    //console.log(NArray2);
let dateTimeInParts2 = timeoutvalue.toString().split( " " ); 
let tdate2 = dateTimeInParts2[ 0 ]; // "2021-08-31"
let thour2= parseInt(dateTimeInParts2[ 1 ]);

     let timeInEvent2 = {
        type: 'TimeOut',
        time: timeoutvalue,
        date: tdate2,
        hour: thour2
      };
    NArray2.timeOutEvents.push(timeInEvent2); 
    
   //console.log(NArray2); 
    return NArray2;
    

};
 


function hoursWorkedOnDate(hoursworked){

let totalinH = hoursworked.timeInEvents;
let totalouth = hoursworked.timeOutEvents;
let timeInEvents = ((totalouth[0].hour)/100)-((totalinH[0].hour)/100); // Extract the hour value from the first element in the array


//console.log(timeInEvents);

return timeInEvents;

};

function wagesEarnedOnDate(wageworked){
    let totalinH2 = wageworked.timeInEvents;
    let totalouth2 = wageworked.timeOutEvents;
    let timeInEvents2 = ((totalouth2[0].hour)/100)-((totalinH2[0].hour)/100);
let wagesworked = (timeInEvents2) *(wageworked.payPerHour)

    //console.log(wagesworked);
    return wagesworked;

};

function allWagesFor(multiwages){
    //console.log(multiwages);
  let multiInH = multiwages.timeInEvents;  
  let multiOutH = multiwages.timeOutEvents; 

////// get Time in Hours and added and save to a holder//////////////
let holder = [];
for (let a=0; a < multiInH.length; a++){
        holder.push((multiInH[a].hour)/100);
};
let multiinhours = holder.reduce((accumulator,value)=>{
    return accumulator + value;

},0);


////// get Time out  Hours and added and save to a holder//////////////
let holder2 = [];
for (let b=0; b < multiOutH.length; b++){
        holder2.push((multiOutH[b].hour)/100);
};
let multiinhours2 = holder2.reduce((accumulator,value)=>{
    return accumulator + value;

},0);

///// gets total hours and multiply it to wages////////////////////////
let thourstotal = (multiinhours2 - multiinhours);
let twagesworked = (thourstotal) *(multiwages.payPerHour);


//////////////// return results ///////////////////////////////////////
//console.log(twagesworked);
return twagesworked;

};

function calculatePayroll(employeeE){
    
let firstemployee; // = employeeE[0].timeInEvents;
let firstemployeeout; // =employeeE[0].timeOutEvents;

let holder3 = [];
let temptotalamt = [];
/////////////// extract hours in   ///////////////////////////////////////
for (let b=0; b < employeeE.length; b++){
        //holder3.push((firstemployee[b].hour)/100);
        firstemployee = employeeE[b].timeInEvents;  //get time IN hours
        firstemployeeout = employeeE[b].timeOutEvents; //get time OUT hours
        holder3 = employeeE[b].payPerHour;
        for (let c=0; c < firstemployee.length; c++){
           

            temptotalamt.push(( ((firstemployeeout[c].hour)/100) - ((firstemployee[c].hour)/100) )* holder3);  //get the total
                  
        };
};

let totalamt = temptotalamt.reduce((accumulator,value)=>{
    return accumulator + value;
},0);  

//console.log( temptotalamt);


   return totalamt;

};




let dob=document.getElementById("birthDate");
let currentDate=document.getElementById("currentDate");
let output=document.getElementById("output");

document.getElementById("calculatBtn").addEventListener("click",()=>{
    // console.log("clicked " , dob.value,currentDate.value);
    if(dob===" " ){
        output.innerHtml("First Select Date");
        alert("enter")
        console.log("enter")

    }

    else{
        calculateAgeDifference(dob.value,currentDate.value);
    }
})

function calculateAgeDifference(start,end){
  
    let dobYear=parseInt(start.substring(0,4),10); //base 10
    let dobMonth=parseInt(start.substring(5,7),10);
    let dobDate=parseInt(start.substring(8,10),10);
    let curYear=parseInt(end.substring(0,4),10);
    let curMonth=parseInt(end.substring(5,7),10);
    let curDate=parseInt(end.substring(8,10),10);

    //year difference
    let yearAgedif=curYear-dobYear;

    //Month difference
    let monthAgeDiff;
    if(curMonth>=dobMonth){
        monthAgeDiff=curMonth-dobMonth;
    }
    else{
        yearAgedif--;
        monthAgeDiff=12+curMonth-dobMonth;
    }

    //Days Difference
    let dateAgeDiff;
    if(curDate>=dobDate){
        dateAgeDiff=curDate-dobDate;
    }
    else{
        monthAgeDiff--
        noOfDaysInDOB=daysInMonth(dobMonth,dobYear);
        dateAgeDiff=noOfDaysInDOB+curDate-dobDate;

        //case when monthAgeDiff is negative
        if (monthAgeDiff<0) {
            monthAgeDiff=11;
            yearAgedif--;
        }
    }

    output.innerHTML= yearAgedif +" Years " + monthAgeDiff + " Months " + dateAgeDiff + " Days "; 
}
    function daysInMonth(month,year){
        return new Date(year,month,0).getDate();
    }
 



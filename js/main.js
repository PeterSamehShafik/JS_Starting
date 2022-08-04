function clean(){
    document.getElementById("demo").innerHTML =" "
}
function questionOne() {
    clean();
    alert("Write a program that allow to user enter number then print it");
    var num = Number(window.prompt("enter a number"));
    document.getElementById("demo").innerHTML = "You Entered: " + num;
}
function questionTwo() {
    clean();
    alert("Write a program that take number from user then print yes if that number can divide by 3 and 4 otherwise print no");
    var num = Number(window.prompt("enter a number"));

    if (num % 3 == 0 && num % 4 == 0) {
        window.alert("yes");
    }
    else {
        window.alert("No");
    }
}
function questionThree(){
    clean();
    alert("Write a program that allows the user to insert 2 integers then print the max");
    var fnum = Number(window.prompt("enter the first number"));
    var snum = Number(window.prompt("enter the second number"));

    if(fnum>snum){
        window.alert("max: "+fnum);
    }
    else if(snum>fnum){
        window.alert("max: "+snum);
    }
    else{
        window.alert("equal");
}
}
function questionFour(){
    clean();
    alert("Write a program that allows the user to insert an integer then print negative if it is negative number otherwise");
    var num = Number(window.prompt("enter a number"));

    if(num>0){
        window.alert("POSTIVE!");
    }
    else if(num<0){
        window.alert("NEGATIVE!");
    }
    else if(num==0){
        window.alert("ZERO");
    }
    else{
        window.alert("NaN!");
    }
}
function questionFive(){
    clean();
    alert("Write  a  program  that  take  3 integers from  user  then  print  the  max  element and the min element.");
    var firstNum = Number(window.prompt("enter the first number"));
    var secNum = Number(window.prompt("enter the second number"));
    var thirdNum = Number(window.prompt("enter the third number"));
    
    if (firstNum > secNum && firstNum > thirdNum){
        if(secNum>thirdNum){
            window.alert("Max: "+firstNum+" Min: "+thirdNum);
        }
        else{
            window.alert("Max: "+firstNum+" Min: "+secNum);
        }
    }
    else if(secNum > firstNum && secNum > thirdNum){
        if(firstNum>thirdNum){
            window.alert("Max: "+secNum+" Min: "+thirdNum);
        }
        else{
            window.alert("Max: "+secNum+" Min: "+firstNum);
        }
    }
    else{
        if(firstNum > secNum){
            window.alert("Max: "+thirdNum+" Min: "+secNum);
        }
        else{
            window.alert("Max: "+thirdNum+" Min: "+firstNum);
        }
    }
}
function questionSix(){
    clean();
    alert("Write a program that allows the user to insert integer number then checkIf a number is oven or odd");
    var num = Number(window.prompt("enter a number"));

    if(num%2==0){
        window.alert("EVEN!");
    }
    else{
        window.alert("ODD!");
    }    
}
function questionSeven(){
    clean();
    alert("Write a program to enter marks of five subjects and calculate total, average and percentage");
    var gradeOne = Number( window.prompt("enter grade 1"));
    var gradeTwo = Number( window.prompt("enter grade 2"));
    var gradeThree = Number( window.prompt("enter grade 3"));
    var gradeFour = Number( window.prompt("enter grade 4"));
    var gradeFive = Number( window.prompt("enter grade 5"));
    
    var total= gradeOne+gradeTwo+gradeThree+gradeFour+gradeFive;
    var avg = total/5;
    var percent = (total/500)*100;
    
    window.alert(
        "Total marks: "+ total+
        " Avergage "+ avg+
        " Percentage "+percent
    );    
}
function questionEight(){
    clean();
    alert("Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonan ");
    
    var char = window.prompt("enter a character");
    if(char=='a'|| char=='A' || char=='e' || char=='E' || char=='i' || char=='I' ||
     char=='o' || char=='O' || char=='u' || char=='U')
    {
        window.alert("Vowel");
    }
    else{
        window.alert("Consonant");
    }    
}
function questionNine(){
    clean();
    alert("Write a program that allows user to insert integer then print all numbers between 1 to that’s number");
    var num = Number( window.prompt("enter a number"));

    for(var i=1;i<=num;i++){
        document.getElementById("demo").innerHTML+=" "+i+" ";
    }
}
function questionTen(){
    clean();
    alert("Write a program that allows user to insert integer then print a multiplication table up to 12");
    var num = Number( window.prompt("enter a number"));

    for(var i=2;i<=12;i++){
        document.getElementById("demo").innerHTML+="<span>"+num*i+"</span> ";
    }
    
}
function questionEleven(){
    clean();
    alert("Write a program that allows to user to insert number then print all even numbers between 1 to this numbe");
    var num = Number( window.prompt("enter a number"));
    var result="";
    for(var i=1;i<=num;i++){
        if(i%2==0){
            result+=i+" ";
        }
    }
    alert(result);
    
}
function questionTwelve(){
    clean();
    alert("Write a program that take two integers then print the power");
    var num = Number( window.prompt("enter a number"));
    var power = Number( window.prompt("enter a power num"));
    var result = 1;
    for(var i=0;i<power;i++){
        result*=num;
    }
    window.alert(result);
}
function questionThirteen(){
    clean();
    alert("Write a program to input month number and print number of days in that month");
    var month = Number( window.prompt("enter the month num"));

    if(month==1 || month==3 || month==5 || month==7|| month==8 || month==10 || month==12)
    {
        window.alert("31 day");
    }
    else if(month==2){
        window.alert("28 maybe 29 day");
    }
    else{
        window.alert("30 day");
    }

}
function questionFourteen(){
    clean();
    alert("Write a program to input marks of five subjectsPhysics, Chemistry, Biology, Mathematicsand Computer, Findpercentage and grade");
    var physics = Number( window.prompt("enter physics grade: "));
    var math = Number( window.prompt("enter math grade: "));
    var computer = Number( window.prompt("enter computer grade: "));
    var biology = Number( window.prompt("enter biology grade: "));
    var chemistry = Number( window.prompt("enter chemistry grade: "));
    
    var total= physics+math+computer+biology+chemistry;
    var result = (total/500)*100;
    
    if(result>= 90){
        window.alert("You Got 'A' Congrats!");
    }
    else if(result >= 80){
        window.alert("You Got 'B' Congrats!");
    }
    else if(result >= 70){
        window.alert("You Got 'C' Congrats!");
    }
    else if(result >= 60){
        window.alert("You Got 'D' Congrats!");
    }
    else if(result >= 40){
        window.alert("You Got 'E' Congrats!");
    }
    else{
        window.alert("You Got 'F', Congrats you've failed!");
    }
}
function questionFifteen(){
    clean();
    alert("USING SWITCH Write a program to print total number of days in month");
    var month = Number( window.prompt("enter the month num"));

    switch(month){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            window.alert("31 day");
            break;
        case 2:
            window.alert("28 maybe 29 day");
            break;
        default:
            window.alert("30 day");
    }
}
function questionsixteen(){
    clean();
    alert("USING SWITCH Write a program to check whetheran alphabet is vowel or consonat");
    var char = window.prompt("enter a character");
    switch(char){
        case 'a':
        case 'A':
        case 'e':
        case 'E':
        case 'i':
        case 'I':
        case 'o':
        case 'O':
        case 'u':
        case 'U':
            window.alert("Vowel");
            break;
        default:
            window.alert("Consonant");
    }
    
    
}
function questionseventeen(){
    clean();
    alert("USING SWITCH Write a program to find maximum between twonumbers");
    var fnum = Number(window.prompt("enter the first number"));
    var snum = Number(window.prompt("enter the second number"));
    
    switch(true){
        case fnum>snum:
            window.alert(fnum);
            break;
        case snum>fnum:
            window.alert(snum);
            break;
        default:
            window.alert("equal");
    }
}
function questionEighteen(){
    clean();
    alert("USING SWITCH Write a program to check whether a number is even or odd");
    var num = Number(window.prompt("enter a number"));

    switch(true){
        case num%2==0:
            window.alert("EVEN!");
            break;
        case num%2!=0:
            window.alert("ODD!");
            break;
    }    
}
function questionNineteen(){
    clean();
    alert("USING SWITCH Write a program to check whether a number is positive or negative or zero ");
    var num = Number(window.prompt("enter a number"));

    switch(true){
        case num>0:
            window.alert("POSTIVE!");
            break; 
    
        case num<0:
            window.alert("NEGATIVE!");
            break; 
    
        case num==0:
            window.alert("ZERO");
            break; 
    
        default:
            window.alert("NaN!");
        
    }
}
function questionTwenty(){
    clean();
    alert("USING SWITCH Write a program to create Simple Calculat");
    var firstNum = Number(window.prompt("enter the first Number"));
    var operator = window.prompt("Enter the Operator ( + , - , * , / , ^ )");
    var secondNum = Number(window.prompt("enter the second Number"));
    var result;
    switch(operator){
        case '+':
            result=firstNum+secondNum
            break;    
    
        case '-':
            result=firstNum-secondNum
            break;
    
        case '*':
            result=firstNum*secondNum
            break;
    
        case '/':
            result=firstNum/secondNum
            break;    
    
        case '^':
            result=1;
            for(var i=0;i<secondNum;i++){
                result*=firstNum;
            }
            break;
        default:
            alert("Wrong Operator");
    }
    if(result != undefined){
        document.getElementById("demo").innerHTML=firstNum+operator+secondNum+"="+result
    }
}

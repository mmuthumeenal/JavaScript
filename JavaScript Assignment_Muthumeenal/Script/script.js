function validate() {

    var one = /[a-z]{2,100}/i;
    var name1 = document.getElementById("fname").value;

    
    
    if (one.test(name1)) {
          document.getElementById("labe1").innerHTML = "Valid"
        document.getElementById("labe1").style.visibility = "visible"
        document.getElementById("labe1").style.color = "green"


    }
    else {
       
       
       
        if (name1.trim() == "") {
            document.getElementById("labe1").innerHTML = "Please enter valid First Name"
            document.getElementById("labe1").style.visibility = "visible"
            document.getElementById("labe1").style.color = "Red"

        }
        else {
           
           
            document.getElementById("labe1").innerHTML = "InValid"
            document.getElementById("labe1").style.visibility = "visible"
            document.getElementById("labe1").style.color = "Red"
        }



    }


    
    
    
    var two = /[a-z]{2,100}/i;
    var name7 = document.getElementById("lname").value;

        if (two.test(name7)) {
        document.getElementById("labe2").innerHTML = "Valid"
        document.getElementById("labe2").style.visibility = "visible"
        document.getElementById("labe2").style.color = "green"
    }

    else {
            if (name7.trim() == "") {
            document.getElementById("labe2").innerHTML = "Please Enter the last name"
            document.getElementById("labe2").style.visibility = "visible"
            document.getElementById("labe2").style.color = "red"
        }
          else {
            document.getElementById("labe2").innerHTML = "Invalid"
            document.getElementById("labe2").style.visibility = "visible"
            document.getElementById("labe2").style.color = "red"
        }
    }

    var three = /^[7-9][0-9]{9}$/;
    var name2 = document.getElementById("pnumber").value;



    
    
    
    
    if (three.test(name2)) {
        document.getElementById("labe5").innerHTML = "Valid"
        document.getElementById("labe5").style.visibility = "visible"
        document.getElementById("labe5").style.color = "green"
        false;
    }
      else {
        if (name2.trim() == "") {
            document.getElementById("labe5").innerHTML = "Please enter valid PhoneNumber"
            document.getElementById("labe5").style.visibility = "visible"
            document.getElementById("labe5").style.color = "red"
        }
        else {
            document.getElementById("labe5").innerHTML = "Please enter valid PhoneNumber"
            document.getElementById("labe5").style.visibility = "visible"
            document.getElementById("labe5").style.color = "red"

        }
    }

var four = /^(0?[1-9]|[12][0-9]3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
var name3 = document.getElementById("dob").value
if (four.test(name3)) {
    document.getElementById("labe4").innerHTML = "Valid"
    document.getElementById("labe4").style.visibility = "visible"
    document.getElementById("labe4").style.color = "green"

}
else {
    if (name3.trim() =="") {
        document.getElementById("labe4").innerHTML = "Please enter valid DOB"
        document.getElementById("labe4").style.visibility = "visible"
        document.getElementById("labe4").style.color = "red"
    }
    else {
        document.getElementById("labe4").innerHTML = "Invalid"
        document.getElementById("labe4").style.visibility = "visible"
        document.getElementById("labe4").style.color = "red"

    }

}


var five = /[0-9]{6}/;
var name4 = document.getElementById("zipcode").value;
if (five.test(name4)) {
    document.getElementById("labe8").innerHTML = "valid"
    document.getElementById("labe8").style.visibility = "visible"
    document.getElementById("labe8").style.color = "green"

}
else {

    if (name4.trim() == "") {
        document.getElementById("labe8").innerHTML = "Please Enter valid Pincode"
        document.getElementById("labe8").style.visibility = "visible"
        document.getElementById("labe8").style.color = "red"

    }
    else {
        document.getElementById("labe8").innerHTML = "InValid"
        document.getElementById("labe8").style.visibility = "visible"
        document.getElementById("labe8").style.color = "Red"

    }
}

var six = /^([a-z 0-9\.-]+)@([a-z A-Z 0-9 _]+).([a-z]+).(.[a-z]{2,8})?$/;
var name5 = document.getElementById("email").value;


if (six.test(name5)) {
    document.getElementById("labe3").innerHTML = "Valid"
    document.getElementById("labe3").style.visibility = "visible"
    document.getElementById("labe3").style.color = "green"

}
else {

    if (name5.trim() == "") {
        document.getElementById("labe3").innerHTML = "Please enter valid Email "
        document.getElementById("labe3").style.visibility = "visible"
        document.getElementById("labe3").style.color = "red"

    }
    else {
        document.getElementById("labe3").innerHTML = "InValid"
        document.getElementById("labe3").style.visibility = "visible"
        document.getElementById("labe3").style.color = "red"



    }

}
function sameAddress()
{
    var add1=document.getElementById("address").value;
    address3.value=add1
    var add2=document.getElementById("address1").value;
    address4.value=add2
    var add3=document.getElementById("address2").value;
    address5.value=add3
    var add4=document.getElementById("labe8").value;
    zipcode.value=add4
}
}
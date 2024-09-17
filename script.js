//User Prompt
let name=prompt("what is your name")
let welcome=document.getElementById("welcome")
welcome.innerHTML=`Welcome ${name} Please place your order ?`

//Array Declaration
let food=["Rice", "Beans", "Semo", "Eba", "Yam", "Potatoes"];

//send button declaration to be used when clicked
let btn1=document.getElementById("send");

//send button funtion
btn1.onclick=function(){
    let food_item=document.getElementById("input").value;
    let message=document.getElementById("message")

    // if(food.includes(food_item)&&food.includes("Rice")){
    //     let type=prompt("which type of rice would you like? Available options: Fried Rice,Coconut Rice, Grilled Rice");
    //     let Rice_type=["Fried Rice", "Coconut Rice", "Grilled Rice"]

    //     if(Rice_type.includes(type)){
    //         message.innerText=`${type} is available`
    //     }else{
    //         message.innerText=`${type} is not avalable`
    //     }     
    // }

    //   if(food.includes("Rice")){
    //     let type=prompt("which type of rice would you like? Available options: Fried Rice,Coconut Rice, Grilled Rice");
    //     let Rice_type=["Fried Rice", "Coconut Rice", "Grilled Rice"]

    //     if(Rice_type.includes(type)){
    //         message.innerText=`${type} is available`
    //     }else{
    //         message.innerText=`${type} is not avalable`
    //     }     
    // }


    if(food_item=="Rice"){
        let type=prompt("which type of rice would you like? Available options: Fried Rice,Coconut Rice, Grilled Rice");
        let Rice_type=["Fried Rice", "Coconut Rice", "Grilled Rice"]

        if(Rice_type.includes(type)){
            message.innerText=`${type} is available, your order will take 5 min to be ready !`
        }else{
            message.innerText=`${type} is not avalable, Please make another choice!`
        }

        
        
    }

    else if(food_item=="Beans"){
        let type=prompt("which type of Beans would you like? Available options: Chicken Beans,Red Beans, Black Beans");
        let Rice_type=["Chicken Beans","Red Beans","Black Beans"]

        if(Rice_type.includes(type)){
            message.innerText=`${type} is available, your order will take 5 min to be ready !`
        }else{
            message.innerText=`${type} is not avalable, Please make another choice!`
        }

        
    }

    else{
        // console.log("else")
        message.innerText=`${food_item} is not avalable, Please make another choice!`
    }
}

//function to clear input field
function btn2(){
   input.value="";
   message.innerHTML="";
   
}
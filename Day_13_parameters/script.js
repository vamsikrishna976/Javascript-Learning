
                   //Parameter

function Product(num1,num2, ...add) {
    var result = num1*num2;
    for(more of add){
        result = result*more;
    }
    console.log(result);
    
}Product(1,2,3,4,4,5,6,7,8,9);
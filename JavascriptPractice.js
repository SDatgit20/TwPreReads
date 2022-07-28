var nums=[10,20,23,14];
 
function callbackForForEachandMap(num){
    return num*2;
}
 
//foreach() method is used to perform operations/function on each array element
 
function forEachImplementation(nums,callbackForForEachandMap){
    for(let i=0;i<nums.length;i++){
        nums[i]=callbackForForEachandMap(nums[i]);
    }
    console.log(nums);
}

// map method calls a function once for each element and doesn't change the original array. It returns an array
 
function mapImplementation(nums,callbackForForEachandMap){
    const twiceNums=[];
    for(let i=0;i<nums.length;i++){
        twiceNums[i]=callbackForForEachandMap(nums[i]); //sets the twice of number
    }
    console.log(twiceNums);
}


//filter() method creates a new array filled with elements that pass a test provided by a function

function callbackForFilter(num){
    if(num>15)
    return true;
    else
    return false;
}

 
function filterImplementation(nums,callbackForFilter){
    const greaterThan15=[];
    var j=0;
    for(let i=0;i<nums.length;i++){
       if(callbackForFilter(nums[i]))
       greaterThan15.push(nums[i]);          
    }
    console.log(greaterThan15);
}


//reduce() method executes a reducer function on each member of the array resulting in a single output value.

function callbackForReduce(newValue,currentValue){
    return newValue+currentValue;
}

 
function reduceImplementation(nums,callbackForReduce){
    var result=0;
    for(let i=0;i<4;i++){
        result=callbackForReduce(nums[i],result);
    }
    console.log(result);
}


reduceImplementation(nums,callbackForReduce);
filterImplementation(nums,callbackForFilter);
mapImplementation(nums,callbackForForEachandMap);
forEachImplementation(nums,callbackForForEachandMap);

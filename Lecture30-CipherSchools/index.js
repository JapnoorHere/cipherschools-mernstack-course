const addNumbers= (...args) =>{
    let s=0;
    args.forEach((arg)=>(s+=arg));
    return s;
};

console.log(addNumbers(1,51,42,2,-1,50));

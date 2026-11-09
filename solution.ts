const multiplyValue = (value: number, multiplier?: number): number => {
    if(multiplier){
        return value * multiplier;
        
    } else if(multiplier === 0 ) {
        return value * multiplier;
    } else{
        
        return value * 2;
    }
}


const processInput = (x : string | number | boolean): string | number | boolean => {
    if(typeof x === "string"){
        return x.trim().toLowerCase();
    } else if(typeof x === "number"){
        return x * 10;
    } else{
        if(x === true){
            return "Active";
        } else {
            return "Inactive";
        }
    }
}
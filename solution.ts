const multiplyValue = (value: number, multiplier?: number): number => {
    if(multiplier){
        return value * multiplier;
        
    } else if(multiplier === 0 ) {
        return value * multiplier;
    } else{
        
        return value * 2;
    }
}

const regValidNumber = /^[0-9]+[.]?[0-9]*$/;

export const validAmount = (amount:string):boolean=>{
    if(amount ==="" || !regValidNumber.test(amount)){
        return false;
    } else {
        return true;
    }
}
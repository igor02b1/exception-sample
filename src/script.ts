class SystemError {
    public message: string;
    public types: string;

    constructor(message: string, types: string){
        this.message = message;
        this.types = types;
    }
}
try{
console.log('Antes do erro!');
throw new SystemError ('Error 404', 'Abstrato');
console.log('depois do erro');
} catch (error){
    if(error instanceof SystemError){
        console.log(`${error.types}:${error.message}`);
    } else {
        console.log(`ERROR: ${error.message}`);
    }
}
console.log('Acabou!')
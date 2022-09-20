var SystemError = /** @class */ (function () {
    function SystemError(message, types) {
        this.message = message;
        this.types = types;
    }
    return SystemError;
}());
try {
    console.log('Antes do erro!');
    throw new SystemError('Error 404', 'Abstrato');
    console.log('depois do erro');
}
catch (error) {
    console.log('Deu ruim');
}
console.log('Acabou!');

String.prototype.isUpperCase = function() {
   if(this.toUpperCase() === this.toString()) {
        return true;
    } else {
        return false;
    }
}

console.log('Szymon'.isUpperCase());

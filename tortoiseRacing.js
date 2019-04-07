function race(v1, v2, g) {
    if(v1 >= v2) return null;
    let speedv1 = v1 / 3600;
    let speedv2 = v2 / 3600;
    
    var secounds = g /(v2 - v1) ;

    var date = new Date(null);
    date.setSeconds(secounds * 3600);

    var timeArray =[];
    timeArray.push(date.getHours(),date.getMinutes(), date.getSeconds());
    return timeArray ;
}

console.log(race(720, 850, 70));

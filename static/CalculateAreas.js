

function calculateAreas(dataset){
    //ares will have 2 points to define the end points of the system,  number of tickets there, the time of day it is for, day of the week
    //the first [] is for day, second [] is for hour third [] is for each different area that will be made.
    var area = [[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]];
    //var areas[7][24][];
    const walkingSpeed = 5;

    dataset.forEach(element => {
        var day = element.getDay;
        var time = element.getTime;
        var lon1;
        var lat2;


        if(array[day][time].length == 0){
            lon1 = element.getLon;
            lat1 = element.getLat;
            array[day][time][0] = [lon1 , lat1, lon1 , lat1, 1, time ];
        }else{
            for(var i = 1; i < areas[day][time].length; i++){
                lon2 = newLatLon(element.getLon,element.getLat);
                lat2= newLatLon(element.getLon,element.getLat);
                var dist = p1.distanceTo(p2);
                if(dist/time == walkingSpeed){
                    tickets = array[day][time][i][3];
                    if(element.getLon - array[day][time][0] > array[day][time][2] - array[day][time][0] && element.getLat  - array[day][time][1] > array[day][time][3] - array[day][time][1]){
                        array[day][time][i][2] = lon2;
                        array[day][time][i][3] = lat2;
                    }  

                }
            }   
        }
    });
    return array;
}
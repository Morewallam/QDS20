

function calculateAreas(dataset){
    //ares will have 2 points to define the end points of the system,  number of tickets there, the time of day it is for, day of the week
    //the first [] is for day, second [] is for hour third [] is for each different area that will be made.
    var area = [[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]];
    //var areas[7][24][];
    const walkingSpeed = 5;
    //dataset = []
    dataset.forEach(element => {
        var day = element["DayOfWeek"];
        var time = element["time_of_infraction"]/100-1;
        var minutes = element["time_of_infraction"]%100;
        var lon1;
        var lat2;


        if(array[day][time].length == 0){
            lat1 = element.Latitude;
            lon1 = element.Longitude;
            array[day][time][0] = [lat1, lon1, lat1 , lon1, 1, minutes];
        }else{
            for(var i = 0; i < areas[day][time].length; i++){
                p1 = newLatLon(element.Latitude,element.Longitude);
                p2= newLatLon(array[day][time][i][0],array[day][time][i][1]);
                var dist = p1.distanceTo(p2);
                if(dist/(minutes - array[day][time][i][5]) <= walkingSpeed){
                    array[day][time][i][3]++;
                    if(element.Latitude - array[day][time][0] > array[day][time][2] - array[day][time][0] && element.Longitude  - array[day][time][1] > array[day][time][3] - array[day][time][1]){
                        array[day][time][i][2] = lon2;
                        array[day][time][i][3] = lat2;
                    }  

                }
            }   
        }
    });
    return array;
}
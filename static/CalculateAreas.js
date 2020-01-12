

function calculateAreas(dataset){
    //ares will have 2 points to define the end points of the system,  number of tickets there, the time of day it is for, day of the week
    //the first [] is for day, second [] is for hour third [] is for each different area that will be made.
    //var areas[7][24][];



    var areas = [[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]]]
    const walkingSpeed = 5;
    //dataset = []
    dataset.forEach(element => {
        var day = element["Day of Week"];
        switch (day){
            case "Monday":
                day = 0;
                break;
            case "Tuesday":
                day = 1;
                break;
            case "Wednesday":
                day = 2;
                break;
            case "Thursday":
                day = 3;
                break;
            case "Friday":
                day = 4;
                break;
            case "Saturday":
                day = 5;
                break;
            case "Sunday":
                day =6;
                break;

        }
        var time = element["time_of_infraction"]/100-1;
        var minutes = element["time_of_infraction"]%100;
        var lon1;
        var lat2;


        if(typeof areas[day][time] == 'undefined' ){ //try to make area if there is none for that time and day
            lat1 = element.Latitude;
            lon1 = element.Longitude;
            areas[day][time][0] = [lat1, lon1, lat1 , lon1, 1, minutes];
        }else if(areas[day][time].length == 0){ //try to make area if there is none for that time and day
            lat1 = element.Latitude;
            lon1 = element.Longitude;
            areas[day][time][0] = [lat1, lon1, lat1 , lon1, 1, minutes];
        }
        else{
            for(var i = 0; i < areas[day][time].length; i++){
                p1 = newLatLon(element.Latitude,element.Longitude);
                p2= newLatLon(areas[day][time][i][0],areas[day][time][i][1]);
                var dist = p1.distanceTo(p2);
                if(dist/(minutes - areas[day][time][i][5]) <= walkingSpeed){
                    areas[day][time][i][3]++;
                    if(element.Latitude - areas[day][time][0] > areas[day][time][2] - areas[day][time][0] && element.Longitude  - areas[day][time][1] > areas[day][time][3] - areas[day][time][1]){
                        areas[day][time][i][2] = lon2;
                        areas[day][time][i][3] = lat2;
                    }  

                }
            }   
        }
    });
    return areas;
}
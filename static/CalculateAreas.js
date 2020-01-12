

function calculateAreas(dataset){
    var areas = [];

    for ( var i = 0; i < 7; i++ ) {
        areas[i] = [];
        for ( var j =0; j < 24; j++){
            areas[i][j] = [];
            for( var k =0; k < 1; k++){
                areas[i][j][k] = 0;
            }
        }
    }
    
    const walkingSpeed = 5;
    var count = 0;
    var lasttime = -1;
    var amountSame = 0;
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
        var time = Math.round(element["time_of_infraction"]/100);
        var minutes = element["time_of_infraction"]%100;
        var lon1;
        var lat2;

        if(time != lasttime){
            count = 0;
            amountSame = 0;
        }
        lasttime = time;

        count++;
        
        if(count == 1){
            lat1 = element.Latitude;
            lon1 = element.Longitude;
            areas[day][time][count -1] = [lat1, lon1, lat1 , lon1, 1, minutes];
            
        }
        else{
            for(var i = 0; i < count-1 - amountSame; i++){
               
                lat = element.Latitude;
                lon = element.Longitude;
                p1 = new LatLon(element.Latitude,element.Longitude);
               
                p2 = new LatLon(areas[day][time][i][0],areas[day][time][i][1]);
                var dist = p1.distanceTo(p2);
                if(dist/(minutes - areas[day][time][i][5])*60 <= walkingSpeed){
                    areas[day][time][i][4]++;
                    amountSame++;
                   
                    if(lat - areas[day][time][i][0] > areas[day][time][i][2] - areas[day][time][i][0] ){
                        areas[day][time][i][2] = lat;
    
                    }else if(lat - areas[day][time][i][0] < areas[day][time][i][2] - areas[day][time][i][0] ){
                        areas[day][time][i][0] = lat;
                    }
                    if(lon  - areas[day][time][i][1] > areas[day][time][i][3] - areas[day][time][i][1]){
                        areas[day][time][i][3] = lon;
                    }
                    else if(lon  - areas[day][time][i][1] < areas[day][time][i][3] - areas[day][time][i][1]){
                        areas[day][time][i][1] = lon;
                    }
                }
                else{
                    areas[day][time][count -1- amountSame] = [lat, lon, lat , lon, 1, minutes];
                    
                }
             }  

        }
    }
    );
    return areas;
}
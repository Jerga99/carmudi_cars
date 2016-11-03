var o = {
    "cars": {
        "car1": {
            "id": "1",
            "name": "Hyundai Getz Sedan 2009",
            "location": "Location, very long location",
            "price": "880000000",
            "description": "Black XJ6 Series 1 (1971) No rust, I bought the car for improvement/renovation and have more important models near completion and want to focus on(E type s 3/S type 3.8 MOD) I bought the XJ with Cat ..."
        },
        "car2": {
            "id": "2",
            "name": "Hyundai Getz Sedan 2009",
            "location": "Location, very long location",
            "price": "880000000",
            "description": "Black XJ6 Series 1 (1971) No rust, I bought the car for improvement/renovation and have more important models near completion and want to focus on(E type s 3/S type 3.8 MOD) I bought the XJ with Cat ..."
        }
    }
}

        var arr = Object.keys(o).map(function (k) {

            Object.keys(o[k]).map(function(e){
                console.log((o[k])[e]);
                return (o[k])[e];
            });

        });

//console.log(arr)
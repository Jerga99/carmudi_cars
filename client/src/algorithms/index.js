
const filterByTextImpl = (cars, filterType, searchText) => {

    var filteredCars;

    filteredCars = cars.filter((car) => {
        /* eslint-disable no-debugger */
        var text = car[filterType].toLowerCase();
        return searchText.length === 0 || text.indexOf(searchText.toLowerCase()) > -1;
    });

    return filteredCars;
};



module.exports = {

    parseJson: function(jsonObj) {

        var arr = [];
        Object.keys(jsonObj).map(function (el) {
             arr.push(jsonObj[el]);
        });

        return arr;
    },

    filterByText:  (cars, filterType, searchText) => {

        return filterByTextImpl(cars,filterType, searchText);
    }
};

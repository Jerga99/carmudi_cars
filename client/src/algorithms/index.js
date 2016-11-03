
module.exports = {

    parseJson: function(jsonObj) {

        var arr = [];
        Object.keys(jsonObj).map(function (el) {
            /* eslint-disable no-alert, no-console */
             arr.push(jsonObj[el]);
        });

        return arr;
    }

};

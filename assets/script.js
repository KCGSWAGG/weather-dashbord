var weather = document.getElementById('forecast');

function getApi() {
    var requestUrl = "api.openweathermap.org/data/2.5/forecast?q=newyork&appid=15ce8a000d8c17fd6d6c80ca37333433"

    fetch(requestUrl)
    .then(function (reponse) {
        return reponse.json();
    })
    .then(function (data) {
        console.log(data)

        for (var i = 0; i < data.length; i++) {
            var createTableColumn = document.createElement('tc');
            
        }
    }
}
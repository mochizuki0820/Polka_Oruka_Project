if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        function (position) {
            var data = position.coords;
            var lat = data.latitude;
            var lon = data.longitude;
            let appKey = "50bc8d8918170e54292ab6a1f3713b11";
            const forecastRequestUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + appKey;

            let xhr = new XMLHttpRequest();

            //通信方式とURLを設定
            xhr.open("GET", forecastRequestUrl);

            //通信を実行する
            xhr.send();


            //通信ステータスが変わったら実行される関数
            xhr.onreadystatechange = function () {
                //通信が完了
                if (xhr.readyState == 4) {
                    let forecast = JSON.parse(xhr.responseText);
                    polkaOruka(forecast.list[2].main.pressure, forecast.list[4].main.pressure);
                }
            }
        }, function (error) {
            var errorInfo = [
                "原因不明のエラーが発生しました…。",
                "位置情報の取得が許可されませんでした…。",
                "電波状況などで位置情報が取得できませんでした…。",
                "位置情報の取得に時間がかかり過ぎてタイムアウトしました…。"
            ];

            var errorNo = error.code;
            var errorMessage = "[エラー番号: " + errorNo + "]\n" + errorInfo[errorNo];
            alert(errorMessage);
        }, {
        "enableHighAccuracy": false,
        "timeout": 8000,
        "maximumAge": 2000,
    }
    );
} else {
    var errorMessage = "お使いの端末は、GeoLacation APIに対応していません。";
    alert(errorMessage);
}

function polkaOruka(current, after) {
    let count = sessionStorage.getItem("count");
    if (Math.abs(after - current) > 3 && Math.random() < 0.1 && Number(count) >= 3) move(`bad`);
    else if (Math.abs(after - current) > 3) move(`loserclub`);
    else if (Math.abs(after - current) <= 3 && current >= 1013 && Math.random() < 0.1) move(`po`);
    else if (Math.abs(after - current) <= 3 && current >= 1013) move(`ptt`);
    else move(`circus`);
}

function move(page) {
    window.location.href = `${page}.html`;
}
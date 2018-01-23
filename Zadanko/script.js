function initTable() {
    req = new XMLHttpRequest();
    var url = "http://localhost:57406/api/Player";
    req.onreadystatechange = processReqChange;
    req.open("GET", url, true);
    req.send(null);


    var addP = document.getElementById("addPlayer");
    initAddButton();






}

function initRefreshButton() {
    $("#refresh").click(function () {
        $.get("http://localhost:57406/api/Player",null,
            function (data) {
                jsPlayer = JSON.parse(req.responseText);

            },
            "application/json"
        )
    });



}


function initAddButton() {
    addP.onclick = function () {
        console.log("clicked");
        var number = $("input#player_number").val();
        var name = $("input#player_firstname").val();
        var age = $("input#player_age").val();
        var exp = $("input#player_exp").val();
        var player = new Player(name, number, age, exp);
        console.log(player);
        var req3 = new XMLHttpRequest();
        var url3 = "http://localhost:57406/api/Player";
        req3.onreadystatechange = processReqChange3;
        req3.open("POST", url, true);
        req3.setRequestHeader("Content-type", "application/json");
        req3.send(JSON.stringify(player));
        function processReqChange3() {
            if (req3.readyState === 4) {
                console.log("passed" + req3);
                console.log("passed" + req3.responseText);
            }
        }
    };
}
function Player(first, Number, age, Experience) {
    this.firstName = first;
    this.Number = Number;
    this.age = age;
    this.Experience = Experience;
} 
function processReqChange() {
    console.log(req.readyState);

    if (req.readyState === 4) {
        console.log(req.responseText);

        var table = JSON.parse(req.responseText);

        for (var i = 0; i < table.length; i++) {
            var stringPlayerId = table[i];

            var req1 = new XMLHttpRequest();
            var url1 = "http://localhost:57406/api/Player/" + stringPlayerId;
            req.onreadystatechange = processReqChange1;
            req.open("GET", url1, true);
            req.send(null);


                var jsPlayer;

                function processReqChange1() {
                    if (req.readyState === 4) {
                        console.log(req.responseText);

                        jsPlayer = JSON.parse(req.responseText);

                    }
                }

                var template = $("div#playerInfo");

              //  var template = document.getElementById("playerinfo");
                var list = $("ul#ulPlayerList");
                var clone = template.clone(true);
                clone.attr("name", clone.attr("name"));
                clone.attr("id", clone.attr("id") + stringPlayerId);

                clone.removeClass("invisible");
                list.append(clone);
                $(clone).find("#pi_number").text(jsPlayer.Number);
                $(clone).find("#pi_age").text(jsPlayer.Age);
                $(clone).find("#pi_experience").text(jsPlayer.Experience);
                $(clone).find("#pi_firstname").text(jsPlayer.FirstName);
            

                



        }
    }
}

window.onload = initTable;




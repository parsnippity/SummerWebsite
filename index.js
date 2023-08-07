let $colors = {
    default: "#161A37",
    wdw: "#B58B00",
    sick: "#4A8AD4",
    escapeRoom: "#A34521",
    scarletNexus: "#7322C9",
    undertale: "#A61E25",
    endRoll: "#217022"
};
let $selected = "default";
if(localStorage.getItem("selected")) {
    $selected = localStorage.getItem("selected");
}

$(function () {
    $("body").css("background-color", $colors[$selected]);
    $("#wdw").on("click", function(e){
        $("body").css("background-color", $colors[this.id]);
    });
    $("#sick").on("click", function(e){
        $("body").css("background-color", $colors[this.id]);
    });
    $("#escapeRoom").on("click", function(e){
        $("body").css("background-color", $colors[this.id]);
    });
    $("#scarletNexus").on("click", function(e){
        $("body").css("background-color", $colors[this.id]);
    });
    $("#undertale").on("click", function(e){
        $("body").css("background-color", $colors[this.id]);
    });
    $("#endRoll").on("click", function(e){
        $("body").css("background-color", $colors[this.id]);
    });
    $(".holder>a").on("click", function(e){
        $selected = this.getAttribute("name");
        localStorage.setItem("selected", $selected);
    });
    $("header a").on("click", function(e){
        localStorage.setItem("selected", "default");
    });
});
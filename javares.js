advice_url = "http://sf-pyw.mosyag.in/m04/api/forecasts"

$("#main-header").click(function(){
    $.getJSON(advice_url,function(data) {
        console.log(data)
        paragraphs = data["prophecies"]
        /*date =  data["date"]*/
    });
 
    set_content_in_divs(paragraphs);
    set_header();
});

function set_secret_message(msg) {
    p = $("#second-paragraph");
    p.html(msg)
    p.css("color","red")
}

function set_content_in_divs(paragraphs) {
    $.each(paragraphs, function(i, d) {
      p = $("#p-" + i)
      p.html("<p>" + d + "</p>")
    })
  }
  
function set_header() {
    d = new Date();   
    p = $("#main-header")
    p.html("Что день " + d.getFullYear()+"-"+d.getMonth()+"-"+d.getDate()+" готовит")
    /*p.html("Что день " +"dsdasd" + " готовит")*/
  }
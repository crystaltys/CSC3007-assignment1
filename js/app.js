fetch("https://api.data.gov.sg/v1/environment/psi")
.then((resp) => resp.json())
.then(function(data) {
    var metrics = Object.keys(data.items[0].readings);  
    var lenOfData = metrics.length;
    for (var i=0; i<lenOfData; i++){
        var national = Object.values(data.items[0].readings)[i].national
        var central =  Object.values(data.items[0].readings)[i].central
        var west =  Object.values(data.items[0].readings)[i].west
        var east =  Object.values(data.items[0].readings)[i].east
        var north =  Object.values(data.items[0].readings)[i].north
        var south =  Object.values(data.items[0].readings)[i].south
        $("#psiTable tr:last").after("<tr><td id='metrics'>"+metrics[i]+"</td><td>"+national+"</td><td>"+central+"</td><td>"+west+"</td><td>"+east+"</td><td>"+north+"</td><td>"+south+"</td></tr>");

    } 
    var date = moment(new Date()).format(" DD MMM YYYY, hh:mm")
    const pNode = document.getElementById("placeholder");
    pNode.innerText += date;
    
})
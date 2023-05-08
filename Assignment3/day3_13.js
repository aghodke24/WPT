$(document).ready(() => {
    var str="<table border='1'><tr><td>Id</td><td>Name</td><td>Designation</td></tr>";       
    $("#submit").click(() => {
    var arr=[];    
    var id=validId();
    var name=validName();
    var des=validDes();
    if(id && name && des){
        arr.push({"id":id,"name":name,"des":des});
        
        arr.forEach(ob => {
            str+=`<tr><td>${ob.id}</td><td>${ob.name}</td><td>${ob.des}</td></tr>`;
        })
        // for(ob of arr){
        //     str+=`<tr><td>${ob.id}</td><td>${ob.name}</td><td>${ob.des}</td></tr>`;
        // }
        str+="</table>";
        $("body").append(`<div>${str}</div>`);
    }
    
    })
    const validId = () => {
        var id=$("#id").val()
        if(!isNaN(id)){
            
            $("#errId").html("");
            return id;
        }
        else{
            $("#errId").html("Please Enter valid id");
            return false;
        }
            
    }
    const validName = () => {
        var name=$("#name").val()
        if( name!== ""){
            $("#errName").html("");
            return name;
        }
        else{
            $("#errName").html("Please Enter valid name");
            return false;
        }
    }
    const validDes = () => {
        var des=$("#des").val()
        if( des!== ""){
            $("#errDes").html("");
            return des;
        }
        else{
            $("#errDes").html("Please Enter valid Designation");
            return false;
        }
    }
    })
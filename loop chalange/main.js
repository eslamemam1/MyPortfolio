let myAdmins = ["ahmed" , "osama" , "sayed" , "stop" , "samera"];
let myEmployees = ["amgad" , "sameh" , "ameer" , "omar" , "othman" , "amany" ] ; 
document.write(`<div> we have x admins </div>`)
for(i = 0 ; i < myAdmins.length; i++){
if(myAdmins[i] === "stop"){
    break ;
}
}
document.write(`<div> we have ${i} admins </div>`);
document.write(`<hr>`);
 big:for(i = 0 ; i < myAdmins.length; i++){
    if(myAdmins[i] === "stop"){
        break ;
    }
    document.write(`<div> the admin for team ${i+1} is ${myAdmins[i]} <h3>Team members</h3> </div>` );
    smull:for( j=0; j<myEmployees.length; j++){
        if(myEmployees[j][0]===myAdmins[i][0]){
            console.log(myEmployees[j]);
           document.write(`<p>- ${myEmployees[j]}</p>`) ;
        }
    }
    document.write(`<hr>`) ;
}


        
    







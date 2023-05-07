const members = ["John", "Jane", "Bob","Ankit","Adwait","pranay"];
const membersString = members.map((member) => member.toUpperCase()).join(", ");
document.write("<b><u><em>The Members of my Group are</em></u></b><br>"+membersString);
console.log(membersString);
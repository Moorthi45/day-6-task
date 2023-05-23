class movies{
constructor(title,studio,rating){
this.title=title;
this.studio=studio;
this.rating=rating||"PG";
}
getPg(data=[]){
return data.filter((dat)=>dat.rating==="PG");
}
}

const newmovie=new movies();
var movieList=[
new movies('Casino Royale', 'Eon Productions', 'PG13'),
new movies('leo','lyca','PG'),
new movies('vikram','red giant','R')
];
console.log(newmovie.getPg(movieList))
let qtree;

function setup(){
//    let body = document.body,
//    html = document.documentElement;

//    let height1 = Math.max( body.scrollHeight, body.offsetHeight,
//       html.clientHeight, html.scrollHeight, html.offsetHeight );
//     let width1 = Math.max(
//       body.scrollWidth, body.offsetWidth,
//       html.clientWidth, html.scrollWidth, html.offsetWidth
//   );
   createCanvas(700, 700);

   let boundary = new Rectangle(700/2,700/2,700/2, 700/2);
   qtree = new QuadTree(boundary, 4);

   for(let i=0;i<200;i++){
      let p = new Point(random(height), random(width));
      qtree.insert(p);
   }
}


function draw(){
   background(0);
   qtree.show()
   // console.log(qtree);

   stroke(0,255,0);
   rectMode(CENTER);
   let range = new Rectangle(mouseX, mouseY,87.5, 87.5 );
   strokeWeight(2);
   rect(range.x, range.y,range.w*2 ,range.h*2);
   let points = [];
   qtree.query(range, points);
   // console.log(points);

   for(let p of points){
      strokeWeight(10);
      point(p.x,p.y);
   }
}
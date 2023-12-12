class Point{
   constructor(x,y){
      this.x = x;
      this.y = y;
   }
}

class Rectangle{
   constructor(x,y,w,h){
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
   }

   //the below function checks whether the given point lies within the given section .
   contains(point){
      return ((point.x >= this.x-this.w && point.x <= this.x+this.w ) && (point.y >= this.y-this.h && point.y <= this.y+this.h))
   }

   intersects(range){
      return !(range.x-range.w > this.x+this.w || range.x+range.w <this.x-this.w || range.y-range.h > this.y+this.h || range.y+range.h < this.y-this.h);
   }
}

class QuadTree{
   constructor(boundary, n){
      this.boundary = boundary;
      this.capacity = n; // this is the capacity of rectangle for storing a point .
      this.points = [];
      this.divided = false;
   }

   subdivide(){

      let x = this.boundary.x;
      let y =  this.boundary.y;
      let w = this.boundary.w;
      let h = this.boundary.h;

      let ne = new Rectangle(x+w/2, y-h/2, w/2, h/2);
      let nw = new Rectangle(x-w/2, y-h/2, w/2, h/2);
      let se = new Rectangle(x+w/2, y+h/2, w/2, h/2);
      let sw = new Rectangle(x-w/2, y+h/2, w/2, h/2);

      this.northeast = new QuadTree(ne, this.capacity);
      this.northwest = new QuadTree(nw, this.capacity);
      this.southeast = new QuadTree(se, this.capacity);
      this.southwest = new QuadTree(sw,this.capacity);
      this.divided = true;
   }

   insert(point){
      if(!this.boundary.contains(point)){
         return false;
      }

      if(this.points.length < this.capacity){
         this.points.push(point);
         return true;
      }else{
         if(!this.divided) this.subdivide();

         if(this.northeast.insert(point)) return true;
        else if(this.northwest.insert(point)) return true;
         else if(this.southeast.insert(point)) return true;
         else if(this.southwest.insert(point)) return true;
      }
   }

   query(range, found){
      if(!this.boundary.intersects(range)){
         return;
      }else{
         for(let p of this.points){
            if(range.contains(p)){
               found.push(p);
            }
         }

         if(this.divided){
             this.northwest.query(range, found);
             this.northeast.query(range, found);
             this.southwest.query(range, found);
             this.southeast.query(range, found);
         }
      }
   }

   show(){
      stroke(255);
      strokeWeight(1);
      noFill();
      rectMode(CENTER);
      rect(this.boundary.x , this.boundary.y, this.boundary.w*2 , this.boundary.h*2)
      if(this.divided){
         this.northeast.show();
         this.northwest.show();
         this.southeast.show();
         this.southwest.show();
      }
      for(let p of this.points){
         strokeWeight(4);
         point(p.x,p.y);
      }

   }
}
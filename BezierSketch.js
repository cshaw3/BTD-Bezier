

const SideCols = ( sketch ) => {
        let scroll_offset = 0;
        let Time = 0;
        let RandNumsInitialzed = false;
        let RandomXPos = [];
        let RandomYPos = [];
        let RandomPeriod = [];
        let RandomLineThickness = [];
        let RandomSpeed = [];
        let RandomItters = 10;
        
        class BezierCurve {
            

            constructor(){}

            createCurve(){}

            animateCurve(){}
            
        }


        

        sketch.setup = () => {
            var width = document.getElementById('LeftCol').offsetWidth+1;
            var height = document.getElementById('CenterCol').offsetHeight
            sketch.createCanvas(width, height, sketch.P2D);
           
        }
      
        sketch.draw = () => {
            sketch.InitRandomNums();
            // Time = sketch.millis();
            sketch.background(255);
            //     bezier(x1, y1, x2, y2, x3, y3, x4, y4)
            // sketch.bezier(20, 40, 20, 60, 40, 60, 40, 40);
            // sketch.bezier(x1, y1, x1, y1+sketch.sin(offset), y1, y1+sketch.sin(offset), y1, y1)
            sketch.curve_test(0,40,40)
            // for (let i = 0; i < RandomItters; i++) {
            //     sketch.curves(RandomXPos[i],RandomYPos[i],RandomPeriod[i],RandomLineThickness[i],RandomSpeed[i]);
            // }
            Time += 5;
        }


        sketch.curve_test = (x1,y1,o) =>{
            let s = 5/2000;
            sketch.strokeWeight(2)
            var xOffset = (y1-x1)
            for (let i = 0; i <= 5; i++){
                for (let j = 0; j <= 38; j++){
                    if (j%2 == 0)
                        sketch.strokeWeight(4)
                    else
                        sketch.strokeWeight(1)
                    sketch.bezier(x1+xOffset*i, y1+60*j, (x1+xOffset*i) , (y1+o*sketch.sin(Time*s)+60*j), (y1+xOffset*i), (y1+o*sketch.sin(Time*s)+60*j), y1+xOffset*i, y1+60*j)
                }
                s = s*-1;
            }
         }

        // x1 = First X coord, y2 = height of wiggle, p = width of wiggle t = thickness, s = speed
        sketch.curves = (x1,y2,p,t,s) =>{
            let y1 = -1100
            let yOffset = (y2-y1)
            
            s = s/500;
            sketch.noFill();
            sketch.strokeWeight(t);
            for (let i = 0; i <= 30; i++) {
                // sketch.bezier(x1, y1+yOffset*i, x1 + p*sketch.sin(Time*s), y1+yOffset*i, x1-p*sketch.sin(Time*s), y2+yOffset*i, x1, y2+yOffset*i+1);
                // sketch.bezier(x1, y1+yOffset*i, x1 + p*sketch.sin(scroll_offset*s), y1+yOffset*i, x1-p*sketch.sin(scroll_offset*s), y2+yOffset*i, x1, y2+yOffset*i+1);
                sketch.bezier(x1, y1+yOffset*i, x1 + p*sketch.sin(scroll_offset*s), y1+yOffset*i, x1-p*sketch.sin(scroll_offset*s), y2+yOffset*i, x1, y2+yOffset*i+1);
                
            }
        }

        //Resizes canvas when window resizes
        sketch.windowResized = function(){
            var width = document.getElementById('LeftCol').offsetWidth+1;
            var height = document.getElementById('CenterCol').offsetHeight
            sketch.resizeCanvas(width,height);
        }

        
        sketch.mouseWheel = (event) => {
            scroll_offset += event.delta;
            // console.log(scroll_offset)
        }


        sketch.InitRandomNums = () => {
            if (RandNumsInitialzed == false){
                for (let i = 0; i < RandomItters; i++) {
                    RandomXPos.push(sketch.random(-120,120));
                    RandomYPos.push(sketch.random(-1000,-800));
                    RandomPeriod.push(sketch.random(-40,40));
                    RandomLineThickness.push(sketch.random(1,7));
                    RandomSpeed.push(sketch.random(1,5));


                    
                }
            }
            RandNumsInitialzed = true;
        }

      };
      let myp5leftCol = new p5(SideCols, "LeftCol");
      let myp5rightCol = new p5(SideCols, "RightCol");
    //   COLS END
    //   COLS END



    // BEZIER DEMO 1 BEGIN
    // BEZIER DEMO 1 BEGIN
    const BezierDemo1 = ( sketch ) => {
        let mouseInBounds = false;
        const points = [];
        let dragPoint = null;
        const dragRadius = 10;
        const points2 = [];
        let dragPoint2 = null;
        const dragRadius2 = 7;

        sketch.preload = () => {
          GridBG = sketch.loadImage("Images/GridBG.png");
      }

        sketch.setup = () => {
            var width = document.getElementById('BezierDemo1').offsetWidth+1;
            var height = document.getElementById('BezierDemo1').offsetHeight
            
            
            // for(let i = 0; i < numPoints; i ++) {
            //     // Points
            //     points.push(sketch.createVector(sketch.random(sketch.width), sketch.random(sketch.height)));
            //     // Text
            //     // points.push(new TextDragObject(random(width), random(height), "Text " + str(i)));
            //   }
            points.push(sketch.createVector(150,250));
            points.push(sketch.createVector(350,250));

            points2.push(sketch.createVector(100,250));
            points2.push(sketch.createVector(400,250));


            button = sketch.createButton('Reset Curve');

            button.mousePressed(sketch.ResetCurve);

            button.style('font-size: 20;')
            button.style('color: black;')
            button.style('background-color: transparent;')
            button.style('border-radius: 3px;')
            button.style('border: none;')
            button.style('margin-bottom: 12;')
            button.style('width:100%;')
            button.style('height:5%;')
            button.style('text-align:center;')

            sketch.createCanvas(width, height, sketch.P2D);
            

        }
        
        sketch.draw = () => {
          // print()
          // sketch.drawingContext.shadowBlur = 12;
          // sketch.drawingContext.shadowColor = sketch.color(50, 50, 255);
            // sketch.background(230);
            sketch.image(GridBG, 0, 0,sketch.width,sketch.height);
            sketch.stroke( 0,180,255 )
            
            sketch.line(points2[0].x, points2[0].y, points[0].x, points[0].y);
            sketch.line(points2[1].x, points2[1].y, points[1].x, points[1].y);
   
            sketch.inCanvasBounds();
            sketch.push();
            sketch.strokeWeight(4);
            sketch.noFill();
            sketch.bezier(points[0].x, points[0].y, points2[0].x, points2[0].y, points2[1].x, points2[1].y, points[1].x, points[1].y);
            sketch.pop();
            sketch.push();
            for(let p of points){
                sketch.circle(p.x,p.y,dragRadius*2);
            }

            for(let p2 of points2){
              sketch.circle(p2.x,p2.y,dragRadius2*2);
          }
                  
          sketch.drawingContext.shadowBlur = 12;
          sketch.drawingContext.shadowColor = sketch.color(0,180,255);
          
            // console.log(sketch.mouseX);
        }  
        sketch.ResetCurve = () => {
          points[0].x = 150;
          points[0].y = 250;
          points[1].x = 350;
          points[1].y = 250;

          points2[0].x = 100;
          points2[0].y = 250;
          points2[1].x = 400;
          points2[1].y = 250;
        }

        sketch.mousePressed = () => {
            for(let i = points.length - 1; i >= 0; i --) {
              // Points
              
              const isPressed = sketch.mouseInCircle(points[i], dragRadius);
              // Text
              // const isPressed = points[i].mouseInside();
                
              if(isPressed) {

                // dragPoint = points.splice(i, 1)[0];
                dragPoint = points[i];
                // bring the drag point to the front
                points.push(dragPoint);
          
                break;
              }    
            }

            for(let j = points2.length - 1; j >= 0; j --) {
              const isPressed = sketch.mouseInCircle(points2[j], dragRadius2);
              if(isPressed) {
                // dragPoint2 = points2.splice(j, 1)[0];
                dragPoint2 = points2[j];
                // bring the drag point to the front
                points2.push(dragPoint2);
                break;
              }    
            }

          }
          sketch.mouseDragged = () => {

            if (dragPoint && mouseInBounds == true){
              dragPoint.x = sketch.mouseX;
              dragPoint.y = sketch.mouseY;
            }

            if (dragPoint2 && mouseInBounds == true){
              dragPoint2.x = sketch.mouseX;
              dragPoint2.y = sketch.mouseY;
            }
          }
          sketch.mouseReleased = () => {
            if (dragPoint != null)
              dragPoint = null;
            else
              dragPoint2 = null;
          }
          

          sketch.mouseInCircle = (pos, radius) => {
              return sketch.dist(sketch.mouseX, sketch.mouseY, pos.x, pos.y) < radius+5
          }


          sketch.inCanvasBounds = () =>{
            if(sketch.mouseX > 10 && sketch.mouseY > 10 && sketch.mouseX <sketch.width-10 && sketch.mouseY < sketch.height-10){
                mouseInBounds = true;
                console.log(sketch.mouseX/sketch.width);
            }
            else{
                mouseInBounds = false;
            }
          }
        sketch.windowResized = function(){
            var width = document.getElementById('BezierDemo1').offsetWidth+1;
            var height = document.getElementById('BezierDemo1').offsetHeight
            sketch.resizeCanvas(width,height);
        }  
    }
    let myp5BezierDemo1 = new p5(BezierDemo1, "BezierDemo1");
    //BEZIER DEMO 1 END
    //BEZIER DEMO 1 END


      //
      // BEZIER DEMO 2 BEGIN
      const BezierDemo2 = ( sketch ) => {
        let currGif;
        let mouseInBounds = false;

        sketch.preload = () => {
            BouncyGif = sketch.loadImage("Images/Bouncy.gif");
            ElasticGif = sketch.loadImage("Images/Elastic.gif");
            SmoothGif = sketch.loadImage("Images/Smooth.gif");
        }


        sketch.setup = () => {
            var width = document.getElementById('BezierDemo2').offsetWidth+1;
            var height = document.getElementById('BezierDemo2').offsetHeight
            // sketch.createCanvas(width, height, sketch.P2D);


            currGif = SmoothGif;


            GifSelect = sketch.createSelect();
            GifSelect.option("Smooth");
            GifSelect.option("Bouncy");
            GifSelect.option("Elastic");
            GifSelect.changed(sketch.GifSelectChanged);

            GifSelect.style('font-size: 20;')
            GifSelect.style('color: black;')
            GifSelect.style('background-color: transparent;')
            GifSelect.style('border-radius: 3px;')
            GifSelect.style('border: none;')
            GifSelect.style('margin-bottom: 10;')
            GifSelect.style('margin-top: 2;')
            GifSelect.style('width:100%;')
            GifSelect.style('height:5%;')
            GifSelect.style('text-align:center;')

            sketch.createCanvas(width, height, sketch.P2D);

        }
      
        sketch.draw = () => {
            sketch.background(255,255,255);
            sketch.image(currGif, 0, 0,sketch.width,sketch.height);
            // console.log(mouseInBounds);
            sketch.inCanvasBounds();
        }

        sketch.GifSelectChanged = function(){
            switch (GifSelect.value()) {
              case "Smooth":
                currGif = SmoothGif;
                break;
              case "Bouncy":
                currGif = BouncyGif;
                break;
              case "Elastic":
                currGif = ElasticGif;
                break;
            }
          }
          sketch.inCanvasBounds = () =>{
            if(sketch.mouseX > 0 && sketch.mouseY > 0 && sketch.mouseX <sketch.width && sketch.mouseY < sketch.height){
                mouseInBounds = true;
                console.log(sketch.mouseX/sketch.width);
            }
            else{
                mouseInBounds = false;
            }
          }
      
        sketch.windowResized = function(){
          var width = document.getElementById('BezierDemo2').offsetWidth+1;
          var height = document.getElementById('BezierDemo2').offsetHeight
          sketch.resizeCanvas(width,height);
      };
    
    }
    let myp5BezierDemo2 = new p5(BezierDemo2, "BezierDemo2");
    //BEZIER DEMO 2 END
    //BEZIER DEMO 2 END

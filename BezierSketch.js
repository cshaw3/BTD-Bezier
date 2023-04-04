

const SideCols = ( sketch ) => {
        let scroll_offset = 0;
        let Time = sketch.millis();
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
            sketch.createCanvas(width, height, sketch.WEBGL);
           
        }
      
        sketch.draw = () => {
            sketch.InitRandomNums();
            Time = sketch.millis();
            sketch.background(255);
            for (let i = 0; i < RandomItters; i++) {
                // console.log(RandomXPos[1])
                sketch.curves(RandomXPos[i],RandomYPos[i],RandomPeriod[i],RandomLineThickness[i],RandomSpeed[i]);
            }
        }

        // x1 = First X coord, y2 = height of wiggle, p = width of wiggle t = thickness, s = speed
        sketch.curves = (x1,y2,p,t,s) =>{
            let y1 = -1100
            let yOffset = (y2-y1)
            
            s = s/1000;
            sketch.noFill();
            sketch.strokeWeight(t);
            for (let i = 0; i <= 30; i++) {
                sketch.bezier(x1, y1+yOffset*i, x1 + p*sketch.sin(Time*s), y1+yOffset*i, x1-p*sketch.sin(Time*s), y2+yOffset*i, x1, y2+yOffset*i+1);
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
      
      //
      // BEZIER DEMO 1 BEGIN
      const BezierDemo1 = ( sketch ) => {
        sketch.setup = () => {
            var width = document.getElementById('BezierDemo1').offsetWidth+1;
            var height = document.getElementById('BezierDemo1').offsetHeight
            sketch.createCanvas(width, height, sketch.P2D);
        }
      
        sketch.draw = () => {
            sketch.background(255,255,255);
        }
      
      
        sketch.windowResized = function(){
          var width = document.getElementById('BezierDemo1').offsetWidth+1;
          var height = document.getElementById('BezierDemo1').offsetHeight
          sketch.resizeCanvas(width,height);
      };
    //BEZIER DEMO 1 END
    }
    let myp5BezierDemo1 = new p5(BezierDemo1, "BezierDemo1");

    //
    // BEZIER DEMO 2 BEGIN
    const BezierDemo2 = ( sketch ) => {
        sketch.setup = () => {
            var width = document.getElementById('BezierDemo2').offsetWidth+1;
            var height = document.getElementById('BezierDemo2').offsetHeight
            sketch.createCanvas(width, height, sketch.P2D);
        }
        
        sketch.draw = () => {
            sketch.background(255,255,255);
        }  
        sketch.windowResized = function(){
            var width = document.getElementById('BezierDemo2').offsetWidth+1;
            var height = document.getElementById('BezierDemo2').offsetHeight
            sketch.resizeCanvas(width,height);
        }  
    //BEZIER DEMO 2 END
    }
    let myp5BezierDemo2 = new p5(BezierDemo1, "BezierDemo2");
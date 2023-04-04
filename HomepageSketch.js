        const SideCols = ( sketch ) => {
        let scroll_offset = 0;
        // let Time = sketch.millis();



        sketch.setup = () => {
            var width = document.getElementById('LeftCol').offsetWidth+1;
            var height = document.getElementById('CenterCol').offsetHeight
            console.log(width);
            console.log(height);
            // var myCanvas = sketch.createCanvas(1000, 1000, WEBGL);
            sketch.createCanvas(width, height, sketch.WEBGL);
        };
      
        sketch.draw = () => {
            sketch.background(255);            
        };





        //Resizes canvas when window resizes
        sketch.windowResized = function(){
            var width = document.getElementById('LeftCol').offsetWidth+1;
            var height = document.getElementById('CenterCol').offsetHeight
            sketch.resizeCanvas(width,height);
        };

        sketch.mouseWheel = (event) => {
            // console.log(currImage);
            scroll_offset += event.delta;
            currImage = currImage+2;
            if (currImage > 20){
                // console.log("if");
                currImage = 1;
                return;
            }
            
            
            
            // console.log(scroll_offset)
        };

      };
      let myp5leftCol = new p5(SideCols, "LeftCol");
      let myp5rightCol = new p5(SideCols, "RightCol");




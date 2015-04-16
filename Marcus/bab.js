if (BABYLON.Engine.isSupported()) {
 
            var canvas = document.getElementById("canvas");
            var engine = new BABYLON.Engine(canvas, true);

            var initBox = function(){

            }
            
            var createScene = function () {
    var scene = new BABYLON.Scene(engine);

    var camera = new BABYLON.ArcRotateCamera("Camera", Math.PI, Math.PI / 8, 150, BABYLON.Vector3.Zero(), scene);

    camera.attachControl(canvas, true);

    var light = new BABYLON.HemisphericLight("hemi", new BABYLON.Vector3(0, 1, 0), scene);

    //Creation of 3 boxes and 2 spheres
    var box1 = BABYLON.Mesh.CreateBox("Box1", 10.0, scene);
    var box2 = BABYLON.Mesh.CreateBox("Box2", 10.0, scene);
    var box3 = BABYLON.Mesh.CreateBox("Box3", 10.0, scene);
    /*var box4 = BABYLON.Mesh.CreateBox("Box4", 6.0, scene);
    var box5 = BABYLON.Mesh.CreateBox("Box5", 6.0, scene);
    var box6 = BABYLON.Mesh.CreateBox("Box6", 6.0, scene);
    var box7 = BABYLON.Mesh.CreateBox("Box7", 6.0, scene);*/

    //Moving boxes on the x axis
    box1.position.x = 0;
    box2.position.x = 0;
    box3.position.x = 0;
    /*box4.position.x = 15;
    box5.position.x = 30;
    box6.position.x = 45;*/

    //Rotate box around the x axis
    box1.scaling.x=10;
    box1.scaling.z=3;
    box1.scaling.y=0.1;
    box1.rotation.x = Math.PI / 1;


    /*var box2 = box1;
    box2.position.y=1;
    */

    //Rotate box around the y axis
    /*box2.rotation.y = Math.PI / 3;

    //Scaling on the x axis
    box4.scaling.x = 2;

    //Scaling on the y axis
    box5.scaling.y = 2;

    //Scaling on the z axis
    box6.scaling.z = 2;

    //Moving box7 relatively to box1
    box7.parent = box1;
    box7.position.z = -10;*/

    box2.parent = box1;
    box2.position.z = -3;
    box2.position.x = 0;
    box2.position.y = 200; 

    box3.parent = box1;
    box3.position.z = 3;
    box3.position.x = 0;
    box3.position.y = -200; 

    return scene;
}
            var scene = createScene();
          /*  var camera = new BABYLON.ArcRotateCamera("Camera", 0, Math.PI / 2, 13, BABYLON.Vector3.Zero (), scene);
            camera.attachControl(canvas, false);
  
            var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
   
            var knot = BABYLON.Mesh.CreateTorusKnot("mesh", 2, 0.5, 128, 64, 2, 50, scene);              
  
            var material = new BABYLON.StandardMaterial("mat", scene);
            knot.material = material;
            material.diffuseColor = new BABYLON.Color3(1.5, 0, 0);
            
            var renderLoop = function () {
            scene.render();
            };
            engine.runRenderLoop(renderLoop);
  
            var alpha = 0;
            knot.scaling.y = 1.5;
  
            scene.beforeRender = function() {
            knot.rotation.y = alpha;
              
            alpha += 0.03;*/

            var renderLoop = function () {
            scene.render();
            };
            engine.runRenderLoop(renderLoop);
  
            var alpha = 0;
            knot.scaling.y = 1.5;
  
            scene.beforeRender = function() {
            knot.rotation.y = alpha;
              
            alpha += 0.03;

            };
}
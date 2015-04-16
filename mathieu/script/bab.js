if (BABYLON.Engine.isSupported()) {
 
            var canvas = document.getElementById("canvas");
            var engine = new BABYLON.Engine(canvas, true);

            var createBox = function(name,s,scene,xScal,zScal,yPos){
                var box = BABYLON.Mesh.CreateBox(name, s, scene);
                box.position.x=0;
                box.position.y=yPos;
                box.scaling.x=xScal;
                box.scaling.y=0.1;
                box.scaling.z=zScal;
                var material = new BABYLON.StandardMaterial("mat", scene);
            box.material = material;
            material.diffuseColor = new BABYLON.Color3(1.5, 0, 0);
                return box;
            }
            var createHouse = function(numPlan,scene){
                for(i=0;i<numPlan;i++){
                    scene.meshes.push(createBox("Plan"+1,10,scene,10,3,i*10));
                }
            }

            
            var createScene = function () {
    var scene = new BABYLON.Scene(engine);

    var camera = new BABYLON.ArcRotateCamera("Camera", Math.PI, Math.PI / 8, 150, BABYLON.Vector3.Zero(), scene);

    camera.attachControl(canvas, true);

    var light = new BABYLON.HemisphericLight("hemi", new BABYLON.Vector3(0, 1, 0), scene);

    var ground = BABYLON.Mesh.CreateGround("ground", 1000, 1000, 1, scene);
    ground.material = new BABYLON.StandardMaterial("ground", scene);
    ground.material.diffuseColor = BABYLON.Color3.FromInts(193, 181, 151);
    ground.material.specularColor = BABYLON.Color3.Black();

    //Creation of 3 boxes and 2 

    createHouse(5,scene);
    

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
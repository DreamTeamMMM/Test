if (BABYLON.Engine.isSupported()) {
 
            var canvas = document.getElementById("canvas");
            var engine = new BABYLON.Engine(canvas, true);

            function room(name, campus, house, floor, number, xSize, zSize, available, features) {
                this.name = name;
                this.campus = campus;
                this.house = house;
                this.floor = floor;
                this.number = number;
                this.xSize = xSize;
                this.ySize = ySize;
                this.available = available;
                this.features = features;
            }

            var createRoom=function(name,scene,xScal,zScal,xPos,yPos,zPos){
                var room = BABYLON.Mesh.CreateBox(name,1,scene);
                room.scaling.x=xScal;
                room.scaling.z=zScal;
                room.scaling.y=0.1;
                room.position.x=xPos;
                room.position.y=yPos+0.5;
                room.position.z=zPos;
                room.material = new BABYLON.StandardMaterial("mas", scene);
                room.material.diffuseColor = new BABYLON.Color3(0.3, 0.2, 0.1);
                //room.actionManager = new BABYLON.ActionManager(scene);
                //action = new BABYLON.SetValueAction(BABYLON.ActionManager.OnPickTrigger,room, "mas", BABYLON.Color3(0,0,0.5), 1000);
                //room.actionManager.registerAction(action);
                return room;
            }

            var createFloor = function(name,s,scene,xScal,zScal,yPos){
                var box = BABYLON.Mesh.CreateBox(name, s, scene);
                box.position.x=0;
                box.position.y=yPos;
                box.scaling.x=xScal;
                box.scaling.y=0.1;
                box.scaling.z=zScal;
                var material = new BABYLON.StandardMaterial("mat", scene);
            material.diffuseColor = new BABYLON.Color3(0.2, 0.2, 0.2);
            //material.diffuseTexture =  new BABYLON.WoodProceduralTexture("texture", 1024, scene);
            //material.emessiveTexture.coordinatesMode = BABYLON.Texture.CUBIC_MODE;
            //material.diffuseTexture = texture;
            box.material = material;
            //box.checkCollisions = true;
                return box;

            }

            //var createFloor=function(name,scene,)

            var createHouse = function(numPlan,scene){
                for(i=0;i<numPlan;i++){
                    scene.meshes.push(createFloor("Plan"+i,1,scene,100,30,i*10));
                    for(x=-40;x<=40;x+=20){
                        for(z=-10;z<=10;z+=20){
                        scene.meshes.push(createRoom("Room"+x+""+z,scene,19,12,x,i*10,z));
                        }
                    }
                }
            }

            
            var createScene = function () {
    //scene
    var scene = new BABYLON.Scene(engine);
    
    //scene.gravity = new BABYLON.Vector3(0, -0.9, 0);

    //camera
    var camera = new BABYLON.ArcRotateCamera("Camera", 90, Math.PI/3, 180, BABYLON.Vector3.Zero(), scene);
    camera.rotation=new BABYLON.Vector3(0,0,0)
    camera.attachControl(canvas, true);
    //camera collision
    camera.lowerBetaLimit = 0.1;
    camera.collisionRadius = new BABYLON.Vector3(50, 0.5, 50);
    camera.checkCollisions = true;
    camera.lowerRadiusLimit = 150;
    //camera.applyGravity = true;

    //light
    var light = new BABYLON.HemisphericLight("hemi", new BABYLON.Vector3(0, 1, 0), scene);
    
    //ground
    var ground = BABYLON.Mesh.CreateGround("ground", 1000, 1000, 1, scene);
    ground.material = new BABYLON.StandardMaterial("ground", scene);
    ground.material.diffuseColor = BABYLON.Color3.FromInts(193, 181, 151);
    ground.material.specularColor = BABYLON.Color3.Black();
    ground.checkCollisions = true;


    var nPlans = 5
    //Restrict zoom
    /*globe = BABYLON.Mesh.CreateSphere("sphere1", 16, nPlans*25, scene);
    globe.material = new BABYLON.StandardMaterial("globe",scene);
    globe.material.alpha=0
    globe.material.diffuseColor = new BABYLON.Color3(0, 0, 0);
    globe.material.specularColor = new BABYLON.Color3(0, 0, 0);
    globe.checkCollisions=true;*/

    //create house
    createHouse(nPlans,scene);

    //impact
    /*var impact = BABYLON.Mesh.CreatePlane("impact", 1, scene);
    impact.material = new BABYLON.StandardMaterial("impactMat", scene);
    impact.material.diffuseColor = new BABYLON.Color3(1.5, 0, 0);
    impact.position = new BABYLON.Vector3(0, -1, 0);*/

    //ifImpact
    /*scene.onPointerDown = function (evt, pickResult) {
        // if hit, updates impact position
        if (pickResult.hit) {
            impact.position.x = pickResult.pickedPoint.x;
            impact.position.y = pickResult.pickedPoint.y;
        }
    };*/

    //camera.checkCollisions = true;

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
  
            //var alpha = 0;
            //knot.scaling.y = 1.5;
  
            scene.beforeRender = function() {
            //knot.rotation.y = alpha;
              
            //alpha += 0.03;

            };
}
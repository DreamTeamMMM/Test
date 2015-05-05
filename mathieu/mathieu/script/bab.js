if (BABYLON.Engine.isSupported()) {
 
            var canvas = document.getElementById("canvas");
            var engine = new BABYLON.Engine(canvas, true);

            // The function onload is loaded when the DOM has been loaded
            /*document.addEventListener("DOMContentLoaded", function () {
            onload();
            }, false);*/

            // Resize the babylon engine when the window is resized
            window.addEventListener("resize", function () {
                if (engine) {
                    engine.resize();
                }
            },false);



            /*function room(xSize, zSize) {
                BABYLON.Mesh.call(this,name,scene);
                //this.name = name;
                //this.campus = campus;
                //this.house = house;
                //this.floor = floor;
                //this.number = number;
                this.xSize = xSize;
                this.ySize = ySize;
                //this.available = available;
                //this.features = features;


            }
            room.prototype = Object.create(BABYLON.Mesh.prototype);
            room.prototype.constructor = room;

            room.prototype.positioning = function(){


            }*/


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
                scene.meshes.push(room);
            }

            var createCoridor=function(name,scene,xScal,xPos,yPos,zPos){
                for(i=0;i<=xScal;i++){
                    createRoom(name,scene,xScal,1,xPos,yPos,zPos)
                }
            }

            var createFloor = function(name,scene,xScal,zScal,yPos){
                var box = BABYLON.Mesh.CreateBox(name, 1, scene);
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
                scene.meshes.push(box);

            }

            //var createFloor=function(name,scene,)

            var createHouse = function(numPlan,scene){
                for(i=0;i<numPlan;i++){
                    createFloor("Plan"+i,scene,100,30,i*10);
                    for(x=-40;x<=40;x+=20){
                        for(z=-10;z<=10;z+=20){
                        //createCoridor("cor",scene,9,x,i*10,z);
                        createRoom("Room"+x+""+z,scene,18,12,x,i*10,z);
                        }
                    }
                }
            }

            var hideMesh = function(scene, mesh){
                /*var toHide = scene.meshes;
                for(var i=0; i<toHide.length;i++){
                if(toHide[i].isVisible = true){
                toHide[i].isVisible = false;
                }else{
                toHide[i].isVisible = true;
            }
            }*/
            var temp = mesh.getChildren();
            for(i=0;i<temp.length;i++){
                temp[i].isVisible=false;
            }
        }
            var allVisible = function(scene){
                var n = scene.meshes
                for(var i=0;i<scene.meshes.length;i++){
                    scene.meshes[i].isVisible=true;
                }
            }

            var importer = function(scene, floor){

    BABYLON.SceneLoader.ImportMesh("", "script/", "test3.babylon", scene, function (newMeshes, particleSystems) {
    for(var i=0; i<newMeshes.length;i++){
    var temp = newMeshes[i];
    //console.log(temp.name)
    temp.scaling.x=2;
    temp.scaling.y=10;
    temp.scaling.z=2;
    temp.position.y=floor*10;
    temp.name = "P1"+(floor+1)+i;
    //console.log(temp.name)
    //temp.rotation.y=new BABYLON.Vector3(0,0,0);*/
    temp.material = new BABYLON.StandardMaterial("pol", scene);
    //temp.material.diffuseColor = BABYLON.Color3.FromInts(193, 181, 151);
    temp.material.diffuseColor = new BABYLON.Color3.FromInts(146, 146, 146);
    temp.parent = scene.getMeshByName("floor"+floor);
    }
    //newMeshes[0].material.diffuseColor = BABYLON.Color3.Red();
    //scene.getMeshByName("P1211").material.diffuseColor = BABYLON.Color3.Green();
        });
        }

            var findRoom = function(scene){
                document.getElementById("findButton").onclick = function(){
                var f = document.getElementById("txt-floor").value;
                var r = document.getElementById("txt-room").value;
                if(f!=="" &&r===""){
                    //var show = scene.getMeshByName("floor"+f);
                     allVisible(scene);
                    for(var i = 0; i<5;i++){
                        console.log(i);
                      if((""+(i+1)) !==f){  
                    var show = scene.getMeshByName("floor"+i);
                    console.log(show);
                    hideMesh(scene, show);
                }else{};
                }
                }else{
                    allVisible(scene);
                console.log("P1"+f+r);
                var room = scene.getMeshByName("P1"+f+r);
                alterRoom(scene,room);
            }
            }
            }

            var selectRoom = function(scene){
                scene.onPointerDown = function(evt,picked){
                alterRoom(scene, picked.pickedMesh);
                };
            }

            var alterColor = function(r, c){
                r.material.diffuseColor = c;
                r.material.specularColor = c;
                r.material.reflectionColor = c;
            }

            var alterRoom = function(scene,room){
                if(room === null || room === undefined){
                    console.log(room);
                }else{
                    console.log(room.name);
                    console.log(room.position);
                    for(i=0;i<scene.meshes.length;i++){
                        var temp = scene.meshes[i];
                        var c = BABYLON.Color3;
                        switch(temp.name){
                            case "ground":
                                break;
                            case "trappa":
                                break;
                            case room.name:
                                alterColor(room,c.Green());
                                
                                console.log(room.absolutePosition);

                                break;
                            /*case "sphere4":
                                alterColor(room,c.Green());
                                var n = scene.meshes;
                                for(j=0;j<n.length;j++){
                                    if(n[j].name.substring(0,2) ==="P14"){
                                    alterColor(n[j],c.Green());
                                }
                                }
                                break;*/
                            case 4:
                                day = "Thursday";
                                break;
                            case 5:
                                day = "Friday";
                                break;
                            default:
                            alterColor(temp,c.FromInts(146, 146, 146));
                                break;
                        }
                        }
                        /*if(temp === room && temp.name !== "ground"){
                            alterColor(room,c.Green());
                        }else if(temp.name.substring(0,1) === "P"){
                            alterColor(temp,c.Red())
                        }else{}*/
                    }
                }
            

            
            var createScene = function () {
    //scene
    var scene = new BABYLON.Scene(engine);
    
    //scene.gravity = new BABYLON.Vector3(0, -0.9, 0);

    /*var skybox = BABYLON.Mesh.CreateBox("skyBox", 1000.0, scene);
    var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
    skyboxMaterial.backFaceCulling = false;
    skybox.material = skyboxMaterial;
    //skybox.infiniteDistance = true;
    skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
    skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
    skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("script/skybox/skybox", scene);
    skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
    skybox.renderingGroupId = 0;*/


    //camera
    var camera = new BABYLON.ArcRotateCamera("Camera", 90, Math.PI/3, 180, BABYLON.Vector3.Zero(), scene);
    camera.rotation=new BABYLON.Vector3(0,0,0)
    camera.attachControl(canvas, true);
    //camera collision
    camera.lowerBetaLimit = 0.1;
    camera.collisionRadius = new BABYLON.Vector3(50, 0.5, 50);
    camera.checkCollisions = true;
    //camera.lowerRadiusLimit = 150;
    camera.upperRadiusLimit=250;
    //camera.applyGravity = true;

    //light
    var light = new BABYLON.HemisphericLight("hemi", new BABYLON.Vector3(0, 1, 0), scene);
    
    //ground
   var ground = BABYLON.Mesh.CreateGround("ground", 500, 500, 25, scene);
    ground.material = new BABYLON.StandardMaterial("ground", scene);
    ground.material.diffuseColor = BABYLON.Color3.FromInts(193, 181, 151);
    ground.material.specularColor = BABYLON.Color3.Black();
    //ground.material.wireframe = true;
    ground.checkCollisions = true;
    ground.isPickable = false;

    //importer(scene,1);
    for(i=0;i<5;i++){
    globe = BABYLON.Mesh.CreateSphere("floor"+i, 2, 0.01, scene);
    globe.material = new BABYLON.StandardMaterial("floor", scene);
    //globe.parent=camera;
    globe.position.x=0;
    globe.position.y=0;
    globe.position.z=0;
    importer(scene,i);  
    
};

    /*BABYLON.SceneLoader.ImportMesh("", "script/", "testing.babylon", scene, function (newMeshes, particleSystems) {
    
    for(j=0;j<5;j++){
    for(i=0; i<newMeshes.length;i++){
    var temp = newMeshes[i];
    //console.log(temp.name)
    temp.scaling.x=5;
    temp.scaling.y=5;
    temp.scaling.z=5;
    temp.position.y=j*10;
    //temp.rotation.y=new BABYLON.Vector3(0,0,0);
    temp.material = new BABYLON.StandardMaterial("pol", scene);
    //temp.material.diffuseColor = BABYLON.Color3.FromInts(193, 181, 151);
    temp.material.diffuseColor = BABYLON.Color3.Blue();
    }}
    //newMeshes[0].material.diffuseColor = BABYLON.Color3.Red();
    //scene.getMeshByName("P1211").material.diffuseColor = BABYLON.Color3.Green();
    
        });*/


   
   


    //grid
    
   // var nPlans = 5
    //Restrict zoom
    /*c
    globe.checkCollisions=true;*/

    //create house
    //createHouse(nPlans,scene);

    //impact
    /*var impact = BABYLON.Mesh.CreatePlane("impact", 1, scene);
    impact.material = new BABYLON.StandardMaterial("impactMat", scene);
    impact.material.diffuseColor = new BABYLON.Color3(1.5, 0, 0);
    impact.position = new BABYLON.Vector3(0, -1, 0);

    //ifImpact
    scene.onPointerDown = function (evt, pickResult) {
        // if hit, updates impact position
        if (pickResult.hit) {
            impact.position.x = pickResult.pickedPoint.x;
            impact.position.y = pickResult.pickedPoint.y;
        }
    };*/

    //hideMesh(scene);

    //camera.checkCollisions = true;

    //findRoom(scene);
    //console.log(scene.meshes[0].name);

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
              findRoom(scene);
              selectRoom(scene);
            //alpha += 0.03;

            };
}
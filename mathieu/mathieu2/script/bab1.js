if (BABYLON.Engine.isSupported()) {
 
            var canvas = document.getElementById("canvas");
            var engine = new BABYLON.Engine(canvas, true);

            // Resize the babylon engine when the window is resized
            window.addEventListener("resize", function () {
                if (engine) {
                    engine.resize();
                }
            },false);

            //imports the .json file containing the path information
            $.getJSON("script/pathHelp.json", function(data){
            helpPath=data.path;
            console.log(1)
            });

    //imports the .babylon object created with blender
    var importer = function(scene, floor, path){
        BABYLON.SceneLoader.ImportMesh("", "script/", path, scene, function (newMeshes, particleSystems) {
            //console.log(helpPath)
            for(var i=0; i<newMeshes.length;i++){
                var temp = newMeshes[i];
                temp.scaling.x=1;
                temp.scaling.y=1;
                temp.scaling.z=1;
                temp.position.y=0.1+floor*10;
                //temp.name = "P1"+(floor+1)+i;
                temp.material = new BABYLON.StandardMaterial("pol", scene);
    //temp.material.diffuseColor = BABYLON.Color3.FromInts(193, 181, 151);
                temp.material.diffuseColor = new BABYLON.Color3.FromInts(146, 146, 146);
                temp.material.specularColor = BABYLON.Color3.Black();
                //temp.isVisible=false;
                /*if(temp.name.substring(0,1) === "K"){
                    temp.position.y+=0.1;
                    //temp.isVisible=false;
                }*/
                /*for(var j=0; j<helpPath.length;j++){
                    if(temp.name=)
                }*/
                temp.parent = scene.getMeshByName("floor"+floor);
            };
        });
    }    
    var startRoom;
    var endRoom;

   var navigation = function(scene){
        document.getElementById("startNav").onclick = function(){
                if(startRoom!==undefined && endRoom!==undefined){
                    alterColor(startRoom, BABYLON.Color3.FromInts(146, 146, 146));
                    alterColor(endRoom, BABYLON.Color3.FromInts(146, 146, 146));
                }
                var start = document.getElementById("txt-start").value;
                var end = document.getElementById("txt-end").value;
                
                if(start!=="" && end!==""){
                //console.log(start);
                //console.log(end);
                startRoom = scene.getMeshByName(start);
                endRoom = scene.getMeshByName(end);
                if(startRoom!==null && endRoom!==null){
                    alterColor(startRoom, BABYLON.Color3.Red());
                    alterColor(endRoom, BABYLON.Color3.Blue())
                //removePath(scene);
                //pathFinding(startRoom,endRoom,scene);*/
                removePath(scene);
                var startNode=findNode(start);
                var endNode=findNode(end);
                var toRender = [];
                toRender = findPath(startNode, endNode);
                toRender = matchNode(toRender,scene);
                drawPath(toRender,scene);
                }
            }
        }         
   }

    var createScene = function () {
    //scene
    var scene = new BABYLON.Scene(engine);
    
    //camera
    var camera = new BABYLON.ArcRotateCamera("Camera", 175, Math.PI/3, 50, BABYLON.Vector3.Zero(), scene);
    camera.rotation=new BABYLON.Vector3(0,0,0)
    camera.attachControl(canvas);
    //camera collision
    camera.lowerBetaLimit = 0.1;
    camera.upperBetaLimit = 10;
    camera.collisionRadius = new BABYLON.Vector3(50, 0.5, 50);
    camera.checkCollisions = true;
    camera.lowerRadiusLimit = 20;
    camera.upperRadiusLimit=90;
    camera.angularSensibility = 3000;
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

    for(i=0;i<1;i++){
        globe = new BABYLON.Mesh("floor"+i, scene);
        globe.isVisible = false;
        globe.position.x=0;
        globe.position.y=0;
        globe.position.z=0;
        importer(scene,i, "PTest.babylon");  
       // importer(scene,i, "scene.babylon");
    }

    return scene;
}

            var scene = createScene();

            var renderLoop = function () {
            scene.render();
            };
            engine.runRenderLoop(renderLoop);

            scene.beforeRender = function() {
            navigation(scene);
            };
}
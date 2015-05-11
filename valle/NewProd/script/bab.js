//Checks if Babylon is supported by the browser
if (BABYLON.Engine.isSupported()) {
            var canvas = document.getElementById("canvas");
            var engine = new BABYLON.Engine(canvas, true); //creates the Babylon Engine

            // Resize the babylon engine when the window is resized
            window.addEventListener("resize", function () {
                if (engine) {
                    engine.resize();
                }
            },false);

            //hides the meshes 
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

    //makes the meshes visible again
    var allVisible = function(scene){
        var n = scene.meshes
        for(var i=0;i<scene.meshes.length;i++){
            scene.meshes[i].isVisible=true;
        }
    }

    //imports the meshes from .babylon file
    var importer = function(scene, floor){
        BABYLON.SceneLoader.ImportMesh("", "script/", "test.babylon", scene, function (newMeshes, particleSystems) {
            for(var i=0; i<newMeshes.length;i++){
                var temp = newMeshes[i];
    //console.log(temp.name)
                temp.scaling.x=1;
                temp.scaling.y=1;
                temp.scaling.z=1;
                temp.position.y=floor*10;
                temp.name = "P1"+(floor+1)+i;
    //console.log(temp.name)
    //temp.rotation.y=new BABYLON.Vector3(0,0,0);*/
                temp.material = new BABYLON.StandardMaterial("pol", scene);
    //temp.material.diffuseColor = BABYLON.Color3.FromInts(193, 181, 151);
                temp.material.diffuseColor = new BABYLON.Color3.FromInts(146, 146, 146);
                temp.parent = scene.getMeshByName("floor"+floor);
            };
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



        var navigation = function(scene){
            document.getElementById("startNav").onclick = function(){
               // console.log(1);
                var start = document.getElementById("txt-start").value;
                var end = document.getElementById("txt-end").value;
                console.log(start);
                console.log(end);
                var startRoom = scene.getMeshByName("P1"+start);
                var endRoom = scene.getMeshByName("P1"+end);
                    alterColor(startRoom, BABYLON.Color3.Red());
                    alterColor(endRoom, BABYLON.Color3.Blue());
                    var path = scene.getMeshByName("path");
                    if(path !== null){
                    path.dispose();
                }else{
                    BABYLON.Mesh.CreateLines("path", [startRoom.position,endRoom.position], scene);
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
    
    //camera
    var camera = new BABYLON.ArcRotateCamera("Camera", 90, Math.PI/3, 180, BABYLON.Vector3.Zero(), scene);
    camera.rotation=new BABYLON.Vector3(0,0,0)
    camera.attachControl(canvas, true);
    //camera collision
    camera.lowerBetaLimit = 0.1;
    camera.collisionRadius = new BABYLON.Vector3(50, 0.5, 50);
    camera.checkCollisions = true;
    camera.lowerRadiusLimit = 50;
    camera.upperRadiusLimit=150;
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
    return scene;
}

            //creates the scene
            var scene = createScene();

            //loop rendering the scene
            var renderLoop = function () {
                scene.render();
            };
            engine.runRenderLoop(renderLoop);

            //var alpha = 0;
            //knot.scaling.y = 1.5;

            //what have to be done before rendering
            scene.beforeRender = function() {
            //knot.rotation.y = alpha;
            findRoom(scene);
            selectRoom(scene);
            navigation(scene);
            //alpha += 0.03;
        };
    }
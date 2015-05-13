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
            helpPath=data.plan2;
           // console.log(1)
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
                temp.position.y=0.1+floor*1.5;
                //temp.name = "P1"+(floor+1)+i;
                temp.material = new BABYLON.StandardMaterial("pol", scene);
    //temp.material.diffuseColor = BABYLON.Color3.FromInts(193, 181, 151);
                temp.material.specularColor = BABYLON.Color3.Black();
                //temp.material.diffuseColor = BABYLON.Color3.FromInts(210, 210, 210);
                temp.material.diffuseColor = BABYLON.Color3.FromInts(255, 125, 125);

                
            
                //temp.material.ambientColor = BABYLON.Color3.Black();

                //temp.isVisible=false;
                if(temp.name.substring(0,1) === "K"){
                    temp.position.y+=0.05;
                    temp.material.diffuseColor = BABYLON.Color3.FromInts(50,50, 255);
                    temp.isVisible=false;
                    temp.isPickable=false;
                }

                if(temp.name.substring(0,3) === "Tra"){
                    temp.position.y+=0.01;
                    temp.material.diffuseColor = new BABYLON.Color3.FromInts(145, 255, 193);
                    temp.material.alpha=0.3
                }

                if(temp.name.substring(0,3) === "His"){
                    //temp.position.y+=0.1;
                    temp.material.diffuseColor = new BABYLON.Color3.FromInts(145, 190, 255);
                }
                if(temp.name.substring(0,3) === "Pla"){
                    //temp.position.y+=0.1;
                    temp.isPickable=false;
                    //temp.material.diffuseColor = new BABYLON.Color3.FromInts(175, 175, 175);
                    temp.material.diffuseColor = new BABYLON.Color3.FromInts(170, 170, 170);
                }
                if(temp.name.substring(0,3) === "P" && temp.name.substring(0,3) !== "Pla"){
                    temp.material.alpha=0.6
                }
                /*for(var j=0; j<helpPath.length;j++){
                    if(temp.name=)
                }*/
                temp.parent = scene.getMeshByName("floor"+floor);
            };
        });
    }    
    
    var startRoom;
    var endRoom;
    var nodes;
    var navigationByTxt = function(scene){
        document.getElementById("startNav").onclick = function(){
                var start = document.getElementById("txt-start").value;
                var end = document.getElementById("txt-end").value;
                helpNav(start,end,scene);
        }         
    }

    var selectedRooms = [];
    var selectRoom = function(scene){
        scene.onPointerDown = function(evt,picked){
          //alterRoom(scene, picked.pickedMesh);
          if(picked.pickedMesh !== null && picked.pickedMesh.name.substring(0,1) === "P"){
          //console.log("onPointer");
          resetColors();
          selectedRooms.push(picked.pickedMesh.name);
          alterColor(picked.pickedMesh, BABYLON.Color3.FromInts(255,0,0));

      }
    };
}

    var navigationByClick = function(scene){
        if(selectedRooms.length > 0){
            startRoom=scene.getMeshByName(selectedRooms[0]);
            var toDisplay = selectedRooms[0].substring(1);
            document.getElementById("Rname").value = toDisplay;
            showRoom(toDisplay);
            selectedRooms = [];
            resetColors;
        }
    }

    var freeRoomList;
    var displayFreeRooms = function(){
        if(freeRoomList !== undefined){
            hideFreeRooms();
        }

    var listOfFreeRooms = document.getElementsByClassName("emptyRooms");
        listOfFreeRooms.onclick = function(){
            freeRoomList = listOfFreeRooms.value;
            showFreeRooms();
        }         
    }

    
    var showFreeRooms = function(){
        for(var i=0;i<freeRoomList.length;i++){
            var freeRoom = scene.getMeshByName(freeRoomList[i]);
            alterColor(freeRoom, BABYLON.Color3.FromInts(145, 255, 193));
        }
    }

    var hideFreeRooms = function(){
        for(var i=0;i<freeRoomList.length;i++){
            var freeRoom = scene.getMeshByName(freeRoomList[i]);
            alterColor(freeRoom, BABYLON.Color3.FromInts(255, 125, 125));
        }
    }

    var resetColors = function(){
        if(startRoom!==undefined){
            alterColor(startRoom, BABYLON.Color3.FromInts(255, 125, 125));
        }
        if(endRoom!==undefined){        
            alterColor(endRoom, BABYLON.Color3.FromInts(255, 125, 125));
        }
        if(startRoom!==undefined && endRoom!==undefined){
            for(i=0; i<nodes.length;i++){
                    //console.log(toRender[i]);
                    nodes[i].isVisible=false;
                    removePath(scene);
                }
        }
    }

    var helpNav = function(start,end,scene){
    resetColors();
    if(start!=="" && end!=="" && start.substring(0,1)==="P" && end.substring(0,1)==="P"){
                //console.log(start);
                //console.log(end);
                startRoom = scene.getMeshByName(start);
                endRoom = scene.getMeshByName(end);
                if(startRoom!==null && endRoom!==null){
                    alterColor(startRoom, BABYLON.Color3.FromInts(255, 0, 0));
                    alterColor(endRoom, BABYLON.Color3.FromInts(127, 0, 255))
                //removePath(scene);
                //pathFinding(startRoom,endRoom,scene);*/
                
                var startNode=roomToNode(start);
                var endNode=roomToNode(end);
                //console.log("start= "+startNode+ "\nend= "+endNode);
                var toRender = [];
                toRender = findPath(startNode, endNode); //calls the pathfinding algorithm
                console.log(toRender);
                nodes = getNode(toRender,scene);
                for(i=0; i<nodes.length;i++){
                    //console.log(toRender[i]);
                    nodes[i].isVisible=true;
                }
                toRender = matchNode(toRender,scene);
                toRender.unshift(startRoom.position);
                toRender.push(endRoom.position);
                drawPath(toRender,scene);
                }
    }
   }



    var createScene = function () {
    //scene
    var scene = new BABYLON.Scene(engine);
    
    //camera
    var camera = new BABYLON.ArcRotateCamera("Camera", 175, 45, 15, BABYLON.Vector3.Zero(), scene);
    camera.rotation=new BABYLON.Vector3(0,0,0)
    camera.attachControl(canvas);
    //camera collision
    camera.lowerBetaLimit = 0.01;
    camera.upperBetaLimit = 100;
    camera.collisionRadius = new BABYLON.Vector3(50, 0.5, 50);
    camera.checkCollisions = true;
    camera.lowerRadiusLimit = 7;
    camera.upperRadiusLimit=50;
    camera.angularSensibility = 3000;
    //light
    var light = new BABYLON.HemisphericLight("hemi", new BABYLON.Vector3(0,1,0), scene);
   
    //ground
    var ground = BABYLON.Mesh.CreateGround("ground", 500, 500, 25, scene);
    ground.material = new BABYLON.StandardMaterial("ground", scene);
    ground.material.diffuseColor = BABYLON.Color3.FromInts(190, 190, 190);
    //ground.material.diffuseColor = BABYLON.Color3.White();
    ground.material.specularColor = BABYLON.Color3.Black();
    //ground.material.wireframe = true;
    ground.checkCollisions = true;
    ground.isPickable = false;


    var numOfPlans = 1;
    for(i=0;i<numOfPlans;i++){
        globe = new BABYLON.Mesh("floor"+i, scene);
        globe.isVisible = false;
        globe.position.x=0;
        globe.position.y=0;
        globe.position.z=0;
        importer(scene,i, "finalPlan2.babylon");  
       // importer(scene,i, "scene.babylon");
    }
    //camera.target = new BABYLON.Vector3(0, 3.5, 0);

    return scene;
}

            var scene = createScene();

            var renderLoop = function () {
            scene.render();
            };
            engine.runRenderLoop(renderLoop);

            scene.beforeRender = function() {
            selectRoom(scene);    
            navigationByClick(scene);
            navigationByTxt(scene);
            };
}
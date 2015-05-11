//Checks if Node name exists in visitedlist, returns true if no match
var hasNoneVisitedNodes = function(nodeName, visitedlist){
        for(var i = 0; i < visitedlist.length; i++){
            if(nodeName === visitedlist[i]){
                    return false;
                }
            }
            return true;
        }

//main algorithm for finding the shortest path from start to end
//tests all the possible ways from start to end and returns them in the list allWay 
var pathFinder = function (start, end, visitedlist, possibleWay, allWay){
        if(hasNoneVisitedNodes(start.name, visitedlist)){
                possibleWay.push(start.name);
                visitedlist.push(start.name);
        }
        if(start.name === end.name){
                allWay.push(possibleWay.slice());
                possibleWay.pop();
                var next = findNode(possibleWay[possibleWay.length - 1]);
                return pathFinder(next, end, visitedlist, possibleWay,allWay);
        } else if(start.n !== "" && hasNoneVisitedNodes(start.n, visitedlist)){
                var next = findNode(start.n);
                return pathFinder(next, end, visitedlist, possibleWay,allWay);
        } else if(start.e !== "" && hasNoneVisitedNodes(start.e, visitedlist)){
                var next = findNode(start.e);
                return pathFinder(next, end, visitedlist, possibleWay,allWay);
        }else if(start.s !== "" && hasNoneVisitedNodes(start.s, visitedlist)){
                var next = findNode(start.s);
                return pathFinder(next, end, visitedlist, possibleWay,allWay);
        }else if(start.w !== "" && hasNoneVisitedNodes(start.w, visitedlist)){
                var next = findNode(start.w);
                return pathFinder(next, end, visitedlist, possibleWay,allWay);     
        }else{
                possibleWay.pop();
                //console.log(visitedlist);
                var nodeInList=visitedlist.indexOf(start.name);
                if(nodeInList !== -1){
                    visitedlist = visitedlist.slice(0, nodeInList+1);
                }
                if(possibleWay.length <=0){
                    //console.log("allWay.length = "+allWay.length);
                    return allWay;
                }
                var next = findNode(possibleWay[possibleWay.length - 1]);
                return pathFinder(next, end, visitedlist, possibleWay,allWay);
        }
}

//function calling pathFinder, 
//returns the shortest path from s to e 
//compares the output of pathFinder to decide the shortest path
//returns s if s===e
 var findPath = function(s,e){
    if(s.name===e.name){
        //console.log("from = to");
        return [s.name, e.name];
    } else{
    var toCompare = pathFinder(s,e,[],[],[]);
    var size = 100;
    var toReturn;
    for(var i=0;i<toCompare.length;i++){
        //console.log(toCompare[i]);
        if(toCompare[i].length <= size){
            size=toCompare[i].length;
            toReturn=toCompare[i];
        }
    }
    return toReturn;
    }
 }

    var findNode = function(toFind){
        for(var i=0;i<helpPath.length;i++){
                    if(toFind === helpPath[i].name){
                        return helpPath[i];
                    }
         }
    }

    var getNode = function(nodeList, scene){
        var meshList=[];
        for(var i=0;i<nodeList.length;i++){
            meshList.push(scene.getMeshByName("K"+nodeList[i]));
        }
        return meshList;
    }

    var matchNode = function(nodeList, scene){
        var meshList=[];
        for(var i=0;i<nodeList.length;i++){
            meshList.push(scene.getMeshByName("K"+nodeList[i]).position);
        }
        return meshList;
    }

    var roomToNode = function(roomToFind){
        for(var i=0;i<helpPath.length;i++){
                    if(helpPath[i].room.indexOf(roomToFind) !== -1){
                        return helpPath[i];
                    }
         }
         return false
    }

   var removePath= function(scene){
    var path = scene.getMeshByName("path");
                    if(path !== null){
                    path.dispose();
                }
   }

   var drawPath = function(newPath,scene){
    var line = BABYLON.Mesh.CreateLines("path", newPath, scene);
    //line.material = new BABYLON.StandardMaterial("pathMat",scene);
    line.color = BABYLON.Color3.FromInts(0, 128, 255);
   }

   var alterColor = function(r, c){
            r.material.diffuseColor = c;
            r.material.specularColor = BABYLON.Color3.Black();;
            //r.material.reflectionColor = c;
    }
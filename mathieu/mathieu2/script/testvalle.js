var a = {name: "1", n:"", e:"2", s:"3", w:""};
        var b = {name: "2", n:"", e:"", s:"4", w:"1"};
        var c = {name: "3", n:"1", e:"4", s:"", w:""};
        var d = {name: "4", n:"2", e:"", s:"", w:"3"};
        var e = {name: "5", n:"", e:"", s:"", w:""};
 
        var all = [a,b,c,d,e];
 
        //var route = [];
 
        u = [1,2,4,5,6,7,8];
 
        var routeArray = function(name, route) {
                for(var i=0; i< route.length; i++) {
                        if( name !== route[i]) {
                        } else {
                                return false;
                        }
                }
                return true;
        }
 
        //console.log(routeArray(1,[]));
        //console.log(routeArray(2,u));
        //console.log(routeArray(3,u));
        //console.log(routeArray(4,u));
 
        var findNode = function(name){
                for (var i = 0; i < all.length; i++) {
                        if(all[i].name === name){
                                //console.log(all[i]);
                                return all[i];
                        }
                };
        }
 
        var pathFindingAlgorithm = function(start, end, route, i){
                i +=1;
                console.log(i,"- - - - - - - - - - - - - - Start of function - - - - - - - - - - - - - -")
                console.log(i,"Start route ", route)
                console.log(i,"Start end ", end)
                console.log(i,"Start start ", start)
 
                var shortestPath = [];
                var currentPath = [];
                var originalPath = route;
                route.push(start.name);
                if(start.name === end.name){
                        console.log(i,"! ! ! ! ! ! ! ! ! ! ! ! KLART ! ! ! ! ! ! ! ! ! ! ! !")
                        console.log(i,"Length of path: ", currentPath.length)
                        console.log(i,"Nuvarande Path: ", currentPath)
                        return route;
                } else {
                        if (route !== undefined) {
                                if(start.n !== "" && routeArray(start.n, route)) {
                                        console.log(i,"North")
                                        console.log(i,"Nuvarande path (North): ", route)
                                        var next = findNode(start.n);
                                        console.log(i,"- - - - - Start Name (South): ",start.name)
                                        console.log(i,"- - - - - Next Name (South): ",next.name)
                                        currentPath = pathFindingAlgorithm(next, end, originalPath, i);
                                        console.log(i,"Uppdaterade path (North): ", currentPath)
                                        if (currentPath !== undefined){
                                                if (shortestPath.length === 0) {
                                                        shortestPath = currentPath
                                                        console.log(i,"vad ar vagarna? (North)", currentPath)
                                                        console.log(i,"vad ar vagarna? (North)", shortestPath)                                                 
                                                } else if (currentPath.length <= shortestPath.length) {
                                                        shortestPath = currentPath
                                                        console.log(i,"kortaste vagen (North): ", shortestPath)
                                                }
                                        }
                                }
                        }
                        console.log(i,"Mellan if-satser ", route);
                        console.log(i,"Mellan orginal if-satser ", originalPath);
                        if (route !== undefined) {
                                if(start.e !== "" && routeArray(start.e, route)){
                                        console.log(i,"East")
                                        console.log(i,"Nuvarande path (East): ", route)
                                        var next = findNode(start.e);
                                        console.log(i,"- - - - - Start Name (South): ",start.name)
                                        console.log(i,"- - - - - Next Name (South): ",next.name)
                                        currentPath = pathFindingAlgorithm(next, end, originalPath, i);
                                        console.log(i,"Uppdaterade path (East): ", currentPath)
                                        if (currentPath !== undefined){
                                        console.log(i,"Icke undefined (East): ", next)
                                        console.log(i,"Nuranade path apppa path (East): ", currentPath)
                                        console.log(i,"Kortaste path (East): ", shortestPath)
 
                                                if (shortestPath.length === 0) {
                                                        shortestPath = currentPath;
                                                        console.log(i,"Kortaste path nu (East): ", shortestPath);                                                      
                                                } else if (currentPath.length <= shortestPath.length) {
                                                        shortestPath = currentPath
                                                        console.log(i,"kortaste vagen (East): ", shortestPath)
                                                }
                                        }
                                }
                        }
                        console.log(i,"Mellan if-satser ", route);
                        console.log(i,"Mellan orginal if-satser ", originalPath);
                        if (route !== undefined) {
                                if(start.s !== "" && routeArray(start.s, route)){
                                        console.log(i,"South")
                                        console.log(i,"Nuvarande path (South): ", route)
                                        var next = findNode(start.s);
                                        console.log(i,"- - - - - Next (South): ",next)
                                        console.log(i,"- - - - - Start Name (South): ",start.name)
                                        console.log(i,"- - - - - Next Name (South): ",next.name)
 
                                        currentPath = pathFindingAlgorithm(next, end, originalPath, i);
                                        console.log(i,"Uppdaterade path (South): ", currentPath)
                                        if (currentPath !== undefined){
                                                if (shortestPath.length === 0) {
                                                        shortestPath = currentPath
                                                        console.log(i,"vad ar vagarna? (South)", currentPath)
                                                        console.log(i,"vad ar vagarna? (South)", shortestPath)                                                 
                                                } else if (currentPath.length <= shortestPath.length) {
                                                        shortestPath = currentPath
                                                        console.log(i,"kortaste vagen (South): ", shortestPath)
                                                }
                                        }
 
                                }
                        }
                        console.log(i,"Mellan if-satser ", route);
                        console.log(i,"Mellan orginal if-satser ", originalPath);
                        if (route !== undefined) {
                                if(start.w !== "" && routeArray(start.w, route)){
                                        console.log(i,"West")
                                        console.log(i,"Nuvarande path (West): ", route)
                                        var next = findNode(start.w);
                                        console.log(i,"- - - - - Start Name (South): ",start.name)
                                        console.log(i,"- - - - - Next Name (South): ",next.name)
                                        currentPath = pathFindingAlgorithm(next, end, originalPath, i);
                                        console.log(i,"Uppdaterade path (West): ", currentPath)
                                        if (currentPath !== undefined){
                                                console.log(i,"Inte undefined (West)")
                                                if (shortestPath.length === 0) {
                                                        shortestPath = currentPath
                                                        console.log(i,"vad ar vagarna? (West)", currentPath)
                                                        console.log(i,"vad ar vagarna? (West)", shortestPath)                                                  
                                                } else if (currentPath.length <= shortestPath.length) {
                                                        shortestPath = currentPath
                                                        console.log(i,"kortaste vagen (West): ", shortestPath)
                                                }
                                                console.log(i,"va fan!!!")
                                        }
                                }
                        }
                        return shortestPath;
                       
                }
        }
        console.log("% % % % % % % % % % % % % % % % a till a % % % % % % % % % % % % % % % %");
        console.log(pathFindingAlgorithm(a,a,[],0));
        console.log("% % % % % % % % % % % % % % % % a till b % % % % % % % % % % % % % % % %");
        console.log(pathFindingAlgorithm(a,b,[],0));
//      console.log("% % % % % % % % % % % % % % % % a till c % % % % % % % % % % % % % % % %");
//      console.log(pathFindingAlgorithm(a,c,[]));
//console.log("% % % % % % % % % % % % % % % % a till d % % % % % % % % % % % % % % % %");
//console.log(pathFindingAlgorithm(a,d,[]));
//console.log("% % % % % % % % % % % % % % % % b till d % % % % % % % % % % % % % % % %");
//console.log(pathFindingAlgorithm(b,d,[]));
 
 
        /*var pathFindingAlgorithm = function(start, end, route){
                var nRoute = [];
                var eRoute = [];
                var sRoute = [];
                var wRoute = [];
                if(start.name===end.name){
                        route.push(end.name);
        //console.log(route);
        return route;
        } else {
                if(start.n !== "" && routeArray(start.n, route)) {
                        var next = findNode(start.n);
                        route.push(start.name);
                        nRoute = pathFindingAlgorithm(next, end, route);
                }
                if(start.e !== "" && routeArray(start.e, route)){
        //console.log(0)
        var next = findNode(start.e);
        route.push(start.name);
        eRoute = pathFindingAlgorithm(next, end, route);
        }
        if(start.s !== "" && routeArray(start.s, route)){
        // console.log(1)
        var next = findNode(start.s);
        //console.log(next);
        route.push(start.name);
        sRoute = pathFindingAlgorithm(next, end, route);
        }
        if(start.w !== "" && routeArray(start.w, route)){
                var next = findNode(start.w);
                route.push(start.name);
                wRoute = pathFindingAlgorithm(next, end, route);
        }
        }
        nRoute = emptyRoute(nRoute);
        eRoute = emptyRoute(eRoute);
        sRoute = emptyRoute(sRoute);
        wRoute = emptyRoute(wRoute);
        console.log("norr")
        console.log(nRoute.length);
        console.log("ost")
        console.log(eRoute.length);
        console.log("sud")
        console.log(sRoute.length);
        console.log("west")
        console.log(wRoute.length);
        if(nRoute.length <= eRoute.length){route = nRoute;
        } else if(nRoute.length <= sRoute.length){route = nRoute;
        } else if(nRoute.length <= wRoute.length){route = nRoute;
        } else if(eRoute.length <= sRoute.length){route = eRoute;
        } else if(eRoute.length <= wRoute.length){route = eRoute;
        } else if(sRoute.length <= wRoute.length){route = sRoute;
        } else{route = wRoute;
        }
        console.log(route);
        }
 
        var emptyRoute = function (route) {
                if(route === [] || route === NaN) {
                        for(var i = 0; i < 250; i++) { route.push(i);}}
                                console.log("jag är stooooooor")
                        return route;
                }
 
                var routeArray = function(name, route) {
                        var a = true;
                        for(var i=0; i< route.length; i++) {
                                if( name !== route[i]) {
                                        a = true;
                                } else {
                                        return false;
                                }
                        }
                        return a;
                }
                */
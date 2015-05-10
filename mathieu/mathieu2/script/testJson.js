var pathFinder = function (start, end, visitedlist, possibleWay){
        console.log(start.name+" -> "+end.name);
        if(hasNoneVisitedNodes(start.name, visitedlist)){
                                possibleWay.push(start.name);
                                visitedlist.push(start.name);
                        }
        if(start.name === end.name){
               // possibleWay.push(start.name);
                //visitedlist.push(start.name);
                console.log(visitedlist)
                console.log(possibleWay);
                console.log("end")
                return possibleWay;
        }//else if(hasNoneVisitedNodes(start.name, visitedlist)){
                //possibleWay.push(start.name);
               // console.log(82)
 
        else if(start.n !== "" && hasNoneVisitedNodes(start.n, visitedlist)){
                        var next = findNode(start.n);
                        //visitedlist.push(start.name);
                      //  if(hasNoneVisitedNodes(start.name, possibleWay)){
                      //          possibleWay.push(start.name);
                      //  }
                       return pathFinder(next, end, visitedlist, possibleWay);
                    
                } else if(start.e !== "" && hasNoneVisitedNodes(start.e, visitedlist)){
                        var next = findNode(start.e);
                        // visitedlist.push(start.name);
                      //  if(hasNoneVisitedNodes(start.name, possibleWay)){
                      //          possibleWay.push(start.name);
                      //  }
                     return   pathFinder(next, end, visitedlist, possibleWay);
                    
              //          console.log("visit "+visitedlist)
                //        console.log("possible "+possibleWay)
                }else if(start.s !== "" && hasNoneVisitedNodes(start.s, visitedlist)){
                        var next = findNode(start.s);
                        // visitedlist.push(start.name);
                      // if(hasNoneVisitedNodes(start.name, possibleWay)){
                      //         possibleWay.push(start.name);
                      // }
                        return pathFinder(next, end, visitedlist, possibleWay);
                    
                }else if(start.w !== "" && hasNoneVisitedNodes(start.w, visitedlist)){
                        var next = findNode(start.w);
                       //  visitedlist.push(start.name);
                      //   if(hasNoneVisitedNodes(start.name, possibleWay)){
                      //          possibleWay.push(start.name);
                      //  }
                        return pathFinder(next, end, visitedlist, possibleWay);
                    
                }else {
                console.log("befor"+possibleWay)
                possibleWay.pop();
                console.log("after"+possibleWay)
                console.log(visitedlist);
                var next = findNode(possibleWay[possibleWay.length - 1]);
                //possibleWay.pop();
                //var next = findNode(start);
                console.log(next);
                return pathFinder(next, end, visitedlist, possibleWay);
        }


                //console.log(possibleWay)
        /*} else {
            console.log("no way");
              return possibleWay; 

        }*/
    //} else{
    //    return "no possible way";
    //}
    //}
   // return possibleWay;
    console.log("don't come here");
}
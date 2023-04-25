
         var tablecontents =document.getElementsByClassName("tab-contents");
         var igoo=document.getElementsByClassName("igoo");
         function opentab(tabname){
            for(igoo of igoo){
                igoo.classList.remove("act")
            }
            for(tablecontents of tablecontents){
                tablecontents.classList.remove("yigo");
            }
        event.currentTarget.classList.add("act");
        document.getElementById(tabname).classList.add("yigo")
         }
  
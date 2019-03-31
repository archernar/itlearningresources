(function ( $ ) {
    $.fn.nothing = function() {
        return this;
    };
}( jQuery ));

(function ( $ ) {
    $.fn.putLink = function() {
        var url = arguments[0];
        var label = arguments[1];
        var control = arguments[2];
        if (!(control == null)){
            alert(control);
        }
        this.append("<a href='" + url + "'>" + label + "</a><br>" );
        return this;
    };
}( jQuery ));


(function ( $ ) {
    $.fn.margs = function() {
        var sz = "";
        for (var i = 0; i < arguments.length; i++) {
              if ( arguments[i].substring(0,8) == "0101TEXT") {
                   sz = sz + "<td align='middle slimtd' valign='middle' >" + arguments[i].replace("0101TEXT","") + "</td>";
              }
              else {
                   sz = sz + "<td class='topmiddle slimtd'>" + ytimg(arguments[i], "----") + "</td>";
              }
        }
        this.append("<tr>" + sz + "</tr>");
        return this;
    };
}( jQuery ));

(function ( $ ) {
    $.fn.margsvls = function() {
        var sz = "";
        for (var i = 0; i < arguments.length; i++) {
             sz = sz + "<tr><td colspan=30 class='topleft lessfattd'>" + arguments[i] + "</td></tr>";
        }
        this.append(sz);
        return this;
    };
}( jQuery ));
(function ( $ ) {
    $.fn.margsva = function() {
        var a ="";
        var sz = "";
        for (var i = 0; i < arguments.length; i++) {
             a ="<a name='"+ arguments[i] +  "'></a>";
             myAnchorArray[myAnchorArray.length]= arguments[i];
             sz = sz + "<tr><td colspan=30 class='topleft fattd'>" + a + arguments[i] + "</td></tr>";
        }
        this.append(sz);
        return this;
    };
}( jQuery ));
(function ( $ ) {
    $.fn.margsval = function() {
        var a ="";
        var sz = "";
        sz = sz + "<tr><td colspan=30 class='topleft fattd'><a href='" + arguments[0] + "'>" + arguments[1] + "</a></td></tr>";
        this.append(sz);
        return this;
    };
}( jQuery ));
var margsvl_label = "";
(function ( $ ) {
    $.fn.margsvl = function() {
        var a ="";
        var sz = "";
        var szLabel = arguments[0];
        var szClass = ""
        if (arguments.length > 1) {
             var szClass = arguments[1];
        }
        margsvl_label = szLabel;
        a ="<a name='"+ szLabel +  "'></a>";
        myAnchorArray[myAnchorArray.length] = szLabel;
        sz = "<tr><td colspan=30 class='boxtitle'><b><u> " + a + szLabel + "</u></b></td></tr>";
        this.append(sz);
        return this;
    };
}( jQuery ));

(function ( $ ) {
    $.fn.nork = function() {
        var c = "\"";
        var sz = "";
        var f = "";
        var s = "";
        var n = arguments[0];
        var cs = 0;
        var m = 0;
        var mrows = 0;
        var id = "";
        var res = "";
        var re = /[0-9,a-z,A-Z,_-]+/
        var replre = /^.*[?]/
        for (var i = 1; i < arguments.length; i=i+2) {
             id  = arguments[i];
             YTT[id]=arguments[i+1];
             m = i % n; 
             if ( m == 1 ) {
                 sz = sz + "<tr>"
                 mrows++
             }
             res = id.substring(0, 1);
             f = " topmiddle ";
             s = "";
             if ( res == " " ) {
                 res = id.substr(1);
                 f = " middleleft ";
                 cs = n-1;
                 s = " colspan=" + cs.toString() + " ";
             } else {
                 res = ytimg(arguments[i], "----");
             }
             f = " madmiddle ";
             sz = sz + "<td " + s + " class='" + f + "slimtd'>" + res + "</td>";
             if ( m == 0 ) {
                 sz = sz + "</tr>"
                 if ( mrows == 3 ) {
                      // sz = sz + "<tr><td align='middle' colspan=30>" +  margsvl_label + "</td></tr>";
                      mrows = 0;
                 } else {
                      // sz = sz + "<tr><td align='middle' colspan=30>" +  margsvl_label + "</td></tr>";
                      // sz = sz + "<tr><td align='middle' colspan=30>" +  "-"  + "</td></tr>";
                 }
             }
        }
        if ( m != 0 ) sz = sz + "</tr>"
        this.append(sz);
        return this;
    };
}( jQuery ));


(function ( $ ) {
    $.fn.margsv = function() {
        var c = "\"";
        var sz = "";
        var f = "";
        var s = "";
        var n = arguments[0];
        var cs = 0;
        var m = 0;
        var mrows = 0;
        var id = "";
        var res = "";
        var re = /[0-9,a-z,A-Z,_-]+/
        var replre = /^.*[?]/
        var sortarray = [];
        for (var i = 1; i < arguments.length; i++) {
            sortarray[i-1] = arguments[i];
        }
        for (var i = 1; i < arguments.length; i++) {
             id  = arguments[i];
             m = i % n; 
             if ( m == 1 ) {
                 sz = sz + "<tr>"
                 mrows++
             }
             res = id.substring(0, 1);
             f = " topmiddle ";
             s = "";
             if ( res == " " ) {
                 res = id.substr(1);
                 f = " middleleft ";
                 cs = n-1;
                 s = " colspan=" + cs.toString() + " ";
             } else {
                 res = ytimg(arguments[i], "----");
             }
             f = " madmiddle ";
             sz = sz + "<td " + s + " class='" + f + "slimtd'>" + res + "</td>";
             if ( m == 0 ) {
                 sz = sz + "</tr>"
                 if ( mrows == 3 ) {
                      // sz = sz + "<tr><td align='middle' colspan=30>" +  margsvl_label + "</td></tr>";
                      mrows = 0;
                 } else {
                      // sz = sz + "<tr><td align='middle' colspan=30>" +  margsvl_label + "</td></tr>";
                      // sz = sz + "<tr><td align='middle' colspan=30>" +  "-"  + "</td></tr>";
                 }
             }
        }
        if ( m != 0 ) sz = sz + "</tr>"
        this.append(sz);
        return this;
    };
}( jQuery ));

(function ( $ ) {
    $.fn.video = function(id, desc) {
        this.append(ytimg(id, desc)).append("<br>");
        return this;
    };
}( jQuery ));
(function ( $ ) {
    $.fn.feed = function(feed) {
        this.FeedEk({
             FeedUrl: feed,
             MaxCount: 64,
             ShowDesc: true,
             ShowPubDate: true,
             DescCharacterLimit: 1600 
        });
        return this;
    };
}( jQuery ));


(function ( $ ) {
    $.fn.tune = function(cmd) {
         switch(cmd) {
         case "middle":
              this.css({align:middle});
              break;
         case "imgwidth50":
              this.css({width:50});
              break;
         case "imgwidth75":
              this.css({width:75});
              break;
         case "imgwidth100":
              this.css({width:100});
              break;
         case "imgwidth110":
              this.css({width:110});
              break;
         case "imgwidth120":
              this.css({width:120});
              break;
         case "imgwidth130":
              this.css({width:130});
              break;
         case "imgwidth140":
              this.css({width:140});
              break;
         case "imgwidth150":
              this.css({width:150});
              break;
         case "imgwidth160":
              this.css({width:160});
              break;
         case "imgwidth164":
              this.css({width:164});
              break;
         case "imgwidth170":
              this.css({width:170});
              break;
         case "imgwidth180":
              this.css({width:180});
              break;
         case "imgwidth200":
              this.css({width:200});
              break;
         case "imgwidth220":
              this.css({width:220});
              break;
         case "imgwidth240":
              this.css({width:240});
              break;
         case "imgwidth250":
              this.css({width:250});
              break;
         case "imgwidth260":
              this.css({width:260});
              break;
         case "imgwidth280":
              this.css({width:260});
              break;
         case "imgwidth275":
              this.css({width:275});
              break;
         case "imgwidth300":
              this.css({width:300});
              break;
         }
         return this;
    };
}( jQuery ));

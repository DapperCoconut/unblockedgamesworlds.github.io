var Board=function(a){this.scope=a;this.pieces=a.add.group();this.grid=a.add.group();this.board=["r1 n1 b1 q1 k1 b1 n1 r1".split(" "),"p1 p1 p1 p1 p1 p1 p1 p1".split(" "),[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],"p2 p2 p2 p2 p2 p2 p2 p2".split(" "),"r2 n2 b2 q2 k2 b2 n2 r2".split(" ")];this.generate(a);this.generate_pieces(a,this.board)};
Board.prototype.generate=function(a){for(var c=0;8>c;c++)for(var b=0;8>b;b++){var f=1;0===c%2?0===b%2&&(f=0):1===b%2&&(f=0);var e=a.add.sprite(_data.board.x+_data.size*b,_data.board.y+_data.size*c,"grid").setInteractive();e.setFrame(f);e.board=!0;e.pos={x:b,y:c};f=a.add.sprite(_data.board.x+_data.size*b,_data.board.y+_data.size*c,"highlight").setInteractive();f.pos={x:b,y:c};f.alpha=0;f.grid=!0;this.grid.add(f)}};
Board.prototype.generate_pieces=function(a,c){for(var b={p1:5,r1:4,n1:3,b1:2,q1:1,k1:0,p2:11,r2:10,n2:9,b2:8,q2:7,k2:6},f=0;8>f;f++)for(var e=0;8>e;e++){var h=c[f][e];if(0!=h){var d=a.add.sprite(_data.board.x+_data.size*e,_data.board.y+_data.size*f,"pieces");d.setFrame(b[h]);d.alpha=.7;d.piece=!0;d.pos={x:e,y:f};d.key=h;this.is_opponent(h)?d.type=1:d.type=2;this.pieces.add(d)}}};Board.prototype.get=function(a){if("grid"===a)return this.grid;if("board"===a)return this.board;if("pieces"===a)return this.pieces};
Board.prototype.is_opponent=function(a){for(var c=!1,b="p1 r1 n1 b1 q1 k1".split(" "),f=0;8>f;f++)if(a===b[f]){c=!0;break}return c};
Board.prototype.get_moves=function(a,c){var b;function f(a,b){if(0<=a&&8>a&&0<=b&&8>b)return!0}function e(a,b){var c=2,e=2;h.is_opponent(l)&&(c=1);h.is_opponent(h.board[b][a])&&(e=1);c!=e&&d.push({x:a,y:b,eat:!0})}var h=this,d=[];var k=c?c:this.board;var l=k[a.y][a.x];if("p2"===l){var g=b=-1;f(a.x+b,a.y+g)&&0!=k[a.y+g][a.x+b]&&e(a.x+b,a.y+g);b=1;g=-1;f(a.x+b,a.y+g)&&0!=k[a.y+g][a.x+b]&&e(a.x+b,a.y+g);f(a.x,a.y-1)&&0===k[a.y-1][a.x]&&(d.push({x:a.x,y:a.y-1}),6===a.y&&0===k[a.y-2][a.x]&&d.push({x:a.x,
y:a.y-2}))}else if("p1"===l)b=-1,g=1,f(a.x+b,a.y+g)&&0!=k[a.y+g][a.x+b]&&e(a.x+b,a.y+g),g=b=1,f(a.x+b,a.y+g)&&0!=k[a.y+g][a.x+b]&&e(a.x+b,a.y+g),f(a.x,a.y+1)&&0===k[a.y+1][a.x]&&(d.push({x:a.x,y:a.y+1}),1===a.y&&0===k[a.y+2][a.x]&&d.push({x:a.x,y:a.y+2}));else if("r1"===l||"r2"===l){for(b=1;8>b;b++)if(f(a.x,a.y-b))if(0===k[a.y-b][a.x])d.push({x:a.x,y:a.y-b});else{e(a.x,a.y-b);break}for(b=1;8>b;b++)if(f(a.x,a.y+b))if(0===k[a.y+b][a.x])d.push({x:a.x,y:a.y+b});else{e(a.x,a.y+b);break}for(b=1;8>b;b++)if(f(a.x-
b,a.y))if(0===k[a.y][a.x-b])d.push({x:a.x-b,y:a.y});else{e(a.x-b,a.y);break}for(b=1;8>b;b++)if(f(a.x+b,a.y))if(0===k[a.y][a.x+b])d.push({x:a.x+b,y:a.y});else{e(a.x+b,a.y);break}}else if("n1"===l||"n2"===l)b=-1,g=-2,f(a.x+b,a.y+g)&&(0===k[a.y+g][a.x+b]?d.push({x:a.x+b,y:a.y+g}):e(a.x+b,a.y+g)),b=1,g=-2,f(a.x+b,a.y+g)&&(0===k[a.y+g][a.x+b]?d.push({x:a.x+b,y:a.y+g}):e(a.x+b,a.y+g)),b=-2,g=-1,f(a.x+b,a.y+g)&&(0===k[a.y+g][a.x+b]?d.push({x:a.x+b,y:a.y+g}):e(a.x+b,a.y+g)),b=2,g=-1,f(a.x+b,a.y+g)&&(0===
k[a.y+g][a.x+b]?d.push({x:a.x+b,y:a.y+g}):e(a.x+b,a.y+g)),b=-1,g=2,f(a.x+b,a.y+g)&&(0===k[a.y+g][a.x+b]?d.push({x:a.x+b,y:a.y+g}):e(a.x+b,a.y+g)),b=1,g=2,f(a.x+b,a.y+g)&&(0===k[a.y+g][a.x+b]?d.push({x:a.x+b,y:a.y+g}):e(a.x+b,a.y+g)),b=-2,g=1,f(a.x+b,a.y+g)&&(0===k[a.y+g][a.x+b]?d.push({x:a.x+b,y:a.y+g}):e(a.x+b,a.y+g)),b=2,g=1,f(a.x+b,a.y+g)&&(0===k[a.y+g][a.x+b]?d.push({x:a.x+b,y:a.y+g}):e(a.x+b,a.y+g));else if("b1"===l||"b2"===l){for(b=1;8>b;b++)if(f(a.x-b,a.y-b))if(0===k[a.y-b][a.x-b])d.push({x:a.x-
b,y:a.y-b});else{e(a.x-b,a.y-b);break}for(b=1;8>b;b++)if(f(a.x+b,a.y-b))if(0===k[a.y-b][a.x+b])d.push({x:a.x+b,y:a.y-b});else{e(a.x+b,a.y-b);break}for(b=1;8>b;b++)if(f(a.x+b,a.y+b))if(0===k[a.y+b][a.x+b])d.push({x:a.x+b,y:a.y+b});else{e(a.x+b,a.y+b);break}for(b=1;8>b;b++)if(f(a.x-b,a.y+b))if(0===k[a.y+b][a.x-b])d.push({x:a.x-b,y:a.y+b});else{e(a.x-b,a.y+b);break}}else if("k1"===l||"k2"===l){if(b=0,g=-1,f(a.x+b,a.y+g)&&(0===k[a.y+g][a.x+b]?d.push({x:a.x+b,y:a.y+g}):e(a.x+b,a.y+g)),b=1,g=-1,f(a.x+b,
a.y+g)&&(0===k[a.y+g][a.x+b]?d.push({x:a.x+b,y:a.y+g}):e(a.x+b,a.y+g)),b=1,g=0,f(a.x+b,a.y+g)&&(0===k[a.y+g][a.x+b]?d.push({x:a.x+b,y:a.y+g}):e(a.x+b,a.y+g)),g=b=1,f(a.x+b,a.y+g)&&(0===k[a.y+g][a.x+b]?d.push({x:a.x+b,y:a.y+g}):e(a.x+b,a.y+g)),b=0,g=1,f(a.x+b,a.y+g)&&(0===k[a.y+g][a.x+b]?d.push({x:a.x+b,y:a.y+g}):e(a.x+b,a.y+g)),b=-1,g=1,f(a.x+b,a.y+g)&&(0===k[a.y+g][a.x+b]?d.push({x:a.x+b,y:a.y+g}):e(a.x+b,a.y+g)),b=-1,g=0,f(a.x+b,a.y+g)&&(0===k[a.y+g][a.x+b]?d.push({x:a.x+b,y:a.y+g}):e(a.x+b,a.y+
g)),g=b=-1,f(a.x+b,a.y+g)&&(0===k[a.y+g][a.x+b]?d.push({x:a.x+b,y:a.y+g}):e(a.x+b,a.y+g)),b="black","k2"===l&&(b="white"),castling[b].king){if(castling[b].rook_right){g=!0;for(var m=a.x+1;7>m;m++)if(0!=k[a.y][m]){g=!1;break}g&&d.push({x:6,y:a.y,castling:"rook_right"})}if(castling[b].rook_left){b=!0;for(g=a.x-1;0<g;g--)if(0!=k[a.y][g]){b=!1;break}b&&d.push({x:2,y:a.y,castling:"rook_left"})}}}else if("q1"===l||"q2"===l){for(b=1;8>b;b++)if(f(a.x,a.y-b))if(0===k[a.y-b][a.x])d.push({x:a.x,y:a.y-b});else{e(a.x,
a.y-b);break}for(b=1;8>b;b++)if(f(a.x,a.y+b))if(0===k[a.y+b][a.x])d.push({x:a.x,y:a.y+b});else{e(a.x,a.y+b);break}for(b=1;8>b;b++)if(f(a.x-b,a.y))if(0===k[a.y][a.x-b])d.push({x:a.x-b,y:a.y});else{e(a.x-b,a.y);break}for(b=1;8>b;b++)if(f(a.x+b,a.y))if(0===k[a.y][a.x+b])d.push({x:a.x+b,y:a.y});else{e(a.x+b,a.y);break}for(b=1;8>b;b++)if(f(a.x-b,a.y-b))if(0===k[a.y-b][a.x-b])d.push({x:a.x-b,y:a.y-b});else{e(a.x-b,a.y-b);break}for(b=1;8>b;b++)if(f(a.x+b,a.y-b))if(0===k[a.y-b][a.x+b])d.push({x:a.x+b,y:a.y-
b});else{e(a.x+b,a.y-b);break}for(b=1;8>b;b++)if(f(a.x+b,a.y+b))if(0===k[a.y+b][a.x+b])d.push({x:a.x+b,y:a.y+b});else{e(a.x+b,a.y+b);break}for(b=1;8>b;b++)if(f(a.x-b,a.y+b))if(0===k[a.y+b][a.x-b])d.push({x:a.x-b,y:a.y+b});else{e(a.x-b,a.y+b);break}}return d};
Board.prototype.check=function(a,c,b){var f=this.board;b&&(f=b);b=[];var e=1;if(c)var h=c;else a:for(c=0;8>c;c++)for(var d=0;8>d;d++)if(f[c][d]==="k"+a){h={x:d,y:c};break a}1===a&&(e=2);h&&(this.find_pieces("rook",h,e,b,f),this.find_pieces("pawn",h,e,b,f),this.find_pieces("knight",h,e,b,f),this.find_pieces("bishop",h,e,b,f),this.find_pieces("queen",h,e,b,f),this.find_pieces("king",h,e,b,f));return b};
Board.prototype.find_pieces=function(a,c,b,f,e){function h(a,b){if(0<=a&&8>a&&0<=b&&8>b)return!0}if("rook"===a){for(a=1;8>a;a++)if(h(c.x,c.y-a)&&0!=e[c.y-a][c.x]){e[c.y-a][c.x]==="r"+b&&f.push({x:c.x,y:c.y-a});break}for(a=1;8>a;a++)if(h(c.x,c.y+a)&&0!=e[c.y+a][c.x]){e[c.y+a][c.x]==="r"+b&&f.push({x:c.x,y:c.y+a});break}for(a=1;8>a;a++)if(h(c.x-a,c.y)&&0!=e[c.y][c.x-a]){e[c.y][c.x-a]==="r"+b&&f.push({x:c.x-a,y:c.y});break}for(a=1;8>a;a++)if(h(c.x+a,c.y)&&0!=e[c.y][c.x+a]){e[c.y][c.x+a]==="r"+b&&f.push({x:c.x+
a,y:c.y});break}}else if("pawn"===a){if(2===b){a=-1;var d=1;h(c.x+a,c.y+d)&&0!=e[c.y+d][c.x+a]&&e[c.y+d][c.x+a]==="p"+b&&f.push({x:c.x+a,y:c.y+d});d=a=1}else d=a=-1,h(c.x+a,c.y+d)&&0!=e[c.y+d][c.x+a]&&e[c.y+d][c.x+a]==="p"+b&&f.push({x:c.x+a,y:c.y+d}),a=1,d=-1;h(c.x+a,c.y+d)&&0!=e[c.y+d][c.x+a]&&e[c.y+d][c.x+a]==="p"+b&&f.push({x:c.x+a,y:c.y+d})}else if("knight"===a)a=-1,d=-2,h(c.x+a,c.y+d)&&0!=e[c.y+d][c.x+a]&&e[c.y+d][c.x+a]==="n"+b&&f.push({x:c.x+a,y:c.y+d}),a=1,d=-2,h(c.x+a,c.y+d)&&0!=e[c.y+d][c.x+
a]&&e[c.y+d][c.x+a]==="n"+b&&f.push({x:c.x+a,y:c.y+d}),a=-2,d=-1,h(c.x+a,c.y+d)&&0!=e[c.y+d][c.x+a]&&e[c.y+d][c.x+a]==="n"+b&&f.push({x:c.x+a,y:c.y+d}),a=2,d=-1,h(c.x+a,c.y+d)&&0!=e[c.y+d][c.x+a]&&e[c.y+d][c.x+a]==="n"+b&&f.push({x:c.x+a,y:c.y+d}),a=-1,d=2,h(c.x+a,c.y+d)&&0!=e[c.y+d][c.x+a]&&e[c.y+d][c.x+a]==="n"+b&&f.push({x:c.x+a,y:c.y+d}),a=1,d=2,h(c.x+a,c.y+d)&&0!=e[c.y+d][c.x+a]&&e[c.y+d][c.x+a]==="n"+b&&f.push({x:c.x+a,y:c.y+d}),a=-2,d=1,h(c.x+a,c.y+d)&&0!=e[c.y+d][c.x+a]&&e[c.y+d][c.x+a]===
"n"+b&&f.push({x:c.x+a,y:c.y+d}),a=2,d=1,h(c.x+a,c.y+d)&&0!=e[c.y+d][c.x+a]&&e[c.y+d][c.x+a]==="n"+b&&f.push({x:c.x+a,y:c.y+d});else if("bishop"===a){for(a=1;8>a;a++)if(h(c.x-a,c.y-a)&&0!=e[c.y-a][c.x-a]){e[c.y-a][c.x-a]==="b"+b&&f.push({x:c.x-a,y:c.y-a});break}for(a=1;8>a;a++)if(h(c.x+a,c.y-a)&&0!=e[c.y-a][c.x+a]){e[c.y-a][c.x+a]==="b"+b&&f.push({x:c.x+a,y:c.y-a});break}for(a=1;8>a;a++)if(h(c.x+a,c.y+a)&&0!=e[c.y+a][c.x+a]){e[c.y+a][c.x+a]==="b"+b&&f.push({x:c.x+a,y:c.y+a});break}for(a=1;8>a;a++)if(h(c.x-
a,c.y+a)&&0!=e[c.y+a][c.x-a]){e[c.y+a][c.x-a]==="b"+b&&f.push({x:c.x-a,y:c.y+a});break}}else if("queen"===a){for(a=1;8>a;a++)if(h(c.x,c.y-a)&&0!=e[c.y-a][c.x]){e[c.y-a][c.x]==="q"+b&&f.push({x:c.x,y:c.y-a});break}for(a=1;8>a;a++)if(h(c.x,c.y+a)&&0!=e[c.y+a][c.x]){e[c.y+a][c.x]==="q"+b&&f.push({x:c.x,y:c.y+a});break}for(a=1;8>a;a++)if(h(c.x-a,c.y)&&0!=e[c.y][c.x-a]){e[c.y][c.x-a]==="q"+b&&f.push({x:c.x-a,y:c.y});break}for(a=1;8>a;a++)if(h(c.x+a,c.y)&&0!=e[c.y][c.x+a]){e[c.y][c.x+a]==="q"+b&&f.push({x:c.x+
a,y:c.y});break}for(a=1;8>a;a++)if(h(c.x-a,c.y-a)&&0!=e[c.y-a][c.x-a]){e[c.y-a][c.x-a]==="q"+b&&f.push({x:c.x-a,y:c.y-a});break}for(a=1;8>a;a++)if(h(c.x+a,c.y-a)&&0!=e[c.y-a][c.x+a]){e[c.y-a][c.x+a]==="q"+b&&f.push({x:c.x+a,y:c.y-a});break}for(a=1;8>a;a++)if(h(c.x+a,c.y+a)&&0!=e[c.y+a][c.x+a]){e[c.y+a][c.x+a]==="q"+b&&f.push({x:c.x+a,y:c.y+a});break}for(a=1;8>a;a++)if(h(c.x-a,c.y+a)&&0!=e[c.y+a][c.x-a]){e[c.y+a][c.x-a]==="q"+b&&f.push({x:c.x-a,y:c.y+a});break}}else"king"===a&&(a=0,d=-1,h(c.x+a,c.y+
d)&&0!=e[c.y+d][c.x+a]&&e[c.y+d][c.x+a]==="k"+b&&f.push({x:c.x+a,y:c.y+d}),a=1,d=-1,h(c.x+a,c.y+d)&&0!=e[c.y+d][c.x+a]&&e[c.y+d][c.x+a]==="k"+b&&f.push({x:c.x+a,y:c.y+d}),a=1,d=0,h(c.x+a,c.y+d)&&0!=e[c.y+d][c.x+a]&&e[c.y+d][c.x+a]==="k"+b&&f.push({x:c.x+a,y:c.y+d}),d=a=1,h(c.x+a,c.y+d)&&0!=e[c.y+d][c.x+a]&&e[c.y+d][c.x+a]==="k"+b&&f.push({x:c.x+a,y:c.y+d}),a=0,d=1,h(c.x+a,c.y+d)&&0!=e[c.y+d][c.x+a]&&e[c.y+d][c.x+a]==="k"+b&&f.push({x:c.x+a,y:c.y+d}),a=-1,d=1,h(c.x+a,c.y+d)&&0!=e[c.y+d][c.x+a]&&e[c.y+
d][c.x+a]==="k"+b&&f.push({x:c.x+a,y:c.y+d}),a=-1,d=0,h(c.x+a,c.y+d)&&0!=e[c.y+d][c.x+a]&&e[c.y+d][c.x+a]==="k"+b&&f.push({x:c.x+a,y:c.y+d}),d=a=-1,h(c.x+a,c.y+d)&&0!=e[c.y+d][c.x+a]&&e[c.y+d][c.x+a]==="k"+b&&f.push({x:c.x+a,y:c.y+d}));return f};
Board.prototype.check_no_moves=function(a,c){var b=[];var f=c?c:this.board;for(var e=this.pieces.getLength(),h=this.pieces.getChildren(),d=0;d<e;d++){var k=h[d];if(k.type===a){var l=this.get_moves(k.pos,f);if(0<l.length)for(var g=l.length,m=0;m<g;m++)l[m].ori=k.pos,l[m].key=f[k.pos.y][k.pos.x],b.push(l[m])}}g=b.length;if(0!==g)for(e=0;e<g;e++)if(l=b[e],h=JSON.parse(JSON.stringify(f)),h[l.y][l.x]=l.key,h[l.ori.y][l.ori.x]=0,l.castling&&("rook_right"===l.castling?(h[l.y][5]=h[l.y][7],h[l.y][7]=0):(h[l.y][3]=
h[l.y][0],h[l.y][0]=0)),l=this.check(a,!1,h),0===l.length)return!1;return!0};
Board.prototype.check_checkmate=function(a){function c(a,b){if(0<=a&&8>a&&0<=b&&8>b)return!0}var b=[],f=!0,e=0;a:for(;8>e;e++)for(var h=0;8>h;h++)if(this.board[e][h]==="k"+a){var d=h;var k=e;break a}e=0;h=-1;c(d+e,k+h)&&0===this.board[k+h][d+e]&&b.push({x:d+e,y:k+h});e=1;h=-1;c(d+e,k+h)&&0===this.board[k+h][d+e]&&b.push({x:d+e,y:k+h});e=1;h=0;c(d+e,k+h)&&0===this.board[k+h][d+e]&&b.push({x:d+e,y:k+h});h=e=1;c(d+e,k+h)&&0===this.board[k+h][d+e]&&b.push({x:d+e,y:k+h});e=0;h=1;c(d+e,k+h)&&0===this.board[k+
h][d+e]&&b.push({x:d+e,y:k+h});e=-1;h=1;c(d+e,k+h)&&0===this.board[k+h][d+e]&&b.push({x:d+e,y:k+h});e=-1;h=0;c(d+e,k+h)&&0===this.board[k+h][d+e]&&b.push({x:d+e,y:k+h});h=e=-1;c(d+e,k+h)&&0===this.board[k+h][d+e]&&b.push({x:d+e,y:k+h});d=b.length;if(0<d)for(k=0;k<d;k++)if(0===this.check(a,b[k]).length){f=!1;break}return f};
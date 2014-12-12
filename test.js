var str = process.argv[2];
for(var i = 1; i < str.length; i++){
  if ((str ==="/yell") || (str === "(yell)"))
    var s = str.toString().toUpperCase();
    console.log(s)
}

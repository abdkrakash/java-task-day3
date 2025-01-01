var num = 7; y = 0, z = 1;

document.writeln(y);
document.writeln(z);
for (var x = 2; x < num; x++) {
  var next = y + z;
  document.writeln(next);
  y = z;
  z = next;
}

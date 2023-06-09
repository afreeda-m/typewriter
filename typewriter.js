const sentence = "Hello there from lighthouse labs!";

let timer = 0;

for (const char of sentence) {
  setTimeout(function() {
    process.stdout.write(char);
  }, timer);
  timer += 50;
}

setTimeout(function() {
  process.stdout.write("\n");
}, timer);

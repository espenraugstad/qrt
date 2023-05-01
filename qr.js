const Q = require("qrcode-svg");
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter url: ", (content)=>{
    readline.question("Enter padding: ", (padding) => {
        readline.question("Enter size: ", (size)=>{
            readline.question("Enter correction lvl (L/M/Q/H) ", (ecl) =>{
                readline.question("Enter name for output file: ", (filename)=>{
                    const code = new Q({
                        content: content,
                        padding: parseInt(padding),
                        width: parseInt(size),
                        height: parseInt(size),
                        color: "#000000",
                        background: "#ffffff",
                        ecl: ecl.toUpperCase()
                    });
                    code.save(filename, (err)=>{
                        if (err) throw(err);
                        console.log("Done");
                        process.exit();
                    });
                    
                });
            });
        });
    });
});


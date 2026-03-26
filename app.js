const path = require("node:path");
const fs = require("node:fs");
const EventEmitter = require("node:events");
const { callbackify } = require("node:util");
const emitter = new EventEmitter();
//1
function fileAndDir() {
  console.log({ File: __filename, Dir: __dirname });
}
fileAndDir();
//___________________________________________________________
//2.
function fileName(filePath) {
  return path.basename(filePath);
}

//___________________________________________________________
//3
function buildPath(obj) {
  return path.join(obj.dir, obj.name + obj.ext);
}
buildPath({ dir: "/folder", name: "app", ext: ".js" });
//___________________________________________________________
//4.
function fileExt(filePath) {
  return path.extname(filePath);
}
fileExt("/docs/readme.md");
//___________________________________________________________
//5.
function parsePath(filePath) {
  let parsed = path.parse(filePath);
  return {
    Name: parsed.name,
    Ext: parsed.ext,
  };
}
//___________________________________________________________
//6
function absolutePath(filePath) {
  return path.isAbsolute(filePath);
}
absolutePath("/home/user/file.txt");
//____________________________________________________________
7;
function joinPaths(arr) {
  return path.join(...arr);
}
joinPaths(["./dir", "app.js"]);
//___________________________________________________________
//8
function resolvePath(relativePath) {
  return path.resolve(relativePath);
}
//___________________________________________________________
//9.
function joinTwoPaths(p1, p2) {
  return path.join(p1, p2);
}
//___________________________________________________________
//10
function deleteFile(path) {
  fs.unlink(path, (err) => {
    if (err) {
      console.log("Error while deleting the file");
    } else console.log("File deleted successfully...");
  });
}
deleteFile("./hello.txt");
//___________________________________________________________
//11
function createFolder(folderPath) {
  try {
    fs.mkdirSync(folderPath);
    console.log("Success");
  } catch (err) {
    console.log("Error creating folder");
  }
}
//___________________________________________________________
//12;
emitter.on("start", () => {
  console.log("Welcome Event Triggered");
});
//___________________________________________________________
//13
emitter.on("login", (name) => {
  console.log(`User logged in : ${name}`);
});
emitter.emit("login", "Ahmed ");
//___________________________________________________________
//14
function readFileSync(filePath) {
  try {
    let data = fs.readFileSync(filePath, "utf8");
    console.log(data);
  } catch (err) {
    console.log("Error reading file");
  }
}
//___________________________________________________________

//15
function writeFileAsync(filePath, innerFile) {
  fs.writeFile(filePath, innerFile, (err) => {
    if (err) {
      console.log("Can't read file please make sure from the path ");
    } else {
      console.log("file written successfully");
    }
  });
}
writeFileAsync("./async.txt", "Async Save");
//___________________________________________________________
//16
function checkExists(filePath) {
  return fs.existsSync(filePath);
}
//___________________________________________________________
//17
function getOSInfo() {
  return {
    Platform: os.platform(),
    Arch: os.arch(),
  };
}

var fs = require("fs")
var p = require("path")
var mypath = "myfile/first.txt"
var base = p.basename(mypath)
var dir = p.dirname(mypath)
var newpath = dir + "/" + base
fs.mkdir(dir, (e) => {
    if (e) { throw e }
    else { console.log("Folder created") }
    fs.writeFile(newpath, "Path File System Module Example", (e) => {
        if (e) throw e
        else {
            console.log("File written")
            fs.copyFile(newpath, dir + "/second.txt", (e) => {
                if (e) throw e
                else {
                    console.log("File Copied")
                    fs.unlink(newpath, (e) => {
                        if (e) throw e
                        else {
                            console.log("Old File Deleted")
                            console.log("Completed")
                        }
                    })
                }
            })
        }
    })
})
// ShadowPlay main script

console.log("ShadowPlay platform loaded")

// Upload system

const uploadForm = document.getElementById("uploadForm")

if(uploadForm){

uploadForm.addEventListener("submit", function(e){

const fileInput = document.getElementById("fileUpload")

const file = fileInput.files[0]

if(!file){

alert("Please select a file to upload")

e.preventDefault()

return

}

// 10 GB limit
const maxSize = 10 * 1024 * 1024 * 1024

if(file.size > maxSize){

alert("Upload failed. File is larger than 10GB.")

e.preventDefault()

fileInput.value = ""

return

}

alert("Upload accepted! File is under 10GB.")

})

}


// Download tracking

const buttons = document.querySelectorAll("button")

buttons.forEach(button => {

button.addEventListener("click", function(){

console.log("Download started")

})

})


// Page loading animation

window.addEventListener("load", () => {

document.body.style.opacity = "1"

})
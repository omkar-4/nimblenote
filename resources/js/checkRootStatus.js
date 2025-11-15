async function setUserDetails() {
  let userdetails = await Neutralino.storage.setData("userDetails", JSON.stringify({ username: "TestValue" }));
}
setUserDetails();

async function getUserDetails() {
  let data = await Neutralino.storage.getData("userDetails");
  console.log(`Data: ${data}`);
}
getUserDetails();

async function setupRootFolder() {
  let entry = await Neutralino.os.showFolderDialog("Select Notes Folder", {
    defaultPath: "/home/my/directory/",
  });

  console.log("You have selected:", entry);
}

// setupRootFolder();

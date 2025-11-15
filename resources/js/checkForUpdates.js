try {

  let url = "https://raw.githubusercontent.com/omkar-4/nimblenote/main/update-manifest.json";
  let manifest = await Neutralino.updater.checkForUpdates(url);

  if (manifest.version != NL_APPVERSION) {
    await Neutralino.updater.install();
    await Neutralino.app.restartProcess();
  } else {
    console.log('You are using the latest version!');
  }
} catch (err) {
  // handle error
  console.error("error updating the app", err);
  console.error(err.code, err.message);
}
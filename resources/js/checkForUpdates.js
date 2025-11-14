try {
  let url = "";
  let manifest = await Neutralino.updater.checkForUpdates(url);
} catch (err) {
  // handle error
}
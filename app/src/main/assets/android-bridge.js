(() => {
 if (window.__scanifyAndroid) return;
 window.__scanifyAndroid = true;
 const save = async (url, name) => {
  try {
   const blob = await (await fetch(url)).blob();
   const reader = new FileReader();
   reader.onload = () => ScanifyAndroid.save(reader.result, name || 'Scanify-export', blob.type);
   reader.readAsDataURL(blob);
  } catch (error) { alert('Unable to save file: ' + error.message); }
 };
 const click = HTMLAnchorElement.prototype.click;
 HTMLAnchorElement.prototype.click = function () {
  if (this.download && /^(blob:|data:)/.test(this.href)) { void save(this.href, this.download); return; }
  return click.call(this);
 };
 document.addEventListener('click', event => {
  const anchor = event.target.closest?.('a[download]');
  if (anchor && /^(blob:|data:)/.test(anchor.href)) { event.preventDefault(); void save(anchor.href, anchor.download); }
 }, true);
})();

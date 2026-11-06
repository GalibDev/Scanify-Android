/* QPDF runs in an isolated, short-lived worker. Passwords never leave memory. */
importScripts('/pdf-runtime/qpdf.js');
self.onmessage=async({data})=>{
 try{
  const runtime=await Module({locateFile:()=>'/pdf-runtime/qpdf.wasm',noInitialRun:true,print:()=>{},printErr:()=>{}});
  runtime.FS.writeFile('/input.pdf',new Uint8Array(data.bytes));
  const args=data.mode==='protect'
   ? ['--encrypt',data.password,data.ownerPassword,'256','--','/input.pdf','/output.pdf']
   : ['--object-streams=generate','--compress-streams=y','--recompress-flate','--compression-level=9','/input.pdf','/output.pdf'];
  const code=runtime.callMain(args);
  if(code!==0&&code!==3)throw new Error('QPDF could not process this document.');
  const result=runtime.FS.readFile('/output.pdf');
  const bytes=new Uint8Array(result);
  self.postMessage({bytes:bytes.buffer},[bytes.buffer]);
 }catch{
  self.postMessage({error:'Local PDF processing failed. The file may be damaged, encrypted, or exceed this browser’s memory. Try a smaller unencrypted PDF.'});
 }
};

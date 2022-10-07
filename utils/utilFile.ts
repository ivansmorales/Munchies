/**
 * Function that download a file, the function will create a fake link that simulate user action download
 * @param {Blob} file File in blob type
 * @param {string} fileName File name
 * @returns {VoidFunction} void function
 */
export const downloadClick = (file: Blob, fileName: string) => {
  try {
    const anchor = document.createElementNS(
      "http://www.w3.org/1999/xhtml",
      "a"
    ) as HTMLAnchorElement;
    anchor.href = window.URL.createObjectURL(file);
    anchor.download = fileName;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    window.URL.revokeObjectURL(anchor.href);
  } catch (e) {}
};

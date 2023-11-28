/* unction returns a Promise that resolves or rejects based on the first download */
export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload])
    .then((result) => result);
}

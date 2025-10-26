export function getFileBase64(
  file: File
): Promise<string | ArrayBuffer | null> {
  return new Promise((response, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener("load", () => response(reader.result));
    reader.addEventListener("error", (error) => reject(error));
  });
}

export function getDelay(delay = 0) {
  return new Promise((response) => {
    setTimeout(response, delay);
  });
}
type StorageKey = "user:LI";

export function setStorage(key: StorageKey, item: any) {
  localStorage.setItem(key, JSON.stringify(item));
}

export function getStorage(key: StorageKey) {
  if (localStorage.getItem(key)) {
    return JSON.parse(localStorage.getItem(key) || "");
  }
}

export function removeStorage(key: StorageKey) {
  if (localStorage.getItem(key)) {
    localStorage.removeItem(key);
  }
}

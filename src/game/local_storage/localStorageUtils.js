// localStorageUtils.js

window.StorageUtils = (() => {

  function save(key, value) {
    try {
      const json = JSON.stringify(value)
      localStorage.setItem(key, json)
    } catch (e) {
      console.error(`🔴 Failed to save to localStorage (${key}):`, e)
    }
  }

  function load(key) {
    try {
      const json = localStorage.getItem(key)
      return json ? JSON.parse(json) : null
    } catch (e) {
      console.error(`🔴 Failed to load from localStorage (${key}):`, e)
      return null
    }
  }

  function remove(key) {
    try {
      localStorage.removeItem(key)
    } catch (e) {
      console.error(`🔴 Failed to remove from localStorage (${key}):`, e)
    }
  }

  function clearAll() {
    try {
      localStorage.clear()
    } catch (e) {
      console.error("🔴 Failed to clear localStorage:", e)
    }
  }

  return {
    save,
    load,
    remove,
    clearAll
  }

})()

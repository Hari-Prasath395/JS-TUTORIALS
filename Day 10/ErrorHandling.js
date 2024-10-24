function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Division by zero is not allowed");
    }
    return a / b;
  } catch (error) {
    console.error("Error" + error.message);
    return null;
  } finally {
    console.log("Execution Completed");
  }
}

divide(10, 0);

/**************************************************************************************** */
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5;
      if (success) {
        resolve("Data fetched successfully");
      } else {
        reject(new Error("Failed to fetch"));
      }
    }, 1000);
  });
}

fetchData()
  .then((data) => console.log(data))
  .catch((err) => {
    console.log("Error" + err);
  });

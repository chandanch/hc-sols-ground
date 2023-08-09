function pageCount(n, p) {
  // Write your code here
  let pageTracker = 0;
  let flipCount = 0;

  if (p > n) {
    return -1;
  }

  for (let i = 0; i <= p; i++) {
    if (i === 0) {
      pageTracker += 1;
      if (pageTracker === p) {
        break;
      }
    } else {
      pageTracker += 1;
      if (pageTracker === p) {
        break;
      } else {
        pageTracker += 1;
        if (pageTracker === p) {
          break;
        }
      }
    }
    flipCount += 1;

    console.log(`Page Tracker:${pageTracker}`, `Flip Count: ${flipCount}`);
  }

  return flipCount;
}

const res = pageCount(6, 10);
console.log(res);

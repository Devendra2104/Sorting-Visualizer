const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const insertionSort = (blocks) => {
  console.log(blocks);
  const dupBlocks = blocks.slice();
  const order = [];
  let n = dupBlocks.length;
  let vis = [];
  for (let i = 0; i < n; i++) {
    let j = i - 1;
    while (j >= 0 && dupBlocks[j] > dupBlocks[j + 1]) {
      swap(dupBlocks, j, j + 1);
      order.push([j, j + 1, null, null]); // Compare
      order.push([j, j + 1, dupBlocks.slice(), null]); // Swap
      j -= 1;
    }
    for (let i = 0; i < n; i++) {
      if (dupBlocks[i] === i + 1 && !vis.includes(i + 1)) {
        order.push([null, null, null, i]);
        vis.push(i + 1);
      }
    }
  }
  console.log(order);
  return order;
};

export default insertionSort;

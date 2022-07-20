const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const bubbleSort = (blocks) => {
  console.log(blocks);
  const dupBlocks = blocks.slice();
  const order = [];
  let n = dupBlocks.length;
  for (let i = 0; i < n; i++) {
    let j;
    for (j = 0; j < n - i - 1; j++) {
      order.push([j, j + 1, null, null]); // cur i , cur j , newList after swapping, sortedIndex
      if (dupBlocks[j] > dupBlocks[j + 1]) {
        swap(dupBlocks, j, j + 1);
        order.push([j, j + 1, dupBlocks.slice(), null]);
      }
    }
    order.push([null, null, null, j]);
  }
  console.log(order);
  return order;
};

export default bubbleSort;

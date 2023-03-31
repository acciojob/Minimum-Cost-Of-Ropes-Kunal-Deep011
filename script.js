
  //your code here
  
  
  function calculateMinCos(str) {
  // convert the input string to an array of integers
  const arr = str.split(',').map(Number);
  
  // create a min heap and insert all the ropes in it
  const heap = [...arr];
  heap.sort((a, b) => a - b);
  
  // keep adding the two smallest ropes until only one rope is left
  let cost = 0;
  while (heap.length > 1) {
    const x = heap.shift();
    const y = heap.shift();
    const z = x + y;
    cost += z;
    // insert the new rope back into the heap
    for (let i = 0; i < heap.length; i++) {
      if (heap[i] >= z) {
        heap.splice(i, 0, z);
        break;
      }
    }
    // if the new rope is longer than all ropes in the heap, push it to the end
    if (heap[heap.length - 1] < z) {
      heap.push(z);
    }
  }
  
  // display the minimum cost inside the result div
  document.getElementById('result').innerHTML = cost;
}



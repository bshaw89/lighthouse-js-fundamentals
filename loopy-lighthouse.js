for (let count = 100; count <= 200; count++) {
  let readout = count;
  if ((count % 3 === 0) && (count % 4 === 0)) {
    readout = "LoopyLighthouse";
  } else if (count % 3 === 0) {
    readout = "Loopy";
  } else if (count % 4 === 0) {
    readout = "Lighthouse"
  }
  console.log(readout);
}
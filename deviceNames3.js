function deviceNames(devices) {
  let numbered = [];
  devices.forEach((device) => {
    if (!numbered.includes(device)) {
      numbered.push(device);
    } else {
      let len = numbered.filter((item) => item.includes(device)).length;
      let newDev = device + len;
      numbered.push(newDev);
    }
  });
  return numbered;
}

let devices = ['TV', 'VCR', 'VCR', 'Nintendo', 'TV', 'VCR', 'TV', 'Nintendo'];
console.log(deviceNames(devices));

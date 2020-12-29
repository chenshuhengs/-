let imgs = {
  bgs: [],
  mgbs: [],
  txs: [],
};
// async function readImages(length, obj, url) {
//   for (let i = 1; i < length; i++) {
//     console.log(url + i + ".jpg");
//     obj.push(require(url + i + ".jpg"));
//   }
// }
// readImages(4, imgs.bgs, "../assets/images/color");
// readImages(4, imgs.mgbs, "../assets/images/mbg");
// readImages(9, imgs.txs, "../assets/images/tx");

imgs.bgs.push(require("../assets/images/color1.jpg"));
imgs.bgs.push(require("../assets/images/color2.jpg"));
imgs.bgs.push(require("../assets/images/color3.jpg"));
imgs.mgbs.push(require("../assets/images/mbg1.jpg"));
imgs.mgbs.push(require("../assets/images/mbg2.jpg"));
imgs.mgbs.push(require("../assets/images/mbg3.jpg"));
imgs.txs.push(require("../assets/images/tx1.jpg"));
imgs.txs.push(require("../assets/images/tx2.jpg"));
imgs.txs.push(require("../assets/images/tx3.jpg"));
imgs.txs.push(require("../assets/images/tx4.jpg"));
imgs.txs.push(require("../assets/images/tx5.jpg"));
imgs.txs.push(require("../assets/images/tx6.jpg"));
imgs.txs.push(require("../assets/images/tx7.jpg"));
imgs.txs.push(require("../assets/images/tx8.jpg"));
export default imgs;

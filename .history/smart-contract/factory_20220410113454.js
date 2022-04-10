import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x9D6234d9BD6068eB295df9B65189FAC98cB1aDcA",
  "0xc0eff434f835b6893fbb9cc3c5602ebcb71a856e"
);

export default instance;


// 0x9D6234d9BD6068eB295df9B65189FAC98cB1aDcA
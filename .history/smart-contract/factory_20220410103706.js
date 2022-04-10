import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x9D6234d9BD6068eB295df9B65189FAC98cB1aDcA"
);

export default instance;


0x9D6234d9BD6068eB295df9B65189FAC98cB1aDcA
import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xF8E443E5DB71c75d31CCB30e98F8815463608Eca"
);

export default instance;



require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");
require('hardhat-abi-exporter');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
// 定义所有的链:
    networks: {
        // 定义名为testnet的链:
        testnet: {
            // 配置私钥:
            accounts: ['2becb3e9daece5b116e96e63b911d50010bf480ac628ea968607638d09e79bcd'],
            // 配置为Polygon Testnet节点的PRC:
            url: "https://polygon-mumbai-bor.publicnode.com	"
        }
    },
    etherscan: {
        apiKey: 'I9XBUAQ5NKHZA98NAE6SJUYTVFSVSD9MGY'
        
      },
    // 使用ABI Exporter插件:
    abiExporter: {
        // 输出到abi目录:
        path: "./abi",
        clear: false,
        flat: true,
        pretty: false,
        // 编译时输出:
        runOnCompile: true,
    }
  
};

const hre = require("hardhat");

async function main() {
    // 合约工厂:
    const Card = await hre.ethers.getContractFactory("Card");
    // 部署:
    const card = await Card.deploy();
    console.log(`Card deployed to ${card.ethers}`);
    if (! card) {
        console.error("Failed to deploy the contract"+card.exitCode);
        return;
    }
    
    // 打印部署的地址:
    console.log(`Card deployed to ${card.target}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
const { ethers } = require("hardhat");

async function main() {
  console.log("🚀 Deploying RiskCertificateNFT contract...");

  // Get the contract factory
  const RiskCertificateNFT = await ethers.getContractFactory("RiskCertificateNFT");

  // Deploy the contract
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.provider.getBalance(deployer.address)).toString());

  const riskCertificateNFT = await RiskCertificateNFT.deploy(deployer.address);

  await riskCertificateNFT.waitForDeployment();

  const contractAddress = await riskCertificateNFT.getAddress();
  console.log("✅ RiskCertificateNFT deployed to:", contractAddress);

  // Save the contract address to a file
  const fs = require('fs');
  const path = require('path');
  
  const addressFile = path.join(__dirname, '..', 'lib', 'onchain', 'address.ts');
  const addressContent = `// Contract addresses for different networks
export const NFT_CONTRACT_ADDRESS = "${contractAddress}";

// Network configurations
export const NETWORKS = {
  paseo: {
    chainId: ${await deployer.provider.getNetwork().then(n => n.chainId)},
    rpcUrl: process.env.PASEO_RPC_URL || "",
    name: "Paseo",
    currency: "PASEO"
  }
} as const;

export type NetworkName = keyof typeof NETWORKS;
`;

  fs.writeFileSync(addressFile, addressContent);
  console.log("📝 Contract address saved to:", addressFile);

  // Verify the deployment
  console.log("🔍 Verifying deployment...");
  const name = await riskCertificateNFT.name();
  const symbol = await riskCertificateNFT.symbol();
  const owner = await riskCertificateNFT.owner();
  
  console.log("Contract name:", name);
  console.log("Contract symbol:", symbol);
  console.log("Contract owner:", owner);

  console.log("🎉 Deployment completed successfully!");
  console.log("\n📋 Next steps:");
  console.log("1. Update your .env.local with the contract address:");
  console.log(`   NEXT_PUBLIC_NFT_CONTRACT_ADDRESS=${contractAddress}`);
  console.log("2. Update your .env.local with the chain ID:");
  console.log(`   NEXT_PUBLIC_PASEO_CHAIN_ID=${await deployer.provider.getNetwork().then(n => n.chainId)}`);
  console.log("3. Test the contract on your test page!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("❌ Deployment failed:", error);
    process.exit(1);
  });

const hre = require("hardhat");

async function main() {
  const Upload = await hre.ethers.deployContract("Upload");

  await Upload.waitForDeployment();

  console.log(`Contract deployed to ${Upload.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// contract address : 0x5FbDB2315678afecb367f032d93F642f64180aa3

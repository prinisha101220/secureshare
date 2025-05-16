import Upload from "../artifacts/contracts/Upload.sol/Upload.json"
import { ethers } from "ethers"
import { useState, useEffect } from "react";
import FileUpload from "./FileUpload";
import Modal from "./Modal"
import Display from "./Display"
import "./Main.css"
function Main() {
    const [account, setAccount] = useState("");
    const [contract, setContract] = useState(null);
    const [provider, setProvider] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);

        const loadProvider = async () => {
            if (provider) {
                window.ethereum.on("chainChanged", () => {
                    window.location.reload();
                });

                window.ethereum.on("accountsChanged", () => {
                    window.location.reload();
                });
                await provider.send("eth_requestAccounts", []);
                const signer = provider.getSigner();
                const address = await signer.getAddress();
                setAccount(address);
                let contractAddress = "0x74f2A800FE2cF5677012b8DD0217381F14541273";
                //0x5FbDB2315678afecb367f032d93F642f64180aa3
                const contract = new ethers.Contract(
                    contractAddress,
                    Upload.abi,
                    signer
                );
                //console.log(contract);
                setContract(contract);
                setProvider(provider);
            } else {
                console.error("Metamask is not installed");
            }
        };
        provider && loadProvider();
    }, []);
    return (
        <div className="bg-white min-h-[92vh]">
            <div className="flex flex-row items-baseline justify-between p-6">
                {!modalOpen && (
                    <button
                        className="bg-[#10A37F] hover:bg-[#0e8c6f] text-white font-medium py-3 px-8 rounded shadow-md ml-[20%]"
                        onClick={() => setModalOpen(true)}
                    >
                        Share
                    </button>
                )}
                {modalOpen && (
                    <Modal setModalOpen={setModalOpen} contract={contract}></Modal>
                )}
                <p
                    className="text-white bg-[#10A37F] font-medium py-3 px-8 rounded shadow-lg mr-[20%]"
                >
                    {account ? account : "Connect Wallet"}
                </p>
            </div>
            <div className="mx-auto max-w-screen-xl px-4 py-0">
                <div className="py-0 border border-gray-300 rounded-lg shadow-lg">
                    <div className="mx-auto max-w-screen-xl px-4"></div>
                    <FileUpload
                        account={account}
                        provider={provider}
                        contract={contract}
                    />
                    <div className="text-center">
                        <Display contract={contract} account={account} />
                    </div>
                </div>
            </div>
        </div>
    );
    
}

export default Main


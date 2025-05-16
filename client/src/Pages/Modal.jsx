import { useEffect } from "react";
import "./Modal.css"
const Modal = ({ setModalOpen, contract }) => {
    const sharing = async () => {
        const address = document.querySelector(".address").value;
        await contract.allow(address);
        setModalOpen(false);
    };
    useEffect(() => {
        const accessList = async () => {
            const addressList = await contract.shareAccess();
            let select = document.querySelector("#selectNumber");
            const options = addressList;

            for (let i = 0; i < options.length; i++) {
                let opt = options[i];
                let e1 = document.createElement("option");
                e1.textContent = opt;
                e1.value = opt;
                select.appendChild(e1);
            }
        };
        contract && accessList();
    }, [contract]);
    return (
        <>
            <div className="modalBackground">
                <div className="modalContainer">
                    <div className="title text-xl font-bold mb-4">Share with</div>
                    <div className="flex flex-col justify-center items-center mb-4">
                        <input
                            type="text"
                            className="address"
                            placeholder="Enter Address"
                        />
                    </div>
                    <form id="myForm" className="mb-4">
                        <select id="selectNumber" className="address border border-gray-300 rounded px-2 py-1">
                            <option>People With Access</option>
                        </select>
                    </form>
                    <div className="footer">
                        <button
                            onClick={() => {
                                setModalOpen(false);
                            }}
                            id="cancelBtn"
                        >
                            Cancel
                        </button>
                        <button onClick={() => sharing()} className="shareBtn">
                            Share
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
    
};
export default Modal;
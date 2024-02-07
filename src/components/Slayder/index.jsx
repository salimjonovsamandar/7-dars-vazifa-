import './index.css'
import Card from "../Card";
import { useState } from "react";

export default function Slayder() {
    const [translate, setTranslate] = useState(true)
    const [move, setMove] = useState(0)
    const [modal, setModal] = useState(false)
    const [opasity, setOpasity] = useState(false)

    function hendleClick() {
        if (move < 0) {
            setTranslate(false)
            setMove(move + 33.33333333333333)
        }
    }
    function hendleClickReset() {
        if (move >= -66.66666666666666) {
            setMove(move != 0 ? move - 33.33333333333333 : 0 - 33.33333333333333)
        }
    }
    const styles = {
        transitionDuration: `1s`,
        transform: `translateX(${move}%)`,
        display: "flex",
        width: "1020px",
        gap: "20px",
    }

    const all = {
        display: `flex`,
        width: `1020px`,
        gap: `20px`,
    }

    const opasityStyle = {
        opasity: "0.3",
        backgrounColor: "red"
    }

    function closeModal() {
        setModal(false)
        setOpasity(true)
    }
    return (
        <>
            {modal && (
                <>
                    <div className="modal">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quasi consequatur sit itaque voluptates nostrum repudiandae beatae repellendus, tempore eaque exercitationem, enim quibusdam autem blanditiis!</p>
                        <button onClick={closeModal}>x</button>
                    </div>
                </>
            )}
            <div className="slayder" style={opasity ? opasityStyle : {}}>
                <div className="wrapper">
                    <div style={translate ? all : styles}>
                        <Card backOpasity={setOpasity} modal={setModal} text="Card 1"></Card>
                        <Card backOpasity={setOpasity} modal={setModal} text="Card 2"></Card>
                        <Card backOpasity={setOpasity} modal={setModal} text="Card 3"></Card>
                        <Card backOpasity={setOpasity} modal={setModal} text="Card 4"></Card>
                        <Card backOpasity={setOpasity} modal={setModal} text="Card 5"></Card>
                        <Card backOpasity={setOpasity} modal={setModal} text="Card 6"></Card>
                    </div>
                </div>
                <div className="set">
                    <button onClick={hendleClick}  >QAYTISH</button>
                    <button onClick={hendleClickReset}>O'TISH</button>
                </div>
            </div>
        </>
    );
}

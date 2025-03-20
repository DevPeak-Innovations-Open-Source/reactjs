import { useState } from "react";
import Image from "next/image"
import meghapic from "../../../image/megha-clickingphoto.jpeg"

function chaimegha() {
    const [open, setOpen] = useState<boolean>(false);
    return(
        <div className="flex flex-col">
            Megha ki chai
            {open ? "Open" : "Close"}
            <button onClick={()=> setOpen(!open)}>Click here</button>
            <Image src={meghapic} />
        </div>
    )
}

export default chaimegha;
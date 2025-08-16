import React from "react";
import { IoKeySharp,IoSearchOutline} from "react-icons/io5";
import { LuLink,LuFolderOpen } from "react-icons/lu";
import { AiOutlineCompass } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";

function Navicons() {
  return <section>
     <div className="text-xl cursor-pointer flex items-center justify-center gap-4 pr-4">
     <IoKeySharp />
     <LuLink />
     <LuFolderOpen />
     <IoSearchOutline />
     <AiOutlineCompass />
     <FiMenu />
     <p>
      admin
     </p>
      </div>
  </section>;
}

export default Navicons;

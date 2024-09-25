import { BsPersonAdd } from "react-icons/bs";
import { CiWallet } from "react-icons/ci";
import { HiOutlinePencil } from "react-icons/hi";
import { ImHome2 } from "react-icons/im";
import { PiNoteDuotone, PiTreeStructure } from "react-icons/pi";

export const categoryItems = [
  {
    bg: "#ca1c40",
    color: "white",
    icon: <BsPersonAdd color={"white"} size={40} />,
    header: "ADD",
    description: "Beneficiaries",
  },
  {
    bg: "white",
    color: "#2b6cb3",
    icon: <ImHome2 color={"#2b6cb3"} size={40} />,
    header: "ADD",
    description: "Asset",
  },
  {
    bg: "white",
    color: "#2b6cb3",
    icon: <CiWallet color={"#2b6cb3"} size={40} />,
    header: "ADD",
    description: "Liability",
  },
  {
    bg: "white",
    color: "#2b6cb3",
    icon: <PiTreeStructure color={"#2b6cb3"} size={40} />,
    header: "Create",
    description: "Links",
  },
  {
    bg: "white",
    color: "#2b6cb3",
    icon: <HiOutlinePencil color={"#2b6cb3"} size={40} />,
    header: "ADD",
    description: "Signatories",
  },
  {
    bg: "white",
    color: "#2b6cb3",
    icon: <PiNoteDuotone color={"#2b6cb3"} size={40} />,
    header: "0",
    description: "Will Generation",
  },
];

import { TbSmartHome } from "react-icons/tb";
import { FaPeopleGroup } from "react-icons/fa6";
import { CiWallet } from "react-icons/ci";
import { CgFileDocument } from "react-icons/cg"

import { IconType } from "react-icons";

interface Header {
    id: number;
    title: string;
    icon: IconType;
    alt: string;
}

export const header: Header[] = [
    {
        id: 1,
        title: 'Dashboard',
        icon: TbSmartHome,
        alt: 'dashboard_icon'
    },
    {
        id: 2,
        title: 'Organization',
        icon: FaPeopleGroup,
        alt: 'organization_icon'
    },
    {
        id: 3,
        title: 'Payment',
        icon: CiWallet,
        alt: 'payment_icon'
    },
    {
        id: 4,
        title: 'Transaction history',
        icon: CgFileDocument,
        alt: 'transaction-history_icon '
    }
]
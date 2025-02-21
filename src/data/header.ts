import { dashboard_icon, org, payment_icon, transact_icon } from "@/assets/icons";

interface Header {
    id: number;
    title: string;
    icon: string;
    alt: string;
}

export const header: Header[] = [
    {
        id: 1,
        title: 'Dashboard',
        icon: dashboard_icon,
        alt: 'dashboard_icon'
    },
    {
        id: 2,
        title: 'Organization',
        icon: org,
        alt: 'organization_icon'
    },
    {
        id: 3,
        title: 'Payment',
        icon: payment_icon,
        alt: 'payment_icon'
    },
    {
        id: 4,
        title: 'Transaction history',
        icon: transact_icon,
        alt: 'transaction-history_icon '
    }
]
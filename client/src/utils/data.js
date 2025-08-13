import { HandCoins, LayoutDashboard, LogOut, Wallet2, } from 'lucide-react'

export const SIDE_MENU_DATA = [
  {
    id: '01',
    label: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard"
  },
  
  {
    id: '02',
    label: "Income",
    icon: Wallet2,
    path: "/income"
  },
  {
    id: '03',
    label: "Expense",
    icon: HandCoins,
    path: "/expense"
  },
  {
    id: '06',
    label: "Logout",
    icon: LogOut,
    path: "/logout"
  },
];
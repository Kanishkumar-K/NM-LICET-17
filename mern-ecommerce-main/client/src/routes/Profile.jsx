import MyAccount from "../../UI/Account/MyAccount/MyAccount";
import ManageAccount from "../../UI/Account/ManageAccount/ManageAccount";
import { TabTitle } from "../../../utils/General";

export const Profile = () => {

    TabTitle("Team 17")

    return ( 
        <MyAccount />
     );
}

export const AccountManager = () => {

    TabTitle("Nan Mudhalvan - Team 17")

    return (
        <ManageAccount />
    );
}
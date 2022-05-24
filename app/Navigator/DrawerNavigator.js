import React from "react"
import { createDrawerNavigator } from '@react-navigation/drawer';
import WelcomeScreen from "../screens/WelcomeStack/welcomeScreen"
import { AccountScreenNavigator, AdminStackNavigator } from "./ScreenNavigator"
import { AuthContext } from "../screens/Context/AuthContext";


const Drawer = createDrawerNavigator()
export const DrawerNavigator  = ()=>{
   const {user} = React.useContext(AuthContext)
    return (
       <Drawer.Navigator>
             {user.staff ? null : <Drawer.Screen name="Student" component={WelcomeScreen}></Drawer.Screen>}
            {user?.staff ?<Drawer.Screen name="staff" component={AdminStackNavigator}></Drawer.Screen>:null}
            <Drawer.Screen name="Profile" component={AccountScreenNavigator}></Drawer.Screen>
     </Drawer.Navigator>
        
    )
}
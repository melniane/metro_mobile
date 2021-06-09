import * as React from 'react';
import Ganza from "../screens/Ganza";
import Description from "../screens/Description";
import Story from "../screens/Story";
import Geography from "../screens/Geography";
import Facts from "../screens/Facts";
import { BottomTabParamList } from '../types';
import {createDrawerNavigator} from "@react-navigation/drawer";
import Dairy from "../screens/Dairy";

const Drawer = createDrawerNavigator<BottomTabParamList>();

export default function DrawerNavigator() {
    return (
    <Drawer.Navigator initialRouteName="ГАНЗА" drawerStyle={{backgroundColor: '#BCA18F'}}>
      <Drawer.Screen
        name="ГАНЗА"
        component={Ganza}
      />
      <Drawer.Screen
        name="ОПИС"
        component={Description}
      />
      <Drawer.Screen
        name="ІСТОРІЯ"
        component={Story}
      />
      <Drawer.Screen
        name="ГЕОГРАФІЯ"
        component={Geography}
      />
      <Drawer.Screen
        name="ЦІКАВІ ФАКТИ"
        component={Facts}
      />
      <Drawer.Screen
        name="ФОТО ЩОДЕННИК"
        component={Dairy}
      />
    </Drawer.Navigator>
  );
}

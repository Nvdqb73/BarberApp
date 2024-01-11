import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
//Config screens
import config from '~/config';

// Component
import AccountLayout from '~/layouts/AccountLayout/AccountLayout';
import HomeLayout from '~/layouts/HomeLayout';
import OrderLayout from '~/layouts/OrderLayout';
import BarberLayout from '~/layouts/BarberLayout';
import BuyLayout from '~/layouts/BuyLayout';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function NavigationTable() {
    return (
        <Tab.Navigator initialRouteName={config.screens.homeLayout} screenOptions={{ headerShown: false }}>
            <Tab.Screen name={config.screens.homeLayout} component={HomeLayout} />
            <Tab.Screen name={config.screens.account} component={AccountLayout} />
        </Tab.Navigator>
    );
}

function NavigationDrawer() {
    return (
        <Drawer.Navigator initialRouteName={config.screens.homeLayout} screenOptions={{ headerShown: false }}>
            <Drawer.Screen name={config.screens.homeLayout} component={HomeLayout} />
        </Drawer.Navigator>
    );
}

const publicNavigators = [
    { name: config.screens.navigationDrawer, component: NavigationDrawer },
    { name: config.screens.barberLayout, component: BarberLayout },
    { name: config.screens.orderLayout, component: OrderLayout },
    { name: config.screens.buyLayout, component: BuyLayout },
    { name: config.screens.account, component: AccountLayout },
];

const privateNavigators = [];

export { publicNavigators, privateNavigators };

//Config screens
import config from '~/config';

// Component
import Home from '~/screens/Home';
import AccountLayout from '~/layouts/AccountLayout/AccountLayout';

const publicNavigators = [
    { name: config.screens.account, component: AccountLayout },
    { name: config.screens.home, component: Home },
];

const privateNavigators = [];

export { publicNavigators, privateNavigators };

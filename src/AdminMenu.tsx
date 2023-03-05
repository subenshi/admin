import { Menu } from 'react-admin';
import TroubleshootIcon from '@mui/icons-material/Troubleshoot';

export const AdminMenu = () => (
    <Menu>
        <Menu.DashboardItem />
        <Menu.Item to="/tracing" primaryText="Tracing" leftIcon={<TroubleshootIcon />}/>
        <Menu.ResourceItem name="users" />
    </Menu>
);
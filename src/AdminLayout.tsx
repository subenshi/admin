// in src/Layout.js
import { Layout } from 'react-admin';

import { AdminMenu } from './AdminMenu';

export const AdminLayout = (props:any) => <Layout {...props} menu={AdminMenu} />;
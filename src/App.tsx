// in src/App.tsx
import { Admin, Resource, ListGuesser, CustomRoutes } from "react-admin";
import { Route } from "react-router-dom";
import jsonServerProvider from "ra-data-json-server";

import { AdminLayout } from './AdminLayout';

import { Dashboard } from "./dashboard/Dashboard";
import { Tracing } from "./tracing/Tracing";

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
  <Admin layout={AdminLayout} dashboard={Dashboard} dataProvider={dataProvider} >
    <Resource name="users" list={ListGuesser} />
    <CustomRoutes>
      <Route path="/tracing" element={<Tracing />} />
    </CustomRoutes>
  </Admin>
);

export default App;
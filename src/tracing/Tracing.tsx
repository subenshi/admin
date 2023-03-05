// in src/Tracing.tsx
import { Card, CardContent, CardHeader, Grid } from "@mui/material";
import { Create, Form, TextInput, RefreshButton } from 'react-admin';

export const Tracing = () => (
  <Card>
    <CardHeader title="Tracing" />
    <CardContent>
      <Form>
        <Grid container>
            <Grid item xs={12}>
                <TextInput source="title" fullWidth />
            </Grid>
            <Grid item xs={12}>
                <RefreshButton />
            </Grid>
        </Grid>
      </Form>
    </CardContent>
  </Card>
);
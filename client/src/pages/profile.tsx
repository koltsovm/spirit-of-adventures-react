import { Box, Tab, Tabs } from "@material-ui/core";

const AccountPage = () => {
  return (
    <Box>
      <Tabs>
        <Tab label='Аккаунт'/>
        <Tab label='Мои приключения'/>
      </Tabs>
    </Box>
  )
}

export default AccountPage;

import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import MarvelContexts from '../contexts/MarvelContexts';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useHistory } from 'react-router';
import { auth } from '../firebase';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const BasicTabs  = () => {
  const [value, setValue] = React.useState(0);
  const [user , loading ] = useAuthState(auth)
  const history = useHistory();

  React.useEffect(() => { 
    console.log({ user })
      if(loading) { 
          // loading effect
          return;
      }

      if(!user) history.replace("/signin")
  }, [user, loading , history ]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Marvel Comics" {...a11yProps(0)} />
          <Tab label="Dark horse comics" {...a11yProps(1)} />
          <Tab label="DC Comics" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <MarvelContexts/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <MarvelContexts publisher={'Dark Horse Comics'} /> 
      </TabPanel>
      <TabPanel value={value} index={2}>
      <MarvelContexts publisher={'DC Comics'} /> 
      </TabPanel>
    </Box>
  );
}

export default BasicTabs;
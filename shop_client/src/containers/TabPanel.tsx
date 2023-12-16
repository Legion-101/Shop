import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { CreateShop } from '../Panels/CreateShop';
import { Shops } from '../Panels/Shops';
import { CreateProduct } from '../Panels/CreateProduct';
import { AddProductInShop } from '../Panels/AddProductInShop';
import { IShop } from '../types';
import { GetProductWithCheapProduct } from '../Panels/GetShopWithCheapProduct';
import { GetListProductsByPrice } from '../Panels/GetListProductsByPrice';
import { BuyProducts } from '../Panels/BuyProducts';
import { GetShopWithListCheapProducts } from '../Panels/GetShopWithListCheapProducts';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      style={{flexGrow: 1, overflowY: "auto"}}
    >
      {value === index && (
        <Box sx={{ m: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs({value, setValue}: {value: number, setValue:(val: number)=>void}) {
//   const [value, setValue] = React.useState(0);
  // const [selectedShop, setSelectedShop] = useState<IShop|null>(null);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: "100vh" }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Магазины" {...a11yProps(0)} />
        <Tab label="Создать магазин" {...a11yProps(1)} />
        <Tab label="Создать товар" {...a11yProps(2)} />
        <Tab label="Завезти партию товаров в магазин" {...a11yProps(3)} />
        <Tab label="Найти магазин, в котором товар самый дешевый" {...a11yProps(4)} />
        <Tab label="Получить список товаров, которые можно купить на конкретную сумму в магазине" {...a11yProps(5)} />
        <Tab label="Купить партию товаров" {...a11yProps(6)} />
        <Tab label="Найти, в каком магазине партия товаров (набор товар-количество) имеет наименьшую сумму" {...a11yProps(7)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Shops />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CreateShop />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <CreateProduct />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <AddProductInShop />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <GetProductWithCheapProduct />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <GetListProductsByPrice />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <BuyProducts />
      </TabPanel>
      <TabPanel value={value} index={7}>
        <GetShopWithListCheapProducts />
      </TabPanel>
      
    </Box>
  );
}
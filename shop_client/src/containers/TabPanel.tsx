import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { CreateShop } from '../Panels/CreateShop';
import { Shops } from '../Panels/Shops';
import { CreateProduct } from '../Panels/CreateProduct';
import { AddProductInShop } from '../Panels/AddProductInShop';
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

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: "100vh", flexDirection: 'column' }}
    >
      <Tabs
        variant="scrollable"
        scrollButtons="auto"
        value={value}
        onChange={handleChange}
        // sx={{ borderRight: 1, borderColor: 'divider' }}
        sx={{color: 'white'}}
      >
        <Tab label="Показать магазины" {...a11yProps(0)} />
        <Tab label="Создать магазин" {...a11yProps(1)} />
        <Tab label="Создать товар" {...a11yProps(2)} />
        <Tab label="Добавить товары в магазин" {...a11yProps(3)} />
        <Tab label="Найти самый дешевый товар в магазине" {...a11yProps(4)} />
        <Tab label="Поиск товаров на сумму" {...a11yProps(5)} />
        <Tab label="Купить партию товаров" {...a11yProps(6)} />
        <Tab label="Найти наименьшую сумму товаров" {...a11yProps(7)} />
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
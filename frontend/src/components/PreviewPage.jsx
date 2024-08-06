import React, { useState } from 'react';
import { Box, Typography, Stack, TextField, FormControl, Select, MenuItem, Button } from '@mui/material';

const LLMApiComparisonTool = () => {
  const [tokenInput, setTokenInput] = useState('');
  const [tokenOutput, setTokenOutput] = useState('');
  const [tokenUnit, setTokenUnit] = useState('K');
  const [listItems, setListItems] = useState([
    { name: '', currency: 'CNY', chargeAmount: '', inputPrice: '', outputPrice: '', tokenUnit: 'K', isEditing: false },
    { name: '', currency: 'CNY', chargeAmount: '', inputPrice: '', outputPrice: '', tokenUnit: 'K', isEditing: false },
  ]);

  const handleAddItem = () => {
    setListItems([...listItems, { name: '', currency: 'CNY', chargeAmount: '', inputPrice: '', outputPrice: '', tokenUnit: 'K', isEditing: false }]);
  };

  const handleRemoveItem = (index) => {
    const newList = [...listItems];
    newList.splice(index, 1);
    setListItems(newList);
  };

  const handleInputChange = (index, field, value) => {
    const newList = [...listItems];
    newList[index][field] = value;
    setListItems(newList);
  };

  const handleTokenInputChange = (event) => {
    setTokenInput(event.target.value);
  };

  const handleTokenOutputChange = (event) => {
    setTokenOutput(event.target.value);
  };

  const handleTokenUnitChange = (event) => {
    setTokenUnit(event.target.value);
  };

  return (
    <Box sx={{ p: 4, backgroundColor: '#f5f5f5', height: '100%' }}>
      <Stack alignItems="center" spacing={2}>
        <Typography variant="h5">LLM API 价格比较器</Typography>
        <Typography variant="body1">今日汇率 (USD/CNY): 7.1520</Typography>
        <Typography variant="body2">GitHub @CookSleep</Typography>
      </Stack>
      <Stack direction="row" spacing={2} mt={4}>
        <FormControl>
          <TextField
            label="输入token数:"
            value={tokenInput}
            onChange={handleTokenInputChange}
          />
        </FormControl>
        <FormControl>
          <TextField
            label="输出token数:"
            value={tokenOutput}
            onChange={handleTokenOutputChange}
          />
        </FormControl>
        <FormControl>
          <Select value={tokenUnit} onChange={handleTokenUnitChange}>
            <MenuItem value="K">K</MenuItem>
          </Select>
        </FormControl>
      </Stack>
      <Typography variant="body2" mt={2}>
        • 使用提点方向键可以快速在输入、选择框间移动
        <br />
        • 使用键盘浏览移可以快速切换下拉选项
        <br />
        • 按 Enter 键可以选择值、下拉菜单项、按钮交互
      </Typography>
      <Stack direction="row" spacing={2} mt={4}>
        <Typography variant="body1">服务商名称</Typography>
        <Typography variant="body1">充值金额</Typography>
        <Typography variant="body1">充值货币</Typography>
        <Typography variant="body1">到账余额</Typography>
        <Typography variant="body1">输入价格</Typography>
        <Typography variant="body1">输出价格</Typography>
        <Typography variant="body1">TOKEN单位</Typography>
        <Typography variant="body1">操作</Typography>
      </Stack>
      {listItems.map((item, index) => (
        <Stack key={index} direction="row" spacing={2} mt={2} alignItems="center">
          <TextField
            value={item.name}
            onChange={(event) => handleInputChange(index, 'name', event.target.value)}
          />
          <TextField
            value={item.chargeAmount}
            onChange={(event) => handleInputChange(index, 'chargeAmount', event.target.value)}
          />
          <FormControl>
            <Select
              value={item.currency}
              onChange={(event) => handleInputChange(index, 'currency', event.target.value)}
            >
              <MenuItem value="CNY">CNY</MenuItem>
            </Select>
          </FormControl>
          <TextField
            value={item.chargeAmount}
            onChange={(event) => handleInputChange(index, 'chargeAmount', event.target.value)}
          />
          <TextField
            value={item.inputPrice}
            onChange={(event) => handleInputChange(index, 'inputPrice', event.target.value)}
          />
          <TextField
            value={item.outputPrice}
            onChange={(event) => handleInputChange(index, 'outputPrice', event.target.value)}
          />
          <FormControl>
            <Select
              value={item.tokenUnit}
              onChange={(event) => handleInputChange(index, 'tokenUnit', event.target.value)}
            >
              <MenuItem value="K">K</MenuItem>
            </Select>
          </FormControl>
          <Button onClick={() => handleRemoveItem(index)}>
            <img src="https://placehold.co/24x24" alt="Remove Item" />
          </Button>
        </Stack>
      ))}
      <Button variant="contained" onClick={handleAddItem} mt={2}>
        <img src="https://placehold.co/24x24" alt="Add Item" />
      </Button>
    </Box>
  );
};

export default LLMApiComparisonTool;
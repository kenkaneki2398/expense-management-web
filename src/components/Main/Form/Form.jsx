import React from "react";
import {
  TextField,
  Typography,
  Grid,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";

import useStyles from "./styles";

const Form = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography align="center" variant="subtitle2" gutterBottom>
          ...
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Kiểu</InputLabel>
          <Select>
            <MenuItem value="Income">Thu nhập</MenuItem>
            <MenuItem value="Expense">Chi tiêu</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Loại</InputLabel>
          <Select>
            <MenuItem value="business">Kinh doanh</MenuItem>
            <MenuItem value="salary">Lương</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <TextField type="number" label="Amount" fullWidth />
      </Grid>
      <Grid item xs={6}>
        <TextField type="date" label="Date" fullWidth />
      </Grid>
      <Button
        className={classes.button}
        variant="outlined"
        color="primary"
        fullWidth
      >
        Tạo
      </Button>
    </Grid>
  );
};

export default Form;

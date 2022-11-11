import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Layout from "../Layout/Layout";

const Home = () => {
  /* TODO : pasar a componente separado */

  const [anios, setAnios] = React.useState(2022);

  const handleChange = (event) => {
    setAnios(event.target.value);
  };

  let currentYear = new Date().getFullYear();

  return (
    <Layout>
      <div>
        <Box sx={{ minWidth: 120 }}>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Anios</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={anios}
              label="Anios"
              onChange={handleChange}
            >
              <MenuItem value={currentYear - 1}>{currentYear - 1}</MenuItem>
              <MenuItem value={currentYear}>{currentYear}</MenuItem>
              <MenuItem value={currentYear + 1}>{currentYear + 1}</MenuItem>
              <MenuItem value={currentYear + 2}>{currentYear + 2}</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
    </Layout>
  );
};

export default Home;

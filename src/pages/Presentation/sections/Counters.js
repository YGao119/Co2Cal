/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components

import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";

function Counters() {
  return (
    <MKBox component="section" py={3}>
      <Container>
        <Grid container item xs={12} lg={9} sx={{ mx: "auto" }}>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              count={36.8}
              suffix=" Billion Tons"
              title="Global CO2 Emissions"
              description="Global energy-related CO2 emissions grew in 2022 by 0.9%, or 321 million tons, reaching a new high of more than 36.8 billion tons"
            />
          </Grid>
          <Grid item xs={12} md={4} display="flex">
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, mx: 0 }} />
            <DefaultCounterCard
              count={16}
              suffix=" Tons"
              title="Per person in the US"
              description="The average carbon footprint for a person in the United States is 16 tons, one of the highest rates in the world. Globally, the average carbon footprint is closer to 4 tons."
            />
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, ml: 0 }} />
          </Grid>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              count={2.28}
              suffix=" Times"
              title="faster in global warming"
              description="The combined land and ocean temperature are increasing at a rate of 0.32 °F per decade, more than twice as fast as around 1880."
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Counters;

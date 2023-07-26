import { Grid, Typography } from "@mui/material";
import ProductListitem from "./ProductListItem";
import ProductListItem from "./ProductListItem";

type Props = {};

const ProductList = (props: Props) => {
  return (
    <div>
      <Typography
        variant="h4"
        component={"h1"}
        sx={{
          marginTop: "30px",
          textTransform: "uppercase",
        }}
        align="center"
      >
        Product List
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <ProductListItem
            title="iPhone 13 Pro"
            description="This is iPhone 14 Pro"
            type="phone"
            capacity="64"
            price={1000}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ProductListItem
            title="iPhone 14 Pro"
            description="This is iPhone 14 Pro"
            type="phone"
            capacity="64"
            price={1000}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ProductListItem
            title="iPhone 15 Pro"
            description="This is iPhone 14 Pro"
            type="phone"
            capacity="64"
            price={1000}
          />
        </Grid>
      </Grid>
    </div>
  );
};
export default ProductList;

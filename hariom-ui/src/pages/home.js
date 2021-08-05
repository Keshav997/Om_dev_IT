import { Layout, ClientService } from "../layout/index";
import Categary from "../components/category/categary"
import PageSlide from "../components/page-slide";
import Product from "../components/product/product"

export default function HomePage() {
  let nav = ["Home", "Login"];
  return (
    <>
      {/* <span>Hi there</span> */}
      <Layout nav={nav} service_type={ClientService}>
        <div className="m-2 p-2 h-auto">
        <Categary/>
        <PageSlide />
        <Product/>
        </div>
      </Layout>
    </>
  );
}

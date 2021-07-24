import { Layout, ClientService } from "../layout/index";

export default function HomePage() {
  let nav = ["Home", "Login"];
  return (
    <>
      {/* <span>Hi there</span> */}
      <Layout nav={nav} service_type={ClientService}>
        <div>Welcome! My Name is Kausik Santra</div>
      </Layout>
    </>
  );
}

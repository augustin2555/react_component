import logo from './logo.svg';
import './App.css';
import Card from "./Card";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
//   let priceCards=[{title:"Single User",title:"5GB Storage",title:"Unlimited Public Projects",title:"Community Access",title:"Unlimited Private Projects",title:"Dedicated Phone Support",title:"Free Subdomain",title:"Monthly Status Reports"},
// {title:"5 Users",title:"50GB Storage",title:"Unlimited Public Projects",title:"Community Access",title:"Unlimited Private Projects",title:"Dedicated Phone Support",title:"Free Subdomain",title:"Monthly Status Reports"},{title:"Unlimited Users",
// title:"150GB Storage",title:"Unlimited Public Projects",title:"Community Access",title:"Unlimited Private Projects",title:"Dedicated Phone Support",title:"Unlimited Free Subdomains",title:"Monthly Status Reports"}];

  return (
<section class="pricing py-5">
  <div class="container">
    <div class="row">
      <Card></Card>
    </div>
  </div>
</section>
);
}

export default App;

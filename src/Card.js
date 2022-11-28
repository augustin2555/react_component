import { faCheck, faCoffee, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Card(){
    return(
      <section class="pricing py-5">
      <div class="container">
        <div class="row">

          <div class="col-lg-4">

            <div class="card mb-5 mb-lg-0">
              <div class="card-body">
                <h5 class="card-title text-muted text-uppercase text-center">Free</h5>
                <h6 class="card-price text-center">$0<span class="period">/month</span></h6>
                
                <ul class="fa-ul">
                  <li><span class="fa-li"><i class="fas fa-check"></i></span><FontAwesomeIcon icon={faCheck}/> Single User</li>
                  <li><span class="fa-li"><i class="fas fa-check"></i></span><FontAwesomeIcon icon={faCheck}/> 5GB Storage</li>
                  <li><span class="fa-li"><i class="fas fa-check"></i></span><FontAwesomeIcon icon={faCheck}/> Unlimited Public Projects</li>
                  <li><span class="fa-li"><i class="fas fa-check"></i></span><FontAwesomeIcon icon={faCheck}/> Community Access</li>
                  <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span><FontAwesomeIcon icon={faXmark}/> Unlimited
                    Private Projects</li>
                  <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span><FontAwesomeIcon icon={faXmark}/> Dedicated
                    Phone Support</li>
                  <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span><FontAwesomeIcon icon={faXmark}/> Free Subdomain
                  </li>
                  <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span><FontAwesomeIcon icon={faXmark}/> Monthly Status
                    Reports</li>
                </ul>
                <div class="d-grid">
                  <a href="#" class="btn btn-primary text-uppercase">Button</a>
                </div>
              </div>
            </div>
          </div>
          
          <div class="col-lg-4">
            <div class="card mb-5 mb-lg-0">
              <div class="card-body">
                <h5 class="card-title text-muted text-uppercase text-center">Plus</h5>
                <h6 class="card-price text-center">$9<span class="period">/month</span></h6>
                
                <ul class="fa-ul">
                  <li><span class="fa-li"><i class="fas fa-check"></i></span><strong><FontAwesomeIcon icon={faCheck}/> 5 Users</strong></li>
                  <li><span class="fa-li"><i class="fas fa-check"></i></span><FontAwesomeIcon icon={faCheck}/> 50GB Storage</li>
                  <li><span class="fa-li"><i class="fas fa-check"></i></span><FontAwesomeIcon icon={faCheck}/> Unlimited Public Projects</li>
                  <li><span class="fa-li"><i class="fas fa-check"></i></span><FontAwesomeIcon icon={faCheck}/> Community Access</li>
                  <li><span class="fa-li"><i class="fas fa-check"></i></span><FontAwesomeIcon icon={faCheck}/> Unlimited Private Projects</li>
                  <li><span class="fa-li"><i class="fas fa-check"></i></span><FontAwesomeIcon icon={faCheck}/> Dedicated Phone Support</li>
                  <li><span class="fa-li"><i class="fas fa-check"></i></span><FontAwesomeIcon icon={faCheck}/> Free Subdomain</li>
                  <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span><FontAwesomeIcon icon={faXmark}/> Monthly Status
                    Reports</li>
                </ul>
                <div class="d-grid">
                  <a href="#" class="btn btn-primary text-uppercase">Button</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title text-muted text-uppercase text-center">Pro</h5>
                <h6 class="card-price text-center">$49<span class="period">/month</span></h6>
                <ul class="fa-ul">
                  <li><span class="fa-li"><i class="fas fa-check"></i></span><strong><FontAwesomeIcon icon={faCheck}/>Unlimited Users</strong>
                  </li>
                  <li><span class="fa-li"><i class="fas fa-check"></i></span><FontAwesomeIcon icon={faCheck}/>150GB Storage</li>
                  <li><span class="fa-li"><i class="fas fa-check"></i></span><FontAwesomeIcon icon={faCheck}/> Unlimited Public Projects</li>
                  <li><span class="fa-li"><i class="fas fa-check"></i></span><FontAwesomeIcon icon={faCheck}/> Community Access</li>
                  <li><span class="fa-li"><i class="fas fa-check"></i></span><FontAwesomeIcon icon={faCheck}/> Unlimited Private Projects</li>
                  <li><span class="fa-li"><i class="fas fa-check"></i></span><FontAwesomeIcon icon={faCheck}/> Dedicated Phone Support</li>
                  <li><span class="fa-li"><i class="fas fa-check"></i></span><strong><FontAwesomeIcon icon={faCheck}/>Unlimited</strong> Free
                    Subdomains</li>
                  <li><span class="fa-li"><i class="fas fa-check"></i></span><FontAwesomeIcon icon={faCheck}/> Monthly Status Reports</li>
                </ul>
                <div class="d-grid">
                  <a href="#" class="btn btn-primary text-uppercase">Button</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
}
export default Card;

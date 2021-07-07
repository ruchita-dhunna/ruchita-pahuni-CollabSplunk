
import "./Footer.css"
function Footer() {
  return (
    <footer class="bg-secondary  text-white text-center text-lg-start m-0 b-0 " style={{ 'background-color': "transparent" }}>
      <div class="container p-4 ">
        <div class="row">
          <div class="col-lg-6 col-md-6 col-12 mb-3 mb-md-0">
            <h5 class="text-uppercase">Our Goal</h5>

            <p>
              An effort from us to showcase the Reports in better, self-explanatory way.
              Aspiring to build this little web application to showcase all the tools in similar way to
              build more clear picture
            </p>
          </div>


          <div class="col-lg-6 col-md-6 col-12  mb-3 mb-md-0">
            <h5 class="text-uppercase mb-0">Created and Implemented By</h5>

            <ul class="list-unstyled">
              <br />
              <li>
                <a href="#!" class="text-white text-bold name">
                  Pahuni Telang
                  &
                  Ruchita Dhunna
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        class="text-center pb-2"
        style={{ backgroundcolor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2021 Copyright: TCS
      </div>
    </footer>
  );
}
export default Footer;

import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./about.css";

export default function About() {
  return (
    <div className="ab-height">
      <section className="py-3 py-md-5 py-xl-8">
        <Container>
          <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
            <div className="col-12 col-lg-6 col-xl-5">
              <img
                className="img-fluid rounded"
                loading="lazy"
                src="../../../catman.jpg"
                alt=""
              />
            </div>
            <div className="col-12 col-lg-6 col-xl-7">
              <div className="row justify-content-xl-center">
                <div className="col-12 col-xl-11">
                  <h2 className="h1 mb-3">Who Are We?</h2>
                  <p className="lead fs-4 text-secondary mb-3">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt.
                  </p>
                  <p className="mb-5">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam
                  </p>
                </div>

                {/* <div className="col-4">
                    <div className="d-grid">
                      <Link
                        to="/Register"
                        className="btn btn-primary btn-lg"
                        type="submit"
                      >
                        Sign up
                      </Link>
                    </div>
                  </div> */}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

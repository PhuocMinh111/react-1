import React, { Component } from "react";

class Body extends Component {
  render() {
    return (
      <>
        <div className="container mt-5 p-lg-3 bg-light ">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-left col-md-12">
              <div className="inner pb-4">
                <h2 className="">A warm welcome !</h2>
                <p>
                  Bootstrap utility classes are used to create this jumbotron
                  since the old component has been removed from the framework.
                  Why create custom CSS when you can use utilities?
                </p>
                <button className="btn btn-primary" href="#">
                  Call to action
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container row mx-auto">
          <div className="col-lg-4 text-center col-md-6 col-sm-12 py-5">
            <div className="inner bg-light p-3">
              <div className="bg-secondary text-center py-5">500x350</div>
              <h4 className="mt-3">card title</h4>
              <p>
                tristique sollicitudin nibh sit amet commodo nulla facilisi
                nullam vehicula
              </p>
              <button className="btn btn-primary">Find Out More</button>
            </div>
          </div>
          <div className="col-lg-4 text-center col-md-6 col-sm-12 py-5">
            <div className="inner bg-light p-3">
              <div className="bg-secondary text-center py-5">500x350</div>
              <h4 className="mt-3">card title</h4>
              <p>
                tristique sollicitudin nibh sit amet commodo nulla facilisi
                nullam vehicula
              </p>
              <button className="btn btn-primary">Find Out More</button>
            </div>
          </div>
          <div className="col-lg-4 text-center col-md-6 col-sm-12 py-5">
            <div className="inner bg-light p-3">
              <div className="bg-secondary text-center py-5">500x350</div>
              <h4 className="mt-3">card title</h4>
              <p>
                tristique sollicitudin nibh sit amet commodo nulla facilisi
                nullam vehicula
              </p>
              <button className="btn btn-primary">Find Out More</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Body;

import React, { Component } from "react";
import ServicesListCard from "./ServicesListCard";
import "./ServicesList.css";
import $ from "jquery";
class ViewCategories extends Component {
  constructor(props) {
    super(props);
    this.state = { result: [] };
  }
  componentDidUpdate(prevProps) {
    if (prevProps.location.query !== this.props.location.query) {
      console.log("hisdhaisdhais", this.props.location.query);
      this.getAllServices();
    }
  }
  componentDidMount() {
    console.log("dsdsdsdsds", this.props.location.query);
    this.getAllServices();
  }
  getAllServices = () => {
    $.ajax({
      url: `/providercategories/${this.props.location.query}`,
      type: "POST",
      success: data => {
        this.setState({ result: data });
      },
      error: err => {
        console.log("ERROR");
      }
    });
  };
  render() {
    // eslint-disable-next-line no-lone-blocks
    {
      return (
        <div className="container">
          <div className="row">
            {this.state.result.map((result, index) => {
              return <ServicesListCard key={index} result={result} />;
            })}
          </div>
        </div>
      );
    }
  }
}

export default ViewCategories;
/*
 <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                  <br />
                  <div class="card">
                    <img
                      src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMzE4IiBoZWlnaHQ9IjE4MCIgdmlld0JveD0iMCAwIDMxOCAxODAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjwhLS0KU291cmNlIFVSTDogaG9sZGVyLmpzLzEwMCV4MTgwCkNyZWF0ZWQgd2l0aCBIb2xkZXIuanMgMi42LjAuCkxlYXJuIG1vcmUgYXQgaHR0cDovL2hvbGRlcmpzLmNvbQooYykgMjAxMi0yMDE1IEl2YW4gTWFsb3BpbnNreSAtIGh0dHA6Ly9pbXNreS5jbwotLT48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwhW0NEQVRBWyNob2xkZXJfMTRmZTA1OGRkZmIgdGV4dCB7IGZpbGw6cmdiYSgyNTUsMjU1LDI1NSwuNzUpO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LWZhbWlseTpIZWx2ZXRpY2EsIG1vbm9zcGFjZTtmb250LXNpemU6MTZwdCB9IF1dPjwvc3R5bGU+PC9kZWZzPjxnIGlkPSJob2xkZXJfMTRmZTA1OGRkZmIiPjxyZWN0IHdpZHRoPSIzMTgiIGhlaWdodD0iMTgwIiBmaWxsPSIjNzc3Ii8+PGc+PHRleHQgeD0iMTE4LjA4NTkzNzUiIHk9Ijk3LjIiPjMxOHgxODA8L3RleHQ+PC9nPjwvZz48L3N2Zz4="
                      class="card-img-top"
                      alt="Card image"
                    />

                    <div class="card-block text-left">
                      <h4 class="card-title">This is a title</h4>
                      <p class="card-text">
                        Each merged squad salts the wild porter. Should the
                        charmed church dodge a camera? The gown litters the
                        rhyme. Another discrete elevator defects over the
                        target.
                      </p>
                      <Link
                        to={{
                          pathname: "/",
                          query: this.state.value
                        }}
                      >
                        <button className="detailsBTN btn btn-primary">
                          More Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
*/

import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ViewCategories.css";
class ViewCategories extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }
  

  render() {
    {
      return (
        <div class="container">
          <div class="row">
            {[1, 2, 3, 4, 5, 6, 7, 8].map(() => {
              return (
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
                      <div>
                        <button className="detailsBTN btn btn-primary">
                          More Details
                        </button>
                      </div>
                      </Link>
                      <Link
                          to={{
                                pathname:"/Cart"
                              }}
                      >
                        <button type="button" className="btn btn-danger addToCartBtn">Add to Wishlist</button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    }
  }
}

export default ViewCategories;

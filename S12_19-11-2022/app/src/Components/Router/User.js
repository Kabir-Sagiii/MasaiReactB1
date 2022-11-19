import React, { Component } from "react";

import hoc from "./hoc";

class User extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <h2>User Details</h2>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              mollitia alias eaque a itaque, perferendis, sapiente accusamus
              nostrum quisquam quasi aut eos culpa optio iure suscipit adipisci
              recusandae corrupti voluptatem aspernatur laboriosam vero odio
              reiciendis distinctio nihil? Est rerum a voluptatem cum
              recusandae. Laudantium possimus dignissimos consequatur suscipit
              tempore, quisquam nihil esse accusamus voluptas qui. Expedita,
              quia obcaecati quae eum magni, sed odio minus reprehenderit in
              unde quod dolorem ipsum. Assumenda, provident similique.
              Repellendus cumque consequatur qui voluptates veniam iste!
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-1">
            <input
              defaultChecked
              type="radio"
              value="all"
              name="gender"
              className="mx-1"
              onChange={() => {
                this.props.filterData("all");
              }}
            />
            ALL
          </div>
          <div className="col-1">
            <input
              type="radio"
              value="male"
              name="gender"
              className="mx-1"
              onChange={() => {
                this.props.filterData("male");
              }}
            />
            Male
          </div>
          <div className="col-2">
            <input
              type="radio"
              value="female"
              name="gender"
              className="mx-1"
              onChange={() => {
                this.props.filterData("female");
              }}
            />
            Female
          </div>
        </div>

        <div className="row mt-3">
          <div className="col">
            <table className="table table-hover">
              <thead className="table-dark">
                <tr>
                  <th>IMAGE</th>
                  <th>NAME</th>
                  <th>EMAIL</th>
                  <th>GENDER</th>
                </tr>
              </thead>
              <tbody>
                {this.props.state.data.length > 0 ? (
                  this.props.state.data.map(function (ele) {
                    return (
                      <tr>
                        <td>
                          <img
                            src={ele.picture.medium}
                            width="100px"
                            height="100px"
                          />
                        </td>
                        <td>{ele.name.first}</td>
                        <td>{ele.email}</td>
                        <td>{ele.gender}</td>
                      </tr>
                    );
                  })
                ) : (
                  <div>No data</div>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default hoc(User);

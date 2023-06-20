import React, { useState } from "react";
import Icons from "./Callout";
import { Record } from "./Data";
import { maindata } from "./Data";
import "../css/dashboard.css";
import { Input } from "./Callout";

function Dashboard({ head }) {
  const [record, Setrecord] = useState(Record);
  const [list, setList] = useState(maindata);
  const showRecord = () => {
    record.map((value, index) => {
      return (
        <div className="record-card">
          <Icons type={value.icon} />
          <div>
            <p>{value.number}</p>
            <p>{value.user}</p>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="dashboard">
      <header>
        <h2 className="dash-head">{head}</h2>
        <section className="profile">
          <Icons type="fa fa-phone" />
          <p>profile</p> <Icons type="fa fa-gear" />
        </section>
      </header>

      <section className="record">
        {record.map((value, index) => {
          return (
            <div className="record-card">
              <Icons type={value.icon} />
              <div>
                <p>
                  {value.number} <br />
                  {value.user}
                </p>
                {/* <p>{value.user}</p> */}
              </div>
            </div>
          );
        })}
      </section>
      <section className="calender">
        <div className="main-calender"></div>
      </section>
      <section className="list">
        <header>
          <h3>Doctors pending request</h3>
        </header>
        <div className="for-table">
          <table className="table-list">
            <tr className="heading">
              <th>
                <div className="hold">
                  <Input type="checkbox" />
                  physician's name
                </div>
              </th>
              <th>
                {" "}
                <Input type="checkbox" />
                service
              </th>
              <th>
                {" "}
                <Input type="checkbox" />
                date
              </th>
              <th>
                {" "}
                <Input type="checkbox" />
                actions
              </th>
              <th></th>
              {list.map((value, index) => {
                return (
                  <tr>
                    <td className="profile-contain">
                      <div className="for-img">
                        <Input type="checkbox" />
                        <img className="image" src={value.img} alt="" />
                      </div>
                      <div>{value.username}</div>
                    </td>
                    <td>
                      <div className="hold">
                        <Input type="checkbox" />
                        {value.service}
                      </div>
                    </td>
                    <td>
                      <div className="hold">
                        <Input type="checkbox" />
                        {value.date}
                      </div>
                    </td>
                    <td>
                      <div>
                        <Icons type="fa fa-good" />
                        <Icons type="fa fa-times" />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tr>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
Dashboard.defualtProps = {
  head: "Dashborad",
};

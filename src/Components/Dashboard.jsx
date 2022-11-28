import React from "react";
import "../css/dashboard.css";
import Charts from "./Charts";
import Structure from "./Structure";
import url from "../global_var";
import postService from "../Services/post.service";
import axios from "axios";

export default function Dashboard() {
  const [total, setTotal] = React.useState(0);
  const [quantity, setQuantity] = React.useState(0);
  const [finalItem, setFinalItem] = React.useState("");
  // React.useEffect(() => {
  //     const user = postService.getAllPrivatePosts();
  //     console.log(user.status)
  //     if(user.status === undefined || user.status !== 200){
  //         console.log("logout")
  //     }
  //   }, []);

  React.useEffect(() => {
    const info = JSON.parse(localStorage.getItem("companyName"));
    axios
      .post(url + "/total", {
        companyName: info,
      })
      .then((res) => {
        setTotal(res.data.total);
        setQuantity(res.data.quantity);
        setFinalItem(res.data.finalans);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="row p-4">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb px-5">
            <li className="breadcrumb-item active">Admin</li>
            <li className="breadcrumb-item" id="curlabel" aria-current="page">
              Dashboard
            </li>
          </ol>
        </nav>
      </div>

      <div className="d-flex justify-content-center">
        <div className="col-md-11 custom-card1 justify-content-around">
          <div className="col-md-6 p-4">
            <h2 id="heading">Dashboard</h2>
          </div>
          <div className="col-md-5">
            <p id="sub-text" className="mont"></p>
          </div>
        </div>
      </div>

      <div className="row px-5 justify-content-around my-5">
        <div className="col-md-3 p-3 card-dash">
          <div className="row">
            <div className="col-md-8">
              <p>Total Revenue</p>
              <h2>{total}</h2>
            </div>
            <div className="d-flex col-md-4 justify-content-center align-items-center">
              <svg
                width="80"
                height="45"
                viewBox="0 0 95 87"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M51.424 47.4511C57.9823 47.4511 63.2988 52.7622 63.2988 59.3138L63.2926 65.2323C64.107 79.7567 52.9088 87 32.1426 87C11.4435 87 0 79.8515 0 65.4395V59.3138C0 52.7622 5.31652 47.4511 11.8748 47.4511H51.424ZM83.0949 47.4511C89.6531 47.4511 94.9696 52.7622 94.9696 59.3138L94.9637 63.4782C95.6795 76.5072 85.7848 83.0393 67.6989 83.0393C65.2438 83.0393 62.9358 82.9199 60.7803 82.6808C65.0292 78.7611 67.3021 73.442 67.2943 66.7207L67.2447 65.0111L67.2571 59.3138C67.2571 54.5879 65.1823 50.3461 61.8932 47.4478L83.0949 47.4511ZM31.6661 0C42.5983 0 51.4606 8.85333 51.4606 19.7745C51.4606 30.6956 42.5983 39.549 31.6661 39.549C20.7339 39.549 11.8716 30.6956 11.8716 19.7745C11.8716 8.85333 20.7339 0 31.6661 0ZM71.2487 7.90851C79.993 7.90851 87.0817 14.99 87.0817 23.7255C87.0817 32.461 79.993 39.5425 71.2487 39.5425C62.5043 39.5425 55.4156 32.461 55.4156 23.7255C55.4156 14.99 62.5043 7.90851 71.2487 7.90851Z"
                  fill="#279B46"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="col-md-3 p-3 card-dash">
          <div className="row">
            <div className="col-md-8">
              <p>Total Quantity</p>
              <h2>{quantity}</h2>
            </div>
            <div className="d-flex col-md-4 justify-content-center align-items-center">
              <svg
                width="60"
                height="40"
                viewBox="0 0 87 87"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.0903 69.6C21.3071 69.6 17.437 73.515 17.437 78.3C17.437 83.085 21.3071 87 26.0903 87C30.8735 87 34.7871 83.085 34.7871 78.3C34.7871 73.515 30.8735 69.6 26.0903 69.6ZM0 4.35C0 6.7425 1.95677 8.7 4.34839 8.7H8.69677L24.351 41.7165L18.4806 52.3305C15.3063 58.1595 19.4808 65.25 26.0903 65.25H73.9226C76.3142 65.25 78.2709 63.2925 78.2709 60.9C78.2709 58.5075 76.3142 56.55 73.9226 56.55H26.0903L30.8735 47.85H63.269C66.5303 47.85 69.4002 46.0665 70.8787 43.3695L86.4459 15.138C88.0548 12.267 85.9676 8.7 82.6628 8.7H18.3067L15.3933 2.4795C14.6975 0.957 13.1321 0 11.4797 0H4.34839C1.95677 0 0 1.9575 0 4.35V4.35ZM69.5742 69.6C64.7909 69.6 60.9209 73.515 60.9209 78.3C60.9209 83.085 64.7909 87 69.5742 87C74.3574 87 78.2709 83.085 78.2709 78.3C78.2709 73.515 74.3574 69.6 69.5742 69.6Z"
                  fill="#02C9D6"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="col-md-3 p-3 card-dash">
          <div className="row">
            <div className="col-md-8">
              <p>Category in Demand</p>
              <h2>{finalItem}</h2>
            </div>
            <div className=" d-flex col-md-4 justify-content-center align-items-center">
              <svg
                width="70"
                height="45"
                viewBox="0 0 91 88"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M88.4571 84.1514H87.0571C86.1571 84.1514 85.4571 84.8514 85.4571 85.7514C85.4571 86.6514 86.1571 87.3514 87.0571 87.3514H88.4571C89.3571 87.3514 90.0571 86.6514 90.0571 85.7514C90.0571 84.8514 89.3571 84.1514 88.4571 84.1514ZM82.5571 84.1514H80.9571V41.6514C80.9571 40.7514 80.2571 40.0514 79.3571 40.0514C78.4571 40.0514 77.7571 40.7514 77.7571 41.6514V84.1514H68.2571V20.1514H77.7571V31.2514C77.7571 32.1514 78.4571 32.8514 79.3571 32.8514C80.2571 32.8514 80.9571 32.1514 80.9571 31.2514V18.5514C80.9571 17.6514 80.2571 16.9514 79.3571 16.9514H66.6571C65.7571 16.9514 65.0571 17.6514 65.0571 18.5514V84.1514H62.3571V32.9514C62.3571 32.0514 61.6571 31.3514 60.7571 31.3514H47.9571C47.0571 31.3514 46.3571 32.0514 46.3571 32.9514V84.1514H43.6571V47.4514C43.6571 46.5514 42.9571 45.8514 42.0571 45.8514H29.3571C28.4571 45.8514 27.7571 46.5514 27.7571 47.4514V84.1514H25.0571V60.3514C25.0571 59.4514 24.3571 58.7514 23.4571 58.7514H10.7571C9.85713 58.7514 9.15713 59.4514 9.15713 60.3514V84.1514H1.65713C0.757129 84.1514 0.0571289 84.8514 0.0571289 85.7514C0.0571289 86.6514 0.757129 87.3514 1.65713 87.3514H82.5571C83.4571 87.3514 84.1571 86.6514 84.1571 85.7514C84.1571 84.8514 83.4571 84.1514 82.5571 84.1514ZM49.5571 34.5514H59.0571V84.1514H49.5571V34.5514ZM30.9571 49.0514H40.4571V84.1514H30.9571V49.0514ZM12.3571 61.9514H21.8571V84.1514H12.3571V61.9514Z"
                  fill="#FF3A2D"
                />
                <path
                  d="M79.3569 34.3514C78.4569 34.3514 77.7569 35.0514 77.7569 35.9514V37.4514C77.7569 38.3514 78.4569 39.0514 79.3569 39.0514C80.2569 39.0514 80.9569 38.3514 80.9569 37.4514V35.9514C80.9569 35.0514 80.2569 34.3514 79.3569 34.3514ZM14.9569 46.8514C15.2569 46.8514 15.5569 46.7514 15.7569 46.6514C28.7569 38.9514 46.2569 26.6514 58.4569 10.7514L61.0569 12.5514C62.0569 13.2514 63.3569 12.5514 63.4569 11.4514L64.2569 1.65137C64.3569 0.451372 63.1569 -0.348628 62.0569 0.151372L53.1569 4.35137C52.0569 4.85137 51.9569 6.35137 52.9569 6.95137L55.7569 8.95137C43.7569 24.4514 26.7569 36.3514 14.0569 43.9514C13.2569 44.4514 13.0569 45.3514 13.4569 46.1514C13.8569 46.5514 14.4569 46.8514 14.9569 46.8514ZM7.15692 51.2514C7.45692 51.2514 7.65692 51.1514 7.95692 51.0514C9.15692 50.4514 10.5569 49.6514 11.9569 48.8514C12.7569 48.4514 12.9569 47.4514 12.5569 46.6514C12.1569 45.8514 11.1569 45.6514 10.3569 46.0514C8.85692 46.8514 7.55692 47.6514 6.35692 48.2514C5.55692 48.6514 5.25692 49.6514 5.65692 50.4514C6.05692 50.9514 6.55692 51.2514 7.15692 51.2514ZM1.65692 54.0514C1.85692 54.0514 2.15692 54.0514 2.35692 53.9514C2.35692 53.9514 2.75692 53.7514 3.55692 53.3514C4.35692 52.9514 4.65692 51.9514 4.25692 51.1514C3.85692 50.3514 2.85692 50.0514 2.05692 50.4514C1.35692 50.8514 0.956922 50.9514 0.956922 50.9514C0.156922 51.3514 -0.243078 52.2514 0.156922 53.0514C0.456922 53.6514 1.05692 54.0514 1.65692 54.0514Z"
                  fill="#FF3A2D"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center m-5">
        <div className="col-md-11 p-3 card-dash1 mx-5">
          <h2 className="ps-5 pt-3 ">
            <i>Monthly Sales:</i>{" "}
          </h2>
          <Charts />
        </div>
      </div>

      <div className="d-flex justify-content-center m-5">
        <div className="col-md-11 p-5 card-dash1 mx-5">
          <Structure />
        </div>
      </div>
    </>
  );
}

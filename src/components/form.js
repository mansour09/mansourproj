//this func is for our form inputs and it checks : valid and invalid id (meli)
import axios from "axios";
import { useState , useEffect } from "react";

function Form() {
    const [card, setcard] = useState(0);
    const [id, changeid] = useState(0);
    function changer(e) {
      changeid(e.target.value);
    }
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios.get("https://api.codebazan.ir/codemelli/", {
          params: {
            code: id,
          },
        });
  
        setcard(result.data);
      };
  
      fetchData();
    });
 ///this func changes the language of our api and showing to us in persion response

 function result(res) {
    var body = "";
    var btn = document.getElementById("submit");
    if (res === "The number of digits is incorrect") {
      body = <b className="text-danger">این کد ملی در سرور یافت نشد</b>;
      btn.disabled = true;
    } else if (res === "The code is valid") {
      body = <b className="text-success ">صحیح است</b>;
      btn.disabled = false;
    }

    return body;
  }

  return (
    <form className="form-group container shadow mt-5">
      <label htmlFor="username">نام کاربری</label>
      <input type="text" placeholder="username" className="form-control" />
      <label htmlFor="id-code" className="text-danger">
        کد ملی{" "}
      </label>
      <input
        type="number"
        placeholder="صحت کد ملی تست میشود"
        className="form-control"
        id="meli"
        value={id}
        onChange={changer}
        required
      />
      <b>{result(card.Result)}</b>
      <br />
      <label htmlFor="email" className="text-danger">
        ایمیل
      </label>
      <input
        type="email"
        placeholder="ایمیل را وارد کنید"
        required
        className="form-control"
      />
      <textarea className="form-control mt-5" placeholder="شرح درخواست" />
      <button
        type="submit"
        formMethod="GET"
        className="btn my-btn mt-4 mb-4"
        id="submit"
        disabled={true}
      >
        ثبت درخواست
      </button>
    </form>
  );
  }
export default Form;
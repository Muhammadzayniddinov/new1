import axios from "axios";
import { useMemo, useState } from "react";
import Layout from "../../components/Layout";
import MyInput from "../../components/myInput";

function StadiumCreate() {
  const [titleInp, setTitleInp] = useState("");
  const [capacityInp, setCapacityInp] = useState("");
  const [locationInp, setLocationInp] = useState("");
  const [imageInp, setImageInp] = useState("");
  const [openedInp, setOpenedInp] = useState("");
  const [priceInp, setPriceInp] = useState("");
  const [ratingInp, setRatingInp] = useState("");
  const [cNameInp, setCNameInp] = useState("");

  const onCreate = (e) => {
    e.preventDefault();

    if(ratingInp > 5 || ratingInp < 1)
    {
      alert("rating 1 va 5 orasida bola oladi")
      return;
    }



    axios.post('http://localhost:3000/products', {
      "imageURL": imageInp,
      "title": titleInp,
      "capacity": capacityInp,
      "location": locationInp,
      "opened": openedInp,
      "price": priceInp,
      "rating": ratingInp,
      "club": {
        "name": cNameInp
      }
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);

    });
  };

  return (
    <Layout>
      <form className=" max-w-3xl mx-auto shadow border p-8 space-y-8">
        <MyInput
          labelText={"Title"}
          myValue={titleInp}
          mySetValueChange={setTitleInp}
          type={"text"}
        />
        <MyInput
          labelText={"Capacity"}
          myValue={capacityInp}
          mySetValueChange={setCapacityInp}
          type={"number"}
        />

        <MyInput
          labelText={"Location"}
          myValue={locationInp}
          mySetValueChange={setLocationInp}
          type={"text"}
        />
        <MyInput
          labelText={"Image URL"}
          myValue={imageInp}
          mySetValueChange={setImageInp}
          type={"text"}
        />
        <MyInput
          labelText={"Opened Text"}
          myValue={openedInp}
          mySetValueChange={setOpenedInp}
          type={"text"}
        />
        <MyInput
          labelText={"Price"}
          myValue={priceInp}
          mySetValueChange={setPriceInp}
          type={"number"}
        />
        <MyInput
          labelText={"Rating"}
          myValue={ratingInp}
          mySetValueChange={setRatingInp}
          type={"number"}
        />
        <MyInput
          labelText={"Club name"}
          myValue={cNameInp}
          mySetValueChange={setCNameInp}
          type={"text"}
        />
        <div className="flex justify-end">
          <button
            onClick={onCreate}
            className="px-4 py-2 rounded bg-indigo-700 text-white"
          >
            Create
          </button>
        </div>
      </form>
    </Layout>
  );
}

export default StadiumCreate;

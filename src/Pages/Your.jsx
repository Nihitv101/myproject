import Card from "../components/Card";
import jsonData from "../constants/datafile";

import { useState } from "react";

const Your = () => {
  const [id, setId] = useState(1);

  // Filter the data based on the provided id
  const filteredData = jsonData.filter((data) => data.owner_id === id);

  console.log(filteredData);
  



  return (
    <div className="p-4">


      <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">


        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="grid-zip"
        >
          Enter Unique ID
        </label>


        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-10"
          id="grid-zip"
          type="text"
          placeholder={id}
          onChange={(e) => setId(parseInt(e.target.value))}

        />





        {filteredData.length > 0 ? (
          filteredData.map((data) => (
            <Card key={data.id} data={data} />
          ))
        ) : (
          <p>No data found for the provided ID.</p>
        )}
      </div>
    </div>
  );
};

export default Your;

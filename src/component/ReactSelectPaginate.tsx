import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import loadOptions from "./asyncOptions";

const ReactSelectPaginate: React.FC = () => {
  const [value, setValue] = useState<any>(null);
  return (
    <div>
      <AsyncPaginate
        id="companyId"
        loadOptions={loadOptions}
        value={value}
        getOptionValue={(option: any) => option.imdbID}
        getOptionLabel={(option: any) => option.Title}
        onChange={setValue}
        additional={{
          page: 1,
        }}
        isSearchable={true}
        placeholder="Select an option"
        debounceTimeout={500}
      />
    </div>
  );
};

export default ReactSelectPaginate;

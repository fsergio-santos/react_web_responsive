import React, { Fragment, useState } from "react";

const Search = ({ onSearch }) => {
    const [search, setSearch] = useState("");

    const onInputChange = value => {
        setSearch(value);
        onSearch(value);
    };
    return (
        <Fragment>
            <form>   
                <div className="row">
                    <label className="col-form-label col-12 col-sm-1 fontSize">Pesquisa:</label>  
                    <div className="col-9 col-sm-9 col-md-9 offset-md-1">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search"
                            value={search}
                            onChange={e => onInputChange(e.target.value)}
                        />
                    </div>
                </div>
            </form>
        </Fragment>
    );
};

export default Search;
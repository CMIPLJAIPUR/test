import React, { useState } from "react";

const content = [
  "Home, Furniture & DIY  >  Cookware, Dining & Bar  >  Tableware, Serving & Linen  Cups & Saucers",
  "Baby  >  Baby Feeding  >  Cups/Dishes/Utensils ",
  "Antiques  >  Asian Oriented Antiques  >  Chinese  >  Glasses/Cups",
]
const category = [
  "Antiques >", "Art >", "Baby >", "Books, Comics & Magazines >", "Cameras & Photography >", "Cars, Motocycles & Vehicles >", "Clothes, Shoes & Accessoires >", "Antiques >", "Art >", "Baby >", "Books, Comics & Magazines >", "Cameras & Photography >", "Cars, Motocycles & Vehicles >", "Clothes, Shoes & Accessoires >"
]

const CreatelistSearch = ({onChange}) => {
  const [searchData, setSearchData] = useState("");
  const [ focused, setFocused ] = useState(false)
  const [ clicked, setClicked ] = useState({
    "a1": 0,
    "a2": 0,
    "a3": 0,
  })
  const [ isBrowse, setIsBrowse ] = useState(false)
  const selectCategory = (category) => {
    onChange(category)
    setFocused(false)
  }
  return (
    <>
      <div className="main-search-list">
        <h2 className="search-heading">Find a matching category</h2>

        <div className="input-group-search">
          <input
            id="search-input"
            type="search"
            placeholder="Enter a title for your listing (include brand, color, material etc.)"
            className="form-control"
            value={searchData}
            onChange={(e) => setSearchData(e.target.value)}
            onFocus={() => setFocused(true)}

          />
          <button id="search-button" type="button" className="btn btn-primary">
            Search
          </button>
        </div>
        <div className={`searchlist ${focused && "focused"}`}>
          {
            content.map((item, key) => (
              <span onClick={() => selectCategory(item)} >{item}</span>
            ))
          }
        </div>
        <u onClick={() => setIsBrowse(true)}>Browse categories</u>
        {
          isBrowse && 
          <section>
            <div>
              {
                category.map((item, key) => (
                  <span onClick={() => setClicked({...clicked, a1: key})} className={clicked.a1 == key && "active"}>{item}</span>
                ))
              }
            </div>
            <div>
              {
                category.map((item, key) => (
                  <span onClick={() => setClicked({...clicked, a2: key})} className={clicked.a2 == key && "active"}>{item}</span>
                ))
              }
            </div>
            <div>
              {
                category.map((item, key) => (
                  <span onClick={() => setClicked({...clicked, a3: key})} className={clicked.a3 == key && "active"}>{item}</span>
                ))
              }
            </div>
          </section>
        }
        {/* {props.filtertext.length > 0 ? (
          <div className="searchlist">
            {props.filtertext.map(
              (filters, i) => {
                const result = (
                  <h3>
                    {filters.length > 0 && filters.map(
                        (cat, index) => {
                            const results = (
                              <span className="firstcap">{filters.length > index+1 ? cat.name+' > ' : cat.name}</span>
                            )
                        return results}
                    )}
                  </h3>
                )
                return result}
            )}
          </div>
        ) : (
          <p></p>
        )} */}
      </div>
    </>
  );
};

export default CreatelistSearch;

import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import "./SearchResultPage.css";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/SearchItem/SearchItem";
import useFetch from "../../hooks/useFetch";
import { MoonLoader } from "react-spinners";

const SearchResultPage = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [details, setDetails] = useState(location.state.details);
  const [dates, setDates] = useState(location.state.dates);
  const [openDate, setOpenDate] = useState(false);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  const {loading, reFetch } = useFetch(
    `/hotels?city=${destination}&min=${min || 0}&max=${max || 999}`
  );

  const handleClickButton = () => {
    reFetch();
  };

  return (
    <div>
      <NavBar />
      <div className="result-page">
        <div className="result-page-search-container">
          <div className="result-page-search-text">
            <h1 className="search-text">Search</h1>
          </div>
          <div className="result-page-destination-and-dates">
            <div className="result-page-destination-text">
              <p className="result-page-search">Destination</p>
              <input
                placeholder={destination}
                className="result-page-search-input"
                type="text"
              />
            </div>
            <div
              className="result-page-dates"
              onClick={() => setOpenDate(!openDate)}
            >
              <p className="result-page-search">Check-in date</p>
              <span className="result-page-search-date">
                {`${format(dates[0].startDate, "dd/MM/yyyy")} to ${format(
                  dates[0].endDate,
                  "dd/MM/yyyy"
                )}`}
              </span>
              {openDate && (
                <DateRange
                  className="result-page-calendar"
                  onChange={(item) => setDates([item.selection])}
                  ranges={dates}
                  minDate={new Date()}
                />
              )}
            </div>
          </div>
          <div>
            <p className="result-page-options-text">Options</p>
            <div className="result-page-options-container">
              <div className="result-page-options">
                <p>Min price (per night)</p>
                <input
                  className="result-page-options-input"
                  type="number"
                  onChange={(e) => setMin(e.target.value)}
                />
              </div>
              <div className="result-page-options">
                <p>Max price (per night)</p>
                <input
                  className="result-page-options-input"
                  type="number"
                  onChange={(e) => setMax(e.target.value)}
                />
              </div>
              <div className="result-page-options">
                <p>Adults</p>
                <input
                  min={1}
                  placeholder={details.adult}
                  className="result-page-options-input"
                  type="number"
                />
              </div>
              <div className="result-page-options">
                <p>Childrens</p>
                <input
                  min={0}
                  placeholder={details.children}
                  className="result-page-options-input"
                  type="number"
                />
              </div>
              <div className="result-page-options">
                <p>Rooms</p>
                <input
                  min={1}
                  placeholder={details.room}
                  className="result-page-options-input"
                  type="number"
                />
              </div>
            </div>
          </div>
          <button
            className="result-page-search-btn"
            onClick={handleClickButton}
          >
            Search
          </button>
        </div>
        <div className="result-page-search-item">
          {loading ? (
            <div className="search-result-loading">
              <MoonLoader />
            </div>
          ) : (
            <>
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SearchResultPage;

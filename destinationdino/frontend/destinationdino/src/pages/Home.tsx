import React, { useState, useEffect } from 'react';
import DestinationGrid from '../components/DestinationGrid';
import { getRequest } from '../httpMethods/getRequest';
import RadioButtons, { RadioButtonsProps } from '../components/RadioButtons';
import AdminRadioButtons from '../components/RadioButtons';

export default function Home() {
  
    const [filterValues, setFilterValues] = useState<{ [key: string]: string }>({
      isCity: "undefined",
      isWarm: "undefined",
      isNorway: "undefined",
      isCoast: "undefined",
    });

    const [filteredDestinations, setFilteredDestinations] = useState<any[]>([]);

    const apiUrl = 'http://localhost:8080/destinations';
    const { data: fetchedDestinations, loading, error } = getRequest(apiUrl);

    const handleFilterChange = (name: string, value: string) => {
      setFilterValues(prevState => ({
        ...prevState,
        [name]: value,
      }));
      console.log(filterValues);
    };

    useEffect(() => {
      if (fetchedDestinations != null) {
        const filtered = fetchedDestinations.filter(destination => {
          return (
            (filterValues.isCity === "" + destination.city || filterValues.isCity === "undefined") &&
            (filterValues.isWarm === "" + destination.warm || filterValues.isWarm === "undefined") &&
            (filterValues.isNorway === "" + destination.norway || filterValues.isNorway === "undefined") &&
            (filterValues.isCoast === "" + destination.coast || filterValues.isCoast === "undefined")
          );
        });
        setFilteredDestinations(filtered);
      }
    }, [fetchedDestinations, filterValues]);

    const isCity: RadioButtonsProps = {
      labelName: "City/Rural",
      labId: "city",
      label1: "City",
      label2: "Rural",
      groupName: "isCity",
      three: true,
      startValue: true,
      onChange: (value: string) => {
        console.log("Selected value for isCity: ", value);
        handleFilterChange("isCity", value);
      },
    };
  
    const isWarm: RadioButtonsProps = {
      labelName: "Warm/Cold",
      labId: "warm",
      label1: "Warm",
      label2: "Cold",
      groupName: "isWarm",
      three: true,
      startValue: true,
      onChange: (value: string) => {
        console.log("Selected value for isWarm: ", value);
        handleFilterChange("isWarm", value);
      },
    };
  
    const isNorway: RadioButtonsProps = {
      labelName: "Norway/Abroad",
      labId: "norway",
      label1: "Norway",
      label2: "Abroad",
      groupName: "isNorway",
      three: true,
      startValue: true,
      onChange: (value: string) => {
        console.log("Selected value for isNorway: ", value);
        handleFilterChange("isNorway", value);
      },
    };
  
    const isCoast: RadioButtonsProps = {
      labelName: "Coast/Midland",
      labId: "coast",
      label1: "Coast",
      label2: "Midland",
      groupName: "isCoast",
      three: true,
      startValue: true,
      onChange: (value: string) => {
        console.log("Selected value for isCoast: ", value);
        handleFilterChange("isCoast", value);
      },
    };
    
    if (loading) {
        return <div>Loading destinations...</div>;
    }

  if (error) {
    return <div>Error fetching destinations: {error}</div>;
  }

    return (
      <div>
          {filteredDestinations.length > 0 ? (
            <div>
              <div>
                <h2>Filters</h2>
                <div className="radioButtonsTesting">  
                  <div className="radioPair"><AdminRadioButtons {...isCity}/></div>
                  <div className="radioPair"><AdminRadioButtons {...isWarm}/></div>
                  <div className="radioPair"><AdminRadioButtons {...isNorway}/></div>
                  <div className="radioPair"><AdminRadioButtons {...isCoast}/></div>
                </div>
                <h2>Destinations</h2>
                <DestinationGrid destinations={filteredDestinations} />
              </div>
            </div>
          ) : (
            <div>
              <div style={{ position: 'fixed', top: 60, left: 0, width: '100%', backgroundColor: 'white', zIndex: 1000 }}>
                <h2>Filters</h2>
                <div className="radioButtonsTesting">
                  <div className="radioPair"><AdminRadioButtons {...isCity}/></div>
                  <div className="radioPair"><AdminRadioButtons {...isWarm}/></div>
                  <div className="radioPair"><AdminRadioButtons {...isNorway}/></div>
                  <div className="radioPair"><AdminRadioButtons {...isCoast}/></div>
                </div>
                <h2>Destinations</h2>
                <p>No matching destinations</p>
              </div>
            </div>
          )}
      </div>
    );
}


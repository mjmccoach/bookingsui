import { useState } from 'react'; 


function Home () {
    const [selectOptions, setSelectOptions] = useState([]);
    const [location, setLocation] = useState(false);


    const ukOptions = ['London', 'Manchester', 'Liverpool'];
    const usOptions = ['New York', 'Los Angeles', 'Miami'];


    const updateLocation = (event) => {
        if (event.target.value && event.target.value === "uk") {
            setSelectOptions(ukOptions);
            setLocation(event.target.value)
        }

        if (event.target.value && event.target.value === "us") {
            setSelectOptions(usOptions);
            setLocation(event.target.value)
        } 
    }

    const getLength = () => {
        if (location === "uk") {
            return 8;
        }

        if (location === "us") {
            return 10;
        }
    }

    


    return (
        <div>
            <select onChange={updateLocation}>
                <option value="" >--Please choose an option--</option>
                <option onSelect={() => updateLocation("uk")} value="uk">UK</option>
                <option onSelect={() => updateLocation("us")} value="us">USA</option>
            </select>

            <select>
                <option value="">--Please choose an option--</option>
                    {selectOptions.map((item, index) => (
                    <option key={index} value={item.toLowerCase()}>
                    {item}
                </option>
                ))}
            </select>

            <input minLength={getLength} maxLength={getLength} required placeholder={location !== "uk" ? "Enter Zip Code" : "Enter Post Code"}></input>
        </div>
    )
}

export default Home;
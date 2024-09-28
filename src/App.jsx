import React from "react";
import DynamicDropdown from "./components/DynamicDropdown";
import ListOfItemsCheck from "./components/ListOfItemsCheck";
import CustomTabs from "./components/CustomTabs";
import ApiCallParent from "./components/apiCall/ApiCallParent";
import ShuffleList from "./components/ShuffleList";
import DarkMode from "./components/darkMode/DarkMode";
import GuessColor from "./components/guessColor/GuessColor";

const App = () => {
  return (
    <div>
      {/* <DynamicDropdown /> */}
      {/* <ListOfItemsCheck /> */}
      {/* <CustomTabs /> */}
      {/* <ApiCallParent /> */}
      {/* <ShuffleList /> */}
      {/* <DarkMode /> */}
      <GuessColor />
    </div>
  );
};

export default App;

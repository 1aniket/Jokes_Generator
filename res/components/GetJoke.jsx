import axios from "axios";
import { HOST_LINK } from "../constants";

async function getJoke(
  checked,
  avoid,
  type,
  setJokes,
  isLoading,
  setIsLoading
) {
  let categories = "";
  let blacklist = "?blacklistFlags=";
  let type1 = "?type=";

  //   console.log("checked" + checked);
  //   console.log("avoid" + avoid);
  //   console.log("type" + type);
  if (checked?.length > 0) {
    checked.map((e) => {
      categories += e;
      categories += ",";
    });

    categories = categories.slice(0, categories.length - 1);
  }

  if (avoid?.length > 0) {
    avoid.map((e) => {
      blacklist += e;
      blacklist += ",";
    });

    blacklist = blacklist.slice(0, blacklist.length - 1);
  }

  //   console.log(avoid);
  if (type?.length === 1) {
    type1 += type[0];
  }
  //   console.log(type1);

  let finalLink =
    HOST_LINK +
    categories +
    (blacklist?.length > 16 ? blacklist : "") +
    (type?.length == 1 ? type1 : "");

  if (
    blacklist?.length <= 16 &&
    (type?.length == 0 || type?.length == 2) &&
    categories?.length == 0
  ) {
    finalLink = HOST_LINK + "Any";
  } else if (
    blacklist?.length <= 16 &&
    categories?.length == 0 &&
    type?.length == 1
  ) {
    finalLink = HOST_LINK + "Any/" + type;
  } else if (
    blacklist?.length >= 16 &&
    (type?.length == 0 || type?.length == 2) &&
    categories?.length == 0
  ) {
    finalLink = HOST_LINK + "Any" + blacklist;
  }

  //console.log(finalLink);

  try {
    setIsLoading("true");
    const data = await fetch(finalLink);

    const joke = await data.json();
    // console.log(joke.joke || joke.setup + joke.delivery);

    if (joke.error) {
      setJokes(joke.message);
    } else {
      setJokes(joke && (joke.joke || joke.setup + joke.delivery));
    }
    setIsLoading("false");
  } catch (error) {
    console.log("something went wrong");
  }
}

export default getJoke;

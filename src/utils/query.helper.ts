const getQuery = (pathname: string) => {
  if (pathname === "/entertainment") {
    return "entertainment";
  } else if (pathname === "/business") {
    return "business";
  } else if (pathname === "/general") {
    return "general";
  } else if (pathname === "health") {
    return "health";
  } else if (pathname === "science") {
    return "science";
  } else if (pathname === "sports") {
    return "sports";
  } else if (pathname === "technology") {
    return "technology";
  } else {
    return "general";
  }
};

export default getQuery;
// business
// entertainment
// general
// health
// science
// sports
// technology

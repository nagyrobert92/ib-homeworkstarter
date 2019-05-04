const groupAdultsByAgeRange = people => {
  if (people.length === 0) {
    return {};
  } else {
    return people.reduce(
      (grouping, person) => {
        if (person.age < 18) return grouping;
        else if (person.age < 21) grouping["20 and younger"].push(person);
        else if (person.age < 31) grouping["21-30"].push(person);
        else if (person.age < 41) grouping["31-40"].push(person);
        else if (person.age < 51) grouping["41-50"].push(person);
        else grouping["51 and older"].push(person);
        return grouping;
      },
      {
        "20 and younger": [],
        "21-30": [],
        "31-40": [],
        "41-50": [],
        "51 and older": []
      }
    );
  }
};

module.exports = { groupAdultsByAgeRange };

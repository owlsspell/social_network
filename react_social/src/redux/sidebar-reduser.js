let initialState = {
  friends: [
    {
      id: 1,
      name: "Dimych",
      img:
        "https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg",
    },
    {
      id: 2,
      name: "Oleg",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz4ywQJCspEpxM00mxm0YETNJ8tr6RbUJCaQ&usqp=CAU",
    },
  ],
};

const sidebarReduser = (state = initialState, action) => {
  return state;
};

export default sidebarReduser;

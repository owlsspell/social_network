let initialState = {
  friends: [
    {
      id: 1,
      name: "Dimych",
      img: "https://semantica.in/wp-content/uploads/2018/08/av-427845.png",
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

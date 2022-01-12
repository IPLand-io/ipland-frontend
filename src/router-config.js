export default [
  {
    path: "/",
    redirect: "/official",
  },
  {
    path: "/official",
    component: (resolve) => require(["./Official.vue"], resolve),
    children: [
      {
        path: "",
        component: (resolve) => require(["./pages/Home.vue"], resolve),
      }
    ]
  }
];

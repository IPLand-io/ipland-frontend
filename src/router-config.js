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
      },
      {
        path: "how-to-use",
        component: (resolve) => require(["./pages/howToUse.vue"], resolve),
      },
      {
        path: "jobs",
        component: (resolve) => require(["./pages/Jops.vue"], resolve),
      }
    ]
  }
];
